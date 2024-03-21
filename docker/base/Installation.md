# This folder will help you to create a base image that will be used for the cypress creation of browser images

## Creation of base image

-   Run the command "docker build -t lma-cypress:latest ."

## Tagging the base image for registry

-   Run the command "docker image tag lma-cypress:latest 10.0.6.215:5000/lma-cypress:latest"

## Pushing the image to registry

-   Run the command "docker push 10.0.6.215:5000/lma-cypress:latest"
