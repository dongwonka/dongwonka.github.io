---
slug: "rh-3dgs"
title: "Rh-3DGS: Robust Open-Vocabulary Scene Understanding via Riemannian Huber Distillation and Manifold-Aware Sampling"
authors:
  - "Xinpeng Zhao"
  - name: "Jie Jiang"
    corresponding: true
  - "Fengyuan Zhang"
  - "Lixin Zhan"
  - name: "Dong Wang"
    bold: true
  - "Qinyuan Bu"
  - "Jiahang Tu"
  - "Guangzhen Yao"
venue: "Proceedings of the 43rd International Conference on Machine Learning (ICML 2026)"
venueType: "Conference"
venueLevel: "CCF-A"
acceptedDate: "2026-04-30"
publicationDate: "2026-09-29"
volume: "306"
pages: "161523–161549"
fieldTags:
  - "3D Understanding"
  - "3D Gaussian Splatting"
  - "Open-Vocabulary Segmentation"
levelTags:
  - "CCF-A"
  - "International Conference"
image: "/images/papers/rh-3dgs.png"
paperUrl: "https://proceedings.mlr.press/v306/zhao26s.html"
pdfUrl: "https://raw.githubusercontent.com/mlresearch/v306/main/assets/zhao26s/zhao26s.pdf"
bibtexUrl: "/bibtex/rh-3dgs.bib"
paperStatus: "available"
summary: "Visibility-calibrated distillation and robust hyperspherical feature aggregation for open-vocabulary 3D scene understanding."
abstract: "Open-vocabulary 3D scene understanding answers free-form text queries over reconstructed scenes. However, lifting dense 2D foundation-model embeddings into 3D Gaussian Splatting (3DGS) is still challenging. Existing 3DGS-based methods often average normalized embeddings in Euclidean space. This ignores their hyperspherical geometry and can cause feature collapse. They also distill supervision from all views equally, which amplifies occlusion noise and mixed-depth artifacts. We propose Rh-3DGS, a robust semantic 3DGS framework that uses reliability-aware distillation and manifold-consistent aggregation. Visibility-Calibrated Distillation (VCD) computes per-pixel reliability weights from rasterization statistics and down-weights ambiguous pixels. Visibility-Weighted Fréchet Mean (VFM) aggregates embeddings on the unit hypersphere with a Riemannian Huber objective for robust distillation. Lightweight Consistency Contrast (LIC) regularizes the 3D semantic field with neighborhood-based multi-positive contrast to improve local consistency and sharper boundaries. Experiments on three benchmarks show that Rh-3DGS is best on open-vocabulary segmentation, boundary quality, and view-consistent rendering."
---
