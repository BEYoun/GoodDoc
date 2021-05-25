resource "aws_s3_bucket" "deploy-bucket" {
  bucket = "younes-microservices-demo-${var.app-name}-deployment"
}