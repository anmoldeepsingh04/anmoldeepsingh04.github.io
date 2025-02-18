---
layout: page
title: Turbulent Combustion Modeling Using Deep Learning
description: Artificial Neural Network to model CH4-H2 bluff- body turbulent combustion
img: assets/img/combustion.jpg
importance: 1
category: Academic
related_publications: true
---

**Author:** Anmoldeep Singh  
**Advisor:** [Dr. R.N. Roy](https://iitgoa.ac.in/SMS-faculty-profile/?uid=rudra&&exp=ME)

<div style="display: flex; justify-content: center; gap: 2rem; align-items: center; margin-bottom: 2rem;">

  <a href="/assets/pdf/BTech_Thesis.pdf" target="_blank" style="text-decoration: none; text-align: center;">
    <i class="fas fa-file-pdf fa-3x"></i><br>
    <span>Read Thesis</span>
  </a>

</div>

---

## **Abstract**

This project mainly investigate turbulent flames which are usually observed in the practical combustors. We need both turbulence and combustion/chemistry solvers to model turbulent flames. In this project initially we intend to develop an ANN model which will be used to predict the flame structure of CH4/H2 and/or CH4/H2O/N2 O2 flames. Further, the developed ANN model we will be interfaced with the opensource CFD solver i.e., OpenFOAM to investigate turbulent flames. 

---

● Conducted numerical investigation of turbulent reacting flows using open-source
CFD solver OpenFOAM coupled with Flamelet Progress Variable Model
● Designed and trained an Artificial Neural Network to replace OpenFOAM-Flamelet
Progress Variable-based model to simulate and analyze turbulent flame dynamics
● Achieved significant reduction in storage space requirement compared to the
OpenFOAM-FPV model

<!-- To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above: -->

<!-- {% raw %}

<!-- ```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
``` -->

<!-- {% endraw %} -->
