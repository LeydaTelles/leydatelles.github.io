---
layout: page
title: Lung Cancer
description: An exploratory project using machine learning to predict lung cancer.
img: assets/img/Lung_Cancer.png
importance: 1
category: work
giscus_comments: false
---

In this exploratory project, I developed and evaluated machine learning models to predict the likelihood of lung cancer based on various risk factors and symptoms. Using a synthetic dataset of 300 individuals with demographic, lifestyle, and symptom data, I built both logistic regression and random forest classifiers, achieving test accuracy up to 89% with ROC AUCs near 0.95. Key predictors included alcohol consumption, age, and respiratory symptoms—factors that aligned well with clinical understanding of lung cancer risk.

To ensure the models were not just accurate but interpretable, I incorporated SHAP (SHapley Additive Explanations) to visualize how individual features influenced predictions. This provided insight into the logic behind the model’s outputs and reinforced its potential applicability in health screening. The project demonstrates how simple, survey-based tools—when paired with interpretable AI—can support early detection efforts in healthcare, even when data is sparce. 

<h1><a href='#'>Publication:</a></h1>
<iframe src="/assets/pdf/Final_Project_AI_Healthcare.pdf" width="100%" height="600px" style="border: none;"></iframe>