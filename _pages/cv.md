---
layout: none
permalink: /cv/
title: Resume
nav: true
nav_order: 5
# redirect_to: /assets/pdf/Curriculum_Vitae.pdf
---
<script>
  setTimeout(function() {
    window.open("{{ site.baseurl }}/assets/pdf/Curriculum_Vitae.pdf", "_blank");
  }, 500); // Open in a new tab after 500ms delay

  setTimeout(function() {
    window.location.href = "{{ site.baseurl }}/";
  }, 1000); // Redirect the current page back to the homepage after 1 second
</script>

<p>If your resume doesn't open automatically, <a href="{{ site.baseurl }}/assets/pdf/Curriculum_Vitae.pdf" target="_blank">click here</a>.</p>
