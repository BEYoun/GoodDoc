resource "aws_eip" "cabinets-service-eip" {
  instance = module.cabinets-service.instance-id
}

module "cabinets-service" {
  source = "./node-server"

  ami-id               = "ami-0b3e57ee3b63dd76b"
  iam-instance-profile = module.cabinets-service-codedeploy.iam-instance-profile
  key-pair             = aws_key_pair.microservices-demo-key.key_name
  name                 = "cabinets-service"
  private-ip           = "10.0.1.7"
  subnet-id            = aws_subnet.microservices-demo-subnet-private-1.id
  vpc-security-group-ids = [
    aws_security_group.allow-internal-http.id,
    aws_security_group.allow-ssh.id,
    aws_security_group.allow-all-outbound.id
  ]
}

module "cabinets-service-codedeploy" {
  source = "./codedeploy-app"

  app-name          = "cabinets-service"
  ec2-instance-name = module.cabinets-service.name
}

module "cabinets-service-db" {
  source = "./mysql-db"

  apply-immediately      = true
  db-name                = "db"
  db-subnet-group-name   = aws_db_subnet_group.private.id
  identifier             = "cabinets-service-db"
  password               = var.cabinets-service-db-password
  publicly-accessible    = false
  username               = var.cabinets-service-db-username
  vpc-security-group-ids = [aws_security_group.allow-internal-mysql.id]
}