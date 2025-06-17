---
title: hummingbird.js
publishDate: 2015-08-14 00:00:00
img: /assets/stock-1.jpg
imgAlt: Drop down list of typeahead suggestions
description: |
  Misspellings and nicknames are no match for this fast and forgiving typeahead engine
detailAvailable: true
repo: https://github.com/squince/hummingbird.js
label: published
age: old
tags:
  - NPM
  - JavaScript
  - Type Ahead
---

Originally designed to handle name searches better than a search engine when looking specifically for a known value. Names can be of people, places, or things - so long as the list of names is known in advance and finite. The algorithm uses n-grams of consecutive characters to find and rank the best matches to a user supplied substring.
<br/><br/>
For example, if I want to populate a drop down with the exact string `Massachusetts`, but a user types `Masachussets` which searches against a list of states and provinces from around the world - the correct one will be returned at the top of the list. Other entries are only returned if they exceed a configurable score threshold.