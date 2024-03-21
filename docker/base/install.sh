#!/bin/bash

#install the utilities
apt-get install -y apt-utils wget

#install curl
apt-get install -y curl

#install nvm
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.nvm/nvm.sh

#since the node module is still version 14.16 then we will use the version 16.3
nvm install 16.3.0
nvm use 16.3.0

#install other modules needed for creating the base image
apt-get update
apt-get install -y unzip libxi6 gnupg gnupg2 gnupg1 libgconf-2-4
