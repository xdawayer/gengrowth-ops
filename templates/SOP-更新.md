<%*
const title = await tp.system.prompt("SOP 标题（比如：小红书发文 SOP）");
const author = await tp.system.suggester(
  ["Lynne", "wzb", "seo-operator", "social-operator"],
  ["Lynne", "wzb", "seo-operator", "social-operator"]
);
%>
---
title: "<% title %>"
date: <% tp.date.now("YYYY-MM-DD") %>
author: "<% author %>"
target: docs/03-marketing/
review: required
tags:
  - sop
---

# <% title %>

## 目的
- 

## 步骤
1. 
2. 
3. 

## 注意事项
- 
