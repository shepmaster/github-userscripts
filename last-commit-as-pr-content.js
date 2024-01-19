// ==UserScript==
// @name        Useful Pull Request Content
// @description The last commit is the best
// @match       https://github.com/*/*/compare/*
// @updateURL   https://github.com/shepmaster/github-userscripts/raw/main/last-commit-as-pr-content.js
// ==/UserScript==

const title = document.getElementById('pull_request_title');
const body = document.getElementById('pull_request_body');

const commits = document.getElementsByClassName('js-commits-list-item');
const lastCommit = commits[commits.length - 1];
const lastTitle = lastCommit.getElementsByClassName('markdown-title')[0];
const lastBody = lastCommit.getElementsByClassName('Details-content--hidden')[0];

title.value = lastTitle.textContent;
body.value = lastBody.textContent;
