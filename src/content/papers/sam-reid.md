---
slug: "sam-reid"
title: "SAM-driven MAE Pre-training and Background-aware Meta-learning for Unsupervised Vehicle Re-identification"
authors:
  - "Dong Wang"
  - "Qi Wang"
  - "Weidong Min"
  - "Di Gai"
  - "Qing Han"
  - "Longfei Li"
  - "Yuhan Geng"
venue: "CVM2024"
venueType: "Conference"
venueLevel: "CCF-B"
acceptedDate: "2023-12-05"
fieldTags:
  - "Vehicle Re-ID"
  - "Unsupervised Learning"
  - "Self-Supervised Learning"
  - "Meta-Learning"
levelTags:
  - "CCF-B"
  - "Conference"
image: "/images/papers/sam-reid.jpg"
paperUrl: "https://ieeexplore.ieee.org/abstract/document/10897722"
summary: "A SAM-driven MAE pre-training and background-aware meta-learning framework for reducing background interference in unsupervised vehicle Re-ID."
abstract: "This paper addresses background interference in unsupervised vehicle re-identification by combining SAM-driven masked autoencoder pre-training with background-aware meta-learning. The method first uses SAM to separate vehicle identity regions from background regions, and further introduces a spatially constrained background segmentation strategy to handle difficult cases such as occlusion and ambiguous vehicle boundaries. Based on the optimized segmentation results, SAM-driven MAE pre-training selectively preserves vehicle-related patches and masks background regions, encouraging the encoder to learn identity-sensitive representations in a self-supervised manner. To improve robustness under varying scene conditions, the paper further proposes a background-aware meta-learning strategy that constructs meta-training and meta-testing splits according to different background region ratios. Experiments on VeRi-776 and VeRi-Wild demonstrate that the proposed method effectively reduces background interference and improves unsupervised vehicle Re-ID performance."
---
