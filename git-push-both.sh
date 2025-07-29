#!/bin/bash
BRANCH=$(git branch --show-current)

echo "Pushing to origin ($BRANCH)..."
git push origin $BRANCH

echo "Pushing to new-origin ($BRANCH)..."
git push new-origin $BRANCH

echo "✅ Pushed to both remotes!"
