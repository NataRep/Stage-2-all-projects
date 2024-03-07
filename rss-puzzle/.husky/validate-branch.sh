#!/bin/sh

branch_name=$(git rev-parse --abbrev-ref HEAD)

if ! echo "$branch_name" | grep -E "^(master|main){1}$|^(feat|fix|refactor)/RSS-PZ-.+$" ; then
    echo "Invalid branch name. Branch names must follow the defined rules."
    exit 1
fi