#!/bin/bash

export DEBIAN_FRONTEND=noninteractive

#uninstall pnpm
npm uninstall pnpm
#installing pnpm as global
npm install pnpm@7.2.1 -g

#get the chrome version. Please visit https://www.ubuntuupdates.org/package/google_chrome/stable/main/base/google-chrome-stable
# for more versions
wget http://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_114.0.5735.90-1_amd64.deb

#installing the google chrome package
dpkg -i google-chrome-stable_114.0.5735.90-1_amd64.deb
apt-get install -f -y
apt-get update
apt-get install -y unzip libxi6 gnupg gnupg2 gnupg1 libgconf-2-4

#remove after the installation
rm -fr google-chrome-stable_114.0.5735.90-1_amd64.deb