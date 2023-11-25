import boto3

ecr_client = boto3.client('ecr')

repository_name = 'meet-code'
response = ecr_client.create_repository(repositoryName=repository_name)

repository_uri = response['repository']['repositoryUri']
print(repository_uri)

# 242811936701.dkr.ecr.us-east-1.amazonaws.com/meet-code