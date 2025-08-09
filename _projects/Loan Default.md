---
layout: page
title: Loan Default
description: An AI/ML-based approach to predicting loan defaults.
img: assets/img/loan_default.png
importance: 1
category: work
# related_publications: true
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

In this project, I developed and evaluated predictive models to estimate the probability of loan default using borrower-level financial data. The analysis involved exploratory data visualization, correlation analysis, and model benchmarking using logistic regression and random forest classifiers. We carefully selected predictor variables based on statistical significance, interpretability, and multicollinearity, incorporating features such as FICO score, interest rate, credit policy adherence, and revolving utilization. ROC curves, AUC scores, and false negative rates were used as key performance indicators to assess model accuracy and predictive power, with an emphasis on minimizing missed defaults (false negatives) while maximizing profitability.

Ultimately, our refined logistic regression model outperformed the random forest in terms of both interpretability and performance, achieving a lower false negative rate (9.5%) and higher AUC (68.2%) under the selected threshold. We extended the analysis by building an optimization framework to identify the ideal cutoff probability (16%) that maximized expected return on investment while maintaining market realism. The final recommendation was to deploy the revised logistic model for decision-making in credit underwriting scenarios, allowing financial institutions to better balance risk and return across their lending portfolios.

<h1><a href='#'>Presentation:</a></h1>
<iframe src="/assets/pdf/Loan_Default_Presentation.pdf" width="100%" height="600px" style="border: none;"></iframe>

<h1><a href="https://drive.google.com/file/d/1YVQoUw2ckYFP-M8GkYttJ30PV9E_Yy-7/view?usp=sharing" class="inline-hover-underline">Recording</a></h1>
