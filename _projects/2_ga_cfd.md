---
layout: page
title: Genetic Algorithm for CFD Geometry Optimization
description: Evolutionary optimization of CFD geometries using simulation-based drag evaluation
technologies: Python | Genetic Algorithms | CFD | Optimization | FluidChen | VTK | ParaView | Numerical Simulation
img: PLACEHOLDER
importance: 6
category: Academic
related_publications: false
---

**Author:** Anmoldeep Singh  
**Repository:** PLACEHOLDER

---

## **Abstract**

PLACEHOLDER

Describe the use of a Genetic Algorithm to optimize obstacle geometries using CFD simulations and drag as the objective function.

---

## **Problem**

PLACEHOLDER

Explain the geometry optimization problem and why CFD simulations are used to evaluate candidate designs.

---

## **Optimization Pipeline**

The optimization workflow consists of:

```text
Chromosome
    ↓
Geometry Generation
    ↓
PGM Geometry
    ↓
FluidChen CFD Simulation
    ↓
VTK Output
    ↓
Drag Calculation
    ↓
Fitness Evaluation
    ↓
Selection
    ↓
Crossover / Mutation
    ↓
Next Generation