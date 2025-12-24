---
layout: page
title: Psychiatric Conditions
description: An exploratory project using machine learning to predict psychiatric conditions.
img: assets/img/EEG.jpeg
importance: 1
category: work
giscus_comments: false
---

<style>
.inline-hover-underline {
  color: white;
  text-decoration: none;
}
.inline-hover-underline:hover {
  text-decoration: underline;
}
</style>

This project develops and evaluates a transparent machine learning pipeline to detect and differentiate common psychiatric conditions using a large open quantitative EEG dataset. It systematically compares classical models and neural networks on both a binary patient-versus-control task and a series of one-vs-rest diagnostic classifiers, using careful preprocessing, PCA-based dimensionality reduction, and stratified cross-validation for model selection. The best-performing patient-versus-control model, a tuned random forest on PCA components, achieves solid cross-validated ROC AUC but reveals strong sensitivity to class imbalance and threshold choice on a held-out test set. One-vs-rest models for individual diagnoses show that some conditions (like healthy controls and addictive disorders) are moderately separable, while others remain difficult to distinguish, especially under realistic test conditions. Together, these findings illustrate both the promise and fragility of EEG-based psychiatric classification when moved from cross-validation to true out-of-sample evaluation.

To move beyond raw accuracy, the project emphasizes interpretability and trustworthiness in model behavior. PCA loadings and two-dimensional embeddings are used to visualize how subjects and decision boundaries sit in a reduced feature space, offering geometric intuition about separability. SHAP analysis on tree-based pipelines then highlights which principal components and underlying EEG features contribute most strongly to different diagnostic predictions, revealing distributed, band- and region-specific patterns rather than single dominant markers. This interpretability layer is explicitly framed as exploratory rather than definitive, acknowledging dataset biases, class imbalance, and limited clinical metadata. Overall, the work serves as a reproducible case study in how open EEG data and standard ML techniques can be combined to probe the feasibility and limitations of objective, model-driven support for psychiatric diagnosis.

<h1><a href='#'>Publication:</a></h1>
<iframe src="/assets/pdf/CSML_Final_Paper_Psychiatric_Analysis.pdf" width="100%" height="600px" style="border: none;"></iframe>
