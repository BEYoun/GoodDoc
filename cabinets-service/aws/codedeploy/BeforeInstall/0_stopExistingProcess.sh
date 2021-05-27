#!/bin/sh

deployment_dir=/opt/microservices-demo/chat-service
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  cd $deployment_dir

  pm2 stop chat-service || true
fi
