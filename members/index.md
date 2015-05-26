---
layout: page
title: Collaborators
excerpt: "The MINED Group @ Georgia Tech"
search_omit: false
---

<ul class="post-list">
    
	<h1> Faculty </h1>
	
	<table>
	{% for post in site.posts %} 
		{% if post.categories contains 'members' %}{% if post.tags contains 'faculty' %}
		<tr>
		<td valign="middle">
			<li>
				{% if post.author.image %}<img src="{{ post.author.image }}" style="float: left; height: 125px; border-radius: 50%; border: 25px solid transparent">{% endif %}
					<article style="margin:40px; padding:0">					
						<a href="{{ site.url }}{{ post.url }}">
							<b>{{ post.author.name }}</b>
							<span class="entry-date">
								<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
							</span>
							<p>
							{% if post.author.role %} 
								<span class="excerpt">{{ post.author.role }}</span>
							{% endif %}
							</p>
						</a>

					</article>
			</li>
		</td>
		</tr>
		{% endif %}{% endif %}
	{% endfor %}
	</table>
	
	<h1> Post-Doc and Visiting Faculty </h1>

	<table>
	{% for post in site.posts %} 
		{% if post.categories contains 'members' %}{% if post.tags contains 'post' %}
		<tr>
		<td valign="middle">
			<li>
				{% if post.author.image %}<img src="{{ post.author.image }}" style="float: left; height: 125px; border-radius: 50%; border: 25px solid transparent">{% endif %}
					<article style="margin:40px; padding:0">					
						<a href="{{ site.url }}{{ post.url }}"><b>{{ post.author.name }}</b><span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.author.role %} <span class="excerpt">{{ post.author.role }}</span>{% endif %}</a>
					</article>
			</li>
		</td>
		</tr>
		{% endif %}{% endif %}
	{% endfor %}
	</table>
	
	<h1> Graduate Students </h1>
	
	<table>
	{% for post in site.posts %} 
		{% if post.categories contains 'members' %}{% if post.tags contains 'grad' %}
		<tr>
		<td valign="middle">
			<li>
				{% if post.author.image %}<img src="{{ post.author.image }}" style="float: left; height: 125px; border-radius: 50%; border: 25px solid transparent">{% endif %}
					<article style="margin:40px; padding:0">					
						<a href="{{ site.url }}{{ post.url }}"><b>{{ post.author.name }}</b><span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.author.role %} <span class="excerpt">{{ post.author.role }}</span>{% endif %}</a>
					</article>
			</li>
		</td>
		</tr>
		{% endif %}{% endif %}
	{% endfor %}
	</table>
	
	<h1> Undergraduate Students </h1>
	
	<table>
	{% for post in site.posts %} 
		{% if post.categories contains 'members' %}{% if post.tags contains 'ug' %}
		<tr>
		<td valign="middle">
			<li>
				{% if post.author.image %}<img src="{{ post.author.image }}" style="float: left; height: 125px; border-radius: 50%; border: 25px solid transparent">{% endif %}
					<article style="margin:40px; padding:0">					
						<a href="{{ site.url }}{{ post.url }}"><b>{{ post.author.name }}</b><span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.author.role %} <span class="excerpt">{{ post.author.role }}</span>{% endif %}</a>
					</article>
			</li>
		</td>
		</tr>
		{% endif %}{% endif %}
	{% endfor %}
	</table>
	
</ul>
