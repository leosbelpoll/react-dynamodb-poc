# React DynamoDB PoC

## Usage

Copy `.env_TEMPLATE` file to `.env` en set current  values.

## Generate fake data

Run in the command line ```aws dynamodb batch-write-item --region us-east-1 --request-items file://./jobs.json```
