---
slug: "sam-reid"
title: "SAM-driven MAE pre-training and background-aware meta-learning for unsupervised vehicle re-identification"
authors:
  - name: "Dong Wang"
    bold: true
  - "Qi Wang"
  - name: "Weidong Min"
    corresponding: true
  - "Di Gai"
  - "Qing Han"
  - "Longfei Li"
  - "Yuhan Geng"
venue: "Computational Visual Media"
venueType: "Journal"
venueLevel: "CCF-B"
acceptedDate: "2024-03-03"
publicationDate: "2024-08-15"
volume: "10"
issue: "4"
pages: "771–789"
doi: "10.1007/s41095-024-0424-2"
fieldTags:
  - "Vehicle Re-ID"
  - "Unsupervised Learning"
  - "Self-Supervised Learning"
  - "Meta-Learning"
levelTags:
  - "CCF-B"
  - "Journal"
image: "/images/papers/sam-reid.jpg"
paperUrl: "https://link.springer.com/article/10.1007/s41095-024-0424-2"
pdfUrl: "https://link.springer.com/content/pdf/10.1007/s41095-024-0424-2.pdf"
bibtexUrl: "/bibtex/sam-reid.bib"
paperStatus: "available"
summary: "A SAM-driven MAE pre-training and background-aware meta-learning framework for reducing background interference in unsupervised vehicle Re-ID."
abstract: "This paper addresses background interference in unsupervised vehicle re-identification by combining SAM-driven masked autoencoder pre-training with background-aware meta-learning. The method first uses SAM to separate vehicle identity regions from background regions, and further introduces a spatially constrained background segmentation strategy to handle difficult cases such as occlusion and ambiguous vehicle boundaries. Based on the optimized segmentation results, SAM-driven MAE pre-training selectively preserves vehicle-related patches and masks background regions, encouraging the encoder to learn identity-sensitive representations in a self-supervised manner. To improve robustness under varying scene conditions, the paper further proposes a background-aware meta-learning strategy that constructs meta-training and meta-testing splits according to different background region ratios. Experiments on VeRi-776 and VeRi-Wild demonstrate that the proposed method effectively reduces background interference and improves unsupervised vehicle Re-ID performance."
---
