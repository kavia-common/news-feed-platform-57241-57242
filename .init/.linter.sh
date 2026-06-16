#!/bin/bash
cd /home/kavia/workspace/code-generation/news-feed-platform-57241-57242/boca_juniors_news_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

