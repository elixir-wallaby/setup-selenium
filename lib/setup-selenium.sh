#!/bin/bash

set -eo pipefail

wget -c -nc --retry-connrefused --tries=0 https://selenium-release.storage.googleapis.com/3.14/selenium-server-standalone-3.14.0.jar -O "$HOME/selenium.jar"

# Geckodriver requires java 8.
sudo add-apt-repository -y ppa:openjdk-r/ppa
sudo apt-get update && sudo apt-get install -y openjdk-8-jdk

# Install jdk switcher to easily change default jdk
git clone https://github.com/michaelklishin/jdk_switcher.git "$HOME/jdk_switcher"
. "$HOME/jdk_switcher/jdk_switcher.sh"
jdk_switcher use openjdk8

# Download geckodriver
wget -c -nc --retry-connrefused --tries=0 https://github.com/mozilla/geckodriver/releases/download/v0.26.0/geckodriver-v0.26.0-linux64.tar.gz -O "$HOME/geckodriver.tar.gz"
tar xfz "$HOME/geckodriver.tar.gz" -C /usr/local/bin/

function selenium-server() {
  nohup java -jar "$HOME/selenium.jar" &
  sleep 10
  cat nohup.out
}
