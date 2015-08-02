---
layout: default
title: Blog Posts by Tag
desc: "A list of Joe's blog posts organized by tags"
permalink: /tag/

---

<ul class="blog-tags-list">
  {% assign sorted_tags = site.tags | sort %}
  {% for tag in sorted_tags %}
    {% assign t = tag | first %}
    {% assign posts = tag | last %}
    <li class="blog-tag-item" id="{{ t }}-item">
      <a href onclick="filter('{{ t }}'); return false;">{{ t }}</a>
    </li>
  {% endfor %}
</ul>