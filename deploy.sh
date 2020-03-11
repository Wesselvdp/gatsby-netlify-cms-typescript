#!/bin/sh

# Instantly exists our script whenever an error occurs
set -e

# # Pipe our environmental SSH key variable into a file
# mkdir -p $HOME/.ssh
# echo "${deploy_key}" > $HOME/.ssh/deploy_key
# chmod 600 $HOME/.ssh/deploy_key # SSH keys need to be readonly

# # Where to deploy our site on our server
# target="/var/www/v2"

# # The actual rsync
# sh -c "rsync -azh -e 'ssh -i $HOME/.ssh/deploy_key -o StrictHostKeyChecking=no' public/* --rsync-path='mkdir -p ${target} && rsync' cheil@<server>:${target}"

# # Remove our deploy_key again since it's no longer needed
# rm $HOME/.ssh/deploy_key

npm run build && scp -r dist/* deployer@141.138.139.219:/var/www/v2