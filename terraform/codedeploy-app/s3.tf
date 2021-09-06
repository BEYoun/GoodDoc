resource "aws_s3_bucket" "deploy-bucket" {
  bucket = "goodoc-${var.app-name}-deployment"
}