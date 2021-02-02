# dev-test-aws-zip-pipe Lamda

`npm i s3-zip`
`npm i aws-sdk`

zip everything in the folder


Create
```
aws lambda create-function --function-name dev-test-aws-zip-pipe --zip-file fileb://zipper-lamda.zip --region us-east-1  --handler index.handler --runtime nodejs12.x --timeout 900  --memory-size 1024 --role arn:aws:iam::340721671329:role/pieter-testing --profile default
```


