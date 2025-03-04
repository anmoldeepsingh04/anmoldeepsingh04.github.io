---
layout: page
title: Smart Boiler Control
description: Using Machine Learning and Predictive Modeling for pressure and water-level control
technologies: Python, TensorFlow, Stochastic Gradient Descent (SGD)
img: assets/img/BoilerDynamics.jpg
# redirect: https://unsplash.com
importance: 4
# category: Professional
---

## **Abstract**
<ul>
    <li>Developed a hybrid mathematical model by integrating data-driven models for combustion and heat transfer with a physics-based model for boiler dynamics to control water level and pressure by dynamically adjusting combustion parameters based on changes in fuel type and ambient conditions</li>
    <li>Implemented SGD (Stochastic Gradient Descent) with ADAM optimizer to improve model parameters</li>
    <li>Created the codebase in Python for the control system to maximize performance and minimize human interference in operations</li>
</ul>
● 
● 
● Created the codebase in Python for the control system to maximize performance
and minimize human interference in operations

---

## **Description**
Grate-fired boilers, commonly used in industrial applications, face significant challenges in pressure and water level control due to combustion lag and fluctuating fuel properties. The problem is particularly evident in coal-fired grate boilers, where lower volatile content and higher char content lead to delayed combustion and poor response to steam demand changes. Traditional modeling methods struggle to predict and control these fluctuations, resulting in suboptimal performance, inefficient combustion, and increased operational instability.

Several approaches have been attempted to model boiler dynamics:
<ul>
    <li>Physics-Based Models
        <ul>
            <li>Conservation laws (mass, energy, and momentum) have been used for modeling combustion and boiler dynamics</li>
            <li>CFD models simulate combustion but are computationally expensive</li>
            <li>Empirical models simplify calculations but lack adaptability to dynamic fuel variations</li>
        </ul>
    </li>
    <li>Data-Driven Approaches
        <ul>
            <li>Machine learning models, such as Artificial Neural Networks (ANNs), have been applied for predictive modeling</li>
            <li>Fuzzy clustering and support vector machines have been used for combustion and emission control</li>
            <li>However, data-driven models suffer from inconsistency and randomness, particularly under fluctuating load conditions</li>
        </ul>
    </li>
    <li>Hybrid Approaches
        <ul>
            <li>A combination of physics-based and data-driven models has been explored to improve prediction accuracy</li>
            <li>Multi-objective optimization techniques (Pareto front, evolutionary algorithms) have been used but are computationally expensive</li>
        </ul>
    </li>
</ul>

The paper proposes a hybrid predictive modeling approach that integrates:
<ul>
    <li>A thermodynamic boiler dynamics model to improve consistency and reduce randomness</li>
    <li>A data-driven model to estimate combustion rate, heat transfer, and circulation performance dynamically</li>
    <li>A Stochastic Gradient Descent (SGD) algorithm to optimize predictions by continuously updating model parameters based on real-time variations in fuel and combustion characteristics. The SGD algorithm is chosen for its: 
        <ul>
            <li>Fast learning capabilities and ability to adjust to changing fuel properties</li>
            <li>Reduced computational cost compared to traditional optimization methods</li>
            <li>Adaptability to varying combustion conditions, making it suitable for real-time boiler control</li>
        </ul>
    </li>
</ul>
The multi-objective optimization technique (scalarization) is used to minimize pressure and water level errors in the model

Key findings include:
<ul>
    <li>Improved prediction accuracy: The model showed a 95% agreement with on-site data on validation</li>
    <li>Real-time adaptability: The SGD algorithm captured fluctuations in fuel properties and adjusted model parameters accordingly, reducing prediction errors in dynamic conditions. Unlike traditional models, it accounted for slagging, fouling, and timewise heat transfer deterioration</li>
    <li>Improper parameter initialization led to delayed convergence, highlighting the need for optimized starting values</li>
</ul>

The proposed hybrid model with SGD optimization effectively enhances the predictability and control of grate-fired boilers, making it a promising tool for improving combustion efficiency, reducing pressure fluctuations, and optimizing boiler operations under varying load conditions.

