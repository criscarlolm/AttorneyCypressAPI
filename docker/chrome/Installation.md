# This folder will help you to create the chrome images for the cyrpess runtime

## Pre-requisite

Before running the docker command, please change the version inside the chrome.sh. You can find the
different versions in this website below.
https://www.ubuntuupdates.org/package/google_chrome/stable/main/base/google-chrome-stable

## Creation of base image

-   Run the command "docker build -t cypress-chrome:114 .", where 114 is the major version of chrome
    you are using

## Tagging the base image for registry

-   Run the command "docker image tag cypress-chrome:114 10.0.6.215:5000/cypress-chrome:114"

## Pushing the image to registry

-   Run the command "docker push 10.0.6.215:5000/cypress-chrome:114"
