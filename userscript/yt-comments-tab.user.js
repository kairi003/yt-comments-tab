// ==UserScript==
// @name         yt-comments-tab
// @namespace    https://github.com/kairi003/
// @version      0.1.1
// @description  Display tabs for switching between related videos and comments on the YouTube in single-column mode.
// @author       kairi003
// @match        https://www.youtube.com/*
// @updateURL    https://github.com/kairi003/yt-comments-tab/raw/master/userscript/yt-comments-tab.user.js
// @downloadURL  https://github.com/kairi003/yt-comments-tab/raw/master/userscript/yt-comments-tab.user.js
// @icon         https://www.youtube.com/favicon.ico
// @grant        none
// @run-at       document-end
// ==/UserScript==

{
  'use strict';
  document.head.insertAdjacentHTML('beforeend', `<style>
  .comments-tab-row {
    display: none;
    text-align: left;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid var(--yt-spec-text-primary);
  }

  .comments-tab-row li {
    display: inline-flex;
    align-items: center;
    height: 32px;
    border: none;
    border-radius: 8px 8px 0 0;
    box-sizing: border-box;
    padding: 0 var(--ytd-margin-3x);
    background-color: var(--yt-spec-badge-chip-background);
    color: var(--yt-spec-text-primary);
    font-size: var(--ytd-user-comment-font-size);
    font-weight: var(--ytd-user-comment-font-weight);
    line-height: var(--ytd-user-comment-line-height);
    letter-spacing: var(--ytd-user-comment-letter-spacing);
    font-family: var(--ytd-user-comment-font-family);
    transition: background-color 0.5s;
  }

  .comments-tab-row li:has(input:checked) {
    background-color: var(--yt-spec-text-primary);
    color: var(--yt-spec-text-primary-inverse);
  }

  .comments-tab-row input {
    display: none;
  }

  ytd-watch-flexy:not([is-two-columns_])
  .comments-tab-row {
    display: block;
  }

  ytd-watch-flexy:not([is-two-columns_])
  .comments-tab-row:not(:has([value=related]:checked))
  ~ #related {
    display: none;
  }

  ytd-watch-flexy:not([is-two-columns_])
  .comments-tab-row:not(:has([value=comments]:checked))
  ~ #comments {
    display: none;
  }
</style>`);
  const cid = setInterval(() => {
    const before = document.querySelector('#merch-shelf');
    if (!before) return;
    before.insertAdjacentHTML('afterend', `<ul id="commentsTabRow" class="comments-tab-row">
  <li>
    <label><input type="radio" name="comments-tab" value="comments" checked>Comments</label>
  </li>
  <li>
    <label><input type="radio" name="comments-tab" value="related">Related</label>
  </li>
</ul>`);
    clearInterval(cid);
  }, 100);
}