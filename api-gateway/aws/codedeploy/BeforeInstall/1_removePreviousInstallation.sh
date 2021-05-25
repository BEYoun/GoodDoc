#!/bin/sh

deployment_dir=/opt/microservices-demo/api-gateway
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  rm -rf $deployment_dir
fi