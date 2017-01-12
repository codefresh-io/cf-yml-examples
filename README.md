## Push to AWS Registry
[![Codefresh build status]( https://g.codefresh.io/api/badges/build?branch=push-to-aws&repoName=cf-yml-examples&repoOwner=codefresh-io&pipelineName=cf-yml examples&accountName=nikolai )]( https://g.codefresh.io/repositories/codefresh-io/cf-yml-examples/builds?filter=trigger:build )
You can integrate Codefresh with AWS as your Docker registry.
If you don't have AWS_USERNAME, AWS_PASSWORD and AWS_REGISTRY_URL you can get these values using following aws cli command

```
$ aws ecr get-login
```

After performing previous command you will see output
docker login -u AWS_USERNAME -p AWS_PASSWORD -e none https://AWS_REGISTRY_URL

More details you can find [here](http://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html)

