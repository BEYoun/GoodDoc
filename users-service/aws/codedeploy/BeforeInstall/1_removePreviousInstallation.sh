#!/bin/sh

deployment_dir=/opt/microservices-demo
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  rm -rf $deployment_dir
fi