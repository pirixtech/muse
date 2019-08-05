#!/usr/bin/env bash

set -euox pipefail

if [ "`git status -s`" ]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "Deleting old publication under docs folder ..."
rm -rf docs
mkdir docs
git worktree prune
rm -rf .git/worktrees/docs/

echo "Checking out master branch into public ..."
git worktree add -B master public upstream/master

echo "Removing existing files ..."
rm -rf docs/*

echo "Generating site ..."
hugo

echo "Updating master branch ..."
# cd docs
git add --all && git commit -m "Publishing to master branch docs folder (publish_to_github_page.sh)"

# echo "Pushing to github"
# git push --all