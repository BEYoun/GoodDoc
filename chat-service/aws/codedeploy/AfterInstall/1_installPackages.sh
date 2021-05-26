#!/bin/sh
cd /opt/microservices-demo/chat-service
mv .production.env .env
yarn
