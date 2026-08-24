---
layout: page

title: Neural Network from Scratch in Python

description: Implementation and training of a neural network from first principles without deep learning frameworks

technologies: Python | NumPy | Neural Networks | Machine Learning | Backpropagation | Gradient Descent | MNIST

img: assets/img/dl_scratch.png

importance: 5

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

<!-- **Repository:** [GitHub Repository](https://github.com/anmoldeepsingh04/NeuralNetwork) -->

---

## **Abstract**

This project implements and trains a feed-forward neural network from scratch using Python and NumPy, without relying on high-level deep learning frameworks such as PyTorch or TensorFlow. The primary motivation was to develop a deeper understanding of the mathematical and computational foundations underlying modern neural networks.

The implementation builds the complete training pipeline from fundamental numerical operations, including forward propagation, activation functions, loss computation, backpropagation, gradient calculation, and parameter updates. The network is trained to perform handwritten digit classification on the MNIST dataset, demonstrating how learning emerges from the iterative optimization of model parameters.

This project also served as a foundation for the subsequent development of a similar deep learning framework in C++, allowing the underlying concepts to be explored at a lower level.

---

## **Objective**

The objective of this project was to implement a neural network without using high-level deep learning frameworks such as PyTorch or TensorFlow.

The implementation focuses on understanding the mathematical operations underlying forward propagation, loss computation, backpropagation, and parameter optimization. Rather than treating neural networks as black-box models, the project explores how each component of the training process can be constructed directly from numerical operations.

---

## **Implementation**

<ul>

<li>Implemented a feed-forward neural network architecture from scratch</li>

<li>Implemented neural network layers using NumPy-based matrix operations</li>

<li>Implemented forward propagation through successive network layers</li>

<li>Implemented activation functions and their derivatives</li>

<li>Implemented loss computation for multi-class classification</li>

<li>Implemented backpropagation to calculate gradients of the model parameters</li>

<li>Implemented gradient-based parameter updates during training</li>

<li>Implemented softmax-based multi-class classification</li>

</ul>

---

## **Dataset**

The network was trained and evaluated using the MNIST handwritten digit dataset. The dataset consists of grayscale images representing handwritten digits from 0 to 9.

Each image is represented as a 28 × 28 grid of pixel intensities. Before being passed to the neural network, the images are transformed into numerical input vectors by flattening the two-dimensional image representation.

The dataset provides separate training and testing sets, allowing the model to be evaluated on previously unseen examples. The output labels correspond to ten possible digit classes, making the problem a multi-class classification task.

---

## **Training**

The network parameters are optimized through iterative gradient-based learning. During each training iteration, the model performs forward propagation to generate predictions, calculates the corresponding loss, and then propagates gradients backward through the network to update its parameters.

<ul>

<li>Optimizer: Gradient descent-based parameter updates</li>

<li>Learning rate: Experimentally selected during implementation</li>

<li>Training procedure: Iterative forward propagation and backpropagation</li>

<li>Batch size: Determined by the implementation and training configuration</li>

<li>Classification output: Softmax probability distribution</li>

<li>Loss function: Multi-class classification loss</li>

</ul>

---

## **Results**

The implementation successfully learned meaningful representations from the MNIST dataset and achieved approximately 90% accuracy on both the training and testing data. This demonstrated that a relatively simple neural network, when implemented directly from the underlying mathematical operations, can successfully perform handwritten digit classification.

<ul>

<li>Training accuracy: Approximately 90%</li>

<li>Testing accuracy: Approximately 90%</li>

<li>Successfully classified handwritten digits across ten output classes</li>

<li>Demonstrated complete neural network training without a deep learning framework</li>

</ul>

---

## **Key Learning Outcomes**

<ul>

<li>Developed a mathematical understanding of forward and backward propagation</li>

<li>Implemented neural network training without relying on a deep learning framework</li>

<li>Developed a practical understanding of gradient-based optimization</li>

<li>Explored the relationship between matrix operations and neural network computation</li>

<li>Developed an understanding of multi-class classification using softmax</li>

<li>Established the conceptual foundation for the subsequent C++ deep learning framework</li>

</ul>
