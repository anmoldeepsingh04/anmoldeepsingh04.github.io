---
layout: page

title: Genetic Algorithm for CFD Geometry Optimization

description: Evolutionary optimization of CFD geometries using simulation-based drag evaluation

technologies: Python | Genetic Algorithms | CFD | Optimization | FluidChen | VTK | ParaView | Numerical Simulation

img: assets/img/ga_cfd.gif

importance: 6

category: Academic

related_publications: false
---

**Author:** Anmoldeep Singh

<!-- <div style="display: flex; justify-content: center; gap: 2rem; align-items: center; margin-bottom: 2rem;">

<a href="https://github.com/anmoldeepsingh04/scratchNN" target="_blank" style="text-decoration: none; text-align: center;">
    <i class="fab fa-github fa-3x"></i><br>
    <span>GitHub Repository</span>
  </a>

</div> -->

<!-- **Repository:**  -->

---

## **Abstract**

This project explores automated aerodynamic geometry optimization by coupling a Genetic Algorithm (GA) with Computational Fluid Dynamics (CFD) simulations. Candidate obstacle geometries are evolved over multiple generations, with each geometry evaluated using numerical flow simulations and aerodynamic drag as the optimization objective.

The framework integrates geometry generation, CFD simulation, post-processing, drag calculation, and evolutionary optimization into an automated workflow. This allows complex geometries to be explored without requiring an explicit analytical relationship between geometry and aerodynamic performance.

---

## **Objective**

The objective of this project was to develop an automated optimization framework capable of identifying obstacle geometries with reduced aerodynamic drag.

Instead of relying on analytical approximations, each candidate geometry is evaluated directly using CFD simulations. The resulting drag value is used as the fitness measure for the Genetic Algorithm, allowing the population of candidate geometries to evolve toward improved aerodynamic performance.

The optimization problem can be expressed as:

The optimization problem can be expressed as:

$$
\min_{\mathbf{x}} D(\mathbf{x})
$$

where $$\mathbf{x}$$ represents the parameters defining the geometry and $$D$$ represents the drag calculated from the CFD simulation.

---

## **Optimization Pipeline**

The optimization workflow consists of:

<div style="text-align: center; line-height: 1.8;">
  <strong>Chromosome</strong><br>
  ↓<br>
  <strong>Geometry Generation</strong><br>
  ↓<br>
  <strong>PGM Geometry</strong><br>
  ↓<br>
  <strong>FluidChen CFD Simulation</strong><br>
  ↓<br>
  <strong>VTK Output</strong><br>
  ↓<br>
  <strong>Drag Calculation</strong><br>
  ↓<br>
  <strong>Fitness Evaluation</strong><br>
  ↓<br>
  <strong>Selection</strong><br>
  ↓<br>
  <strong>Crossover / Mutation</strong><br>
  ↓<br>
  <strong>Next Generation</strong>
</div>

---

## **Implementation**

<ul>

    <li>Represented candidate obstacle geometries as chromosomes for evolutionary optimization</li>

    <li>Implemented automated conversion of chromosome parameters into simulation-ready geometries</li>

    <li>Generated PGM files to represent the obstacle geometry within the computational domain</li>

    <li>Coupled the optimization pipeline with the FluidChen CFD solver</li>

    <li>Automated CFD simulations for each candidate geometry in the population</li>

    <li>Processed VTK simulation output to extract the information required for drag evaluation</li>

    <li>Used aerodynamic drag as the fitness measure for the optimization process</li>

    <li>Implemented evolutionary operations including selection, crossover, and mutation to generate successive populations</li>

</ul>

---

## **CFD Simulation**

Each candidate geometry is evaluated using FluidChen, an in-house CFD solver that computes the flow field around the obstacle.

The geometry is provided to the solver in PGM format, defining the solid and fluid regions within the computational domain. Following each simulation, the computed pressure and velocity fields are exported in VTK format.

The simulation results can be visualized using ParaView and are processed programmatically to calculate the aerodynamic performance of each geometry.

---

## **Fitness Evaluation**

The fitness of each candidate geometry is determined using the drag calculated from its CFD simulation.

Geometries producing lower drag are assigned better fitness values and are preferentially selected during the evolutionary process. The optimization therefore relies on the physical flow response obtained from numerical simulation rather than on a predefined approximation of aerodynamic performance.

---

## **Evolutionary Optimization**

The Genetic Algorithm improves the population over multiple generations through:

<ul>

<li><b>Selection:</b> Higher-performing geometries are preferentially selected as parent designs</li>

<li><b>Crossover:</b> Information from parent chromosomes is combined to generate new candidate geometries</li>

<li><b>Mutation:</b> Random variations are introduced to maintain diversity and explore new regions of the design space</li>

<li><b>Generational evolution:</b> Newly generated geometries are evaluated again through CFD simulations and incorporated into subsequent generations</li>

</ul>

---

## **Results**

The project successfully established an end-to-end automated workflow connecting evolutionary optimization with CFD simulations.

<ul>

<li>Automated the generation and evaluation of multiple obstacle geometries</li>

<li>Integrated the Genetic Algorithm directly with CFD-based drag evaluation</li>

<li>Established a reproducible workflow for storing population and simulation results across generations</li>

<li>Visualized optimized geometries and their corresponding flow fields using VTK and ParaView</li>

</ul>

---

## **Key Learning Outcomes**

<ul>

<li>Developed practical experience in simulation-based optimization</li>

<li>Applied Genetic Algorithms to a computational fluid dynamics problem</li>

<li>Developed an automated workflow connecting optimization, geometry generation, CFD simulation, and post-processing</li>

<li>Gained experience processing CFD results stored in VTK format</li>

<li>Developed a deeper understanding of the computational cost and challenges associated with coupling optimization algorithms with numerical simulations</li>

</ul>

---

## **Future Work**

Potential improvements to the framework include parallelizing CFD evaluations across a population, refining the chromosome representation, improving crossover and mutation strategies, and incorporating surrogate models to reduce the computational cost of repeated CFD simulations.
