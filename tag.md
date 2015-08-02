---
layout: default
title: Blog Posts by Tag
desc: "A list of Joe's blog posts organized by tags"
permalink: /tag/

---

{% for post in site.works reversed %}
{% if page.tags == "Original" %}
<div class="block">
  <a href="{{ post.url }}" class="thumbnail-wrap">
    <div class="thumbnail">
      <span class="overlay"><i>Detail View</i></span>
      <img src="{{ site.baseurl }}/img/loading.gif" data-src="{{ post.image }}" alt="{{ post.caption }}" class="img-unveil">
    </div>
    <h2>{{ post.title }}</h2>
  </a>
  <ul class="category">
    {% for tags in post.tags %}
    <li><a href="/works/{{ tags }}">{{ tags }}</a></li>
    {% endfor %}
  </ul>
</div>
{% else %}
{% endif %}
{% endfor %}