---
layout:     post
title:      Post Headline
date:       2015-06-01 12:00:00
author:     Materials Innovation
categories: blog
red: <span style="color:red">
blue: <span style="color:blue">
green: <span style="color:green">
endcolor: </span>
---
<!-- Start Writing Below in Markdown -->

#Headers:

# Header 1

## Header 2

### Header 3

#Styling:

**Bold**

*Italics*

***Bold and Italics***

#Lists:

1. Item 1

2. Item 2

* Unordered Item

  * Sub Item 1

    1. **Bold** Sub Sub Ordered Item

#Links:

[In-Line](https://www.google.com)

[I'm a reference-style link 1][1]

[I'm a reference-style link 1][2]

[1]:https://www.mozilla.org
[2]:http://www.reddit.com

#Images:

![Description](http://img3.wikia.nocookie.net/__cb20140102180853/fairytail/images/5/5b/Logo_Fairy_Tail_right.png)

#Code:

Inline `code`.

{% highlight python %}
import numpy as np
def _set_colors():
    HighRGB = np.array([26, 152, 80]) / 255.
{% endhighlight %}

#MathJax

Use MathJax for Math.
$$ A = \pi r^2 $$

#Tables:

Here | is | a | row!
|---------|:----------|:----------:|---------:|
is   |Left|  Center  |Right|
a    | cut | it | A
column  | short | B | C

#Quotes

> War does not decide who is *right*, only who is **left**.

# Rule

---

#HTML

Can write the whole post or sections in HTML for very specific needs. [For the advanced user or the code savvy.]

# Experimental Features 

## Color 
<span style="color:red">Red Text Incoming!</span>
{{page.red}} Red Text {{page.endcolor}}

or inline like this {{page.blue}}Red Text{{page.endcolor}} correct?
