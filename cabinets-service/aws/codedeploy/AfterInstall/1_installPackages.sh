#!/bin/sh
cd /opt/microservices-demo/cabinets-service
mv .production.env .env
yarn
