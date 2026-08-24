---
layout: page

title: Deep Learning Framework in C++

description: PyTorch-inspired deep learning framework implemented from scratch using standard C++

technologies: C++ | Machine Learning | Deep Learning | Tensor Operations | Automatic Differentiation | Neural Networks | CMake | GoogleTest

img: assets/img/dl_cpp.jpg

importance: 4

category: Personal

related_publications: false
---

**Author:** Anmoldeep Singh

<div style="display: flex; justify-content: center; gap: 2rem; align-items: center; margin-bottom: 2rem;">

<a href="https://github.com/anmoldeepsingh04/scratchNN" target="_blank" style="text-decoration: none; text-align: center;">
    <i class="fab fa-github fa-3x"></i><br>
    <span>GitHub Repository</span>
  </a>
  
</div>

<!-- **Repository:** [GitHub Repository](https://github.com/anmoldeepsingh04/scratchNN) -->

---

## **Abstract**

This project explores the implementation of the fundamental components of a deep learning framework from scratch using standard C++. Inspired by the architecture and design principles of modern frameworks such as PyTorch, the project focuses on understanding the computational mechanisms that operate beneath high-level deep learning abstractions.

The framework is being developed incrementally, beginning with a custom tensor implementation and the foundations required for automatic differentiation. Rather than relying on external numerical or machine learning libraries, the project emphasizes implementing core operations directly in C++ and understanding how tensors, computational graphs, gradients, and neural network operations can be represented and executed efficiently.

The long-term goal is to build a modular deep learning framework capable of supporting neural network construction, automatic differentiation, model training, and classification tasks.

---

## **Motivation**

Modern deep learning frameworks such as PyTorch provide highly optimized abstractions for tensors, automatic differentiation, neural networks, and optimization.

While these abstractions make machine learning research and development significantly easier, they also hide many of the underlying computational mechanisms. This project aims to understand these mechanisms by implementing the fundamental building blocks of a deep learning framework from first principles using standard C++.

The project also provides an opportunity to explore software architecture, memory management, data representation, and numerical computation in a lower-level programming environment.

---

## **Tensor Engine**

The project includes a custom tensor abstraction that forms the computational foundation of the framework.

Current and developing functionality includes:

<ul>

<li>Scalar tensors</li>

<li>One-dimensional tensors</li>

<li>Two-dimensional tensors</li>

<li>Shape and stride information</li>

<li>Tensor indexing and element access</li>

<li>Element-wise tensor operations</li>

<li>Matrix multiplication</li>

<li>Gradient storage for differentiable tensors</li>

</ul>

The tensor implementation is designed to provide the underlying data structure on which higher-level neural network operations and automatic differentiation can be built.

---

## **Automatic Differentiation**

A major objective of the framework is to implement reverse-mode automatic differentiation, which is the computational mechanism used by modern deep learning frameworks to efficiently calculate gradients during training.

The implementation is based on constructing relationships between tensors as operations are performed. Each differentiable tensor can retain information about the operations that produced it and the tensors that contributed to its creation.

The automatic differentiation system is being developed around the following concepts:

<ul>

<li><strong>Computational graph:</strong> Operations create relationships between input and output tensors that can be traversed during gradient computation.</li>

<li><strong>Parent tensors:</strong> Tensors involved in an operation are stored to establish dependencies within the computational graph.</li>

<li><strong>Gradient functions:</strong> Each differentiable operation stores the logic required to propagate gradients to its parent tensors.</li>

<li><strong>Backpropagation:</strong> Gradients are propagated backwards through the computational graph using the chain rule.</li>

<li><strong>Gradient accumulation:</strong> Gradients from multiple computational paths can be accumulated for tensors that contribute to several operations.</li>

<li><strong><code>requires_grad</code>:</strong> Tensors can be marked to indicate whether gradients should be tracked and computed for them.</li>

</ul>

This system forms the foundation for training neural networks using gradient-based optimization.

---

## **Neural Network Components**

The framework is being developed in stages, with the tensor and automatic differentiation engine forming the current foundation. Planned higher-level components include:

<ul>

<li>Neural network modules and layers built on top of the tensor abstraction</li>

<li>Activation functions and differentiable operations</li>

<li>Loss functions and gradient-based optimization algorithms</li>

</ul>

These components will eventually enable the construction and training of neural networks directly within the framework.

---

## **Testing**

The project uses GoogleTest for unit testing to validate the correctness of the framework's fundamental operations.

The current testing strategy includes:

<ul>

<li>Tensor construction tests</li>

<li>Indexing and element access tests</li>

<li>Shape and stride tests</li>

<li>Arithmetic operation tests</li>

<li>Matrix multiplication tests</li>

<li>Tests for tensor properties and gradient-related functionality as automatic differentiation is developed</li>

</ul>

Unit testing is an important part of the project because errors in low-level tensor operations can propagate into higher-level neural network computations and produce difficult-to-debug training behavior.

---

## **Results**

The project is currently under active development.

The core tensor abstraction and fundamental tensor operations provide the computational foundation for the framework. Automatic differentiation is being developed on top of this tensor engine, after which higher-level neural network components, optimization algorithms, and training workflows can be integrated.

The long-term objective is to use the completed framework to train neural networks on classification problems and compare the implementation with established deep learning frameworks.

---

## **Key Contributions**

<ul>

<li>Implemented a tensor abstraction from scratch in C++</li>

<li>Implemented core tensor operations without external numerical libraries</li>

<li>Designed the framework to support computational graphs and automatic differentiation</li>

<li>Developed the foundations required for gradient-based backpropagation</li>

<li>Built a modular CMake-based C++ project structure</li>

<li>Developed unit tests using GoogleTest</li>

</ul>
