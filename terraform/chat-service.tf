resource "aws_eip" "chat-service-eip" {
  instance = module.chat-service.instance-id
}

module "chat-service" {
  source = "./node-server"

  ami-id               = "ami-0b3e57ee3b63dd76b"
  iam-instance-profile = module.chat-service-codedeploy.iam-instance-profile
  key-pair             = aws_key_pair.microservices-demo-key.key_name
  name                 = "chat-service"
  private-ip           = "10.0.1.5"
  subnet-id            = aws_subnet.microservices-demo-subnet-private-1.id
  vpc-security-group-ids = [
    aws_security_group.allow-internal-http.id,
    aws_security_group.allow-ssh.id,
    aws_security_group.allow-all-outbound.id
  ]
}

module "chat-service-codedeploy" {
  source = "./codedeploy-app"

  app-name          = "chat-service"
  ec2-instance-name = module.chat-service.name
}

module "chat-service-db" {
  source = "./mysql-db"

  apply-immediately      = true
  db-name                = "db"
  db-subnet-group-name   = aws_db_subnet_group.private.id
  identifier             = "chat-service-db"
  password               = var.chat-service-db-password
  publicly-accessible    = false
  username               = var.chat-service-db-username
  vpc-security-group-ids = [aws_security_group.allow-internal-mysql.id]
}