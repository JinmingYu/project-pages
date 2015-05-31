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
			{% if post.author.image %}
					<img data-big="big-image.jpg" src="{{ post.author.image }}" style="float: left; height: 125px; border-radius: 50%; border: 25px solid transparent">
				{% endif %}
		</td>
		<td style="width:100%">
				<article style="margin:40px; padding:0">
					{% assign content = post.content | strip_newlines %}
						{% if content == ""  %}
							<a>
<!-- 							why doesn's it work here but works in the main page?
also, instead of manully push the date, is there a better sollution?
 -->								<b>{{ post.author.name }}</b>
								<span class="entry-date">
									<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
								</span>
								{% if post.author.role %} 
									<span class="excerpt">
										{{ post.author.role }}
									</span>
								{% endif %}
							</a>
						{% else %}
							<a href="{{ post.url | prepend: site.baseurl }}">
								<b>{{ post.author.name }}</b>
								<span class="entry-date">
									<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
								</span>
								{% if post.author.role %} 
									<span class="excerpt">
										{{ post.author.role }}
									</span>
								{% endif %}
							</a>
						{% endif %}
					</article>
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
			{% if post.author.image %}
					<img data-big="big-image.jpg" src="{{ post.author.image }}" style="float: left; height: 125px; border-radius: 50%; border: 25px solid transparent">
				{% endif %}
		</td>
		<td style="width:100%">
				<article style="margin:40px; padding:0">
					{% assign content = post.content | strip_newlines %}
						{% if content == ""  %}
							<a>
							<b>{{ post.author.name }}</b>
								<span class="entry-date">
									<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
								</span>
								{% if post.author.role %} 
									<span class="excerpt">
										{{ post.author.role }}
									</span>
								{% endif %}
							</a>
						{% else %}
							<a href="{{ post.url | prepend: site.baseurl }}">
								<b>{{ post.author.name }}</b>
								<span class="entry-date">
									<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
								</span>
								{% if post.author.role %} 
									<span class="excerpt">
										{{ post.author.role }}
									</span>
								{% endif %}
							</a>
						{% endif %}
					</article>
		</td>
		</tr>
		{% endif %}{% endif %}
	{% endfor %}
	</table>
<!-- 	<table>
	{% for post in site.posts %} 
		{% if post.categories contains 'members' %}{% if post.tags contains 'post' %}
		<tr>
		<td valign="middle">
			<li>
				{% if post.author.image %}<img data-big="big-image.jpg" src="{{ post.author.image }}" style="float: left; height: 125px; border-radius: 50%; border: 25px solid transparent">{% endif %}
					<article style="margin:40px; padding:0">{% assign content = post.content | strip_newlines %}
						{% if content == ""  %}
						<a><b>{{ post.author.name }}</b><span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.author.role %} <span class="excerpt">{{ post.author.role }}</span>{% endif %}</a>
						{% else %}
						<a href="{{ site.url }}{{ post.url }}"><b>{{ post.author.name }}</b><span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.author.role %} <span class="excerpt">{{ post.author.role }}</span>{% endif %}</a>
						{% endif %}
					</article>
			</li>
		</td>
		</tr>
		{% endif %}{% endif %}

	{% endfor %}
	</table> -->
	
	<h1> Graduate Students </h1>
	
	<table>
	{% for post in site.posts %} 
		{% if post.categories contains 'members' %}{% if post.tags contains 'grad' %}
		<tr>
		<td valign="middle">
			{% if post.author.image %}
					<img data-big="big-image.jpg" src="{{ post.author.image }}" style="float: left; height: 125px; border-radius: 50%; border: 25px solid transparent">
				{% endif %}
		</td>
		<td style="width:100%">
				<article style="margin:40px; padding:0">
					{% assign content = post.content | strip_newlines %}
						{% if content == ""  %}
							<a>
							<b>{{ post.author.name }}</b>
								<span class="entry-date">
									<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
								</span>
								{% if post.author.role %} 
									<span class="excerpt">
										{{ post.author.role }}
									</span>
								{% endif %}
							</a>
						{% else %}
							<a href="{{ post.url | prepend: site.baseurl }}">
								<b>{{ post.author.name }}</b>
								<span class="entry-date">
									<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
								</span>
								{% if post.author.role %} 
									<span class="excerpt">
										{{ post.author.role }}
									</span>
								{% endif %}
							</a>
						{% endif %}
					</article>
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
			{% if post.author.image %}
					<img data-big="big-image.jpg" src="{{ post.author.image }}" style="float: left; height: 125px; border-radius: 50%; border: 25px solid transparent">
				{% endif %}
		</td>
		<td style="width:100%">
				<article style="margin:40px; padding:0">
					{% assign content = post.content | strip_newlines %}
						{% if content == ""  %}
							<a>
								<b>{{ post.author.name }}</b>
								<span class="entry-date">
									<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
								</span>
								{% if post.author.role %} 
									<span class="excerpt">
										{{ post.author.role }}
									</span>
								{% endif %}
							</a>
						{% else %}
							<a href="{{ post.url | prepend: site.baseurl }}">
								<b>{{ post.author.name }}</b>
								<span class="entry-date">
									<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
								</span>
								{% if post.author.role %} 
									<span class="excerpt">
										{{ post.author.role }}
									</span>
								{% endif %}
							</a>
						{% endif %}
					</article>
		</td>
		</tr>
		{% endif %}{% endif %}
	{% endfor %}
	</table>
	
</ul>
