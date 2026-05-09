---
slug: "vehiclemae"
title: "VehicleMAE: Masked Autoencoding for Robust Vehicle Re-Identification"
authors:
  - "Qi Wang"
  - "Zeyu Zhang"
  - name: "Dong Wang"
    bold: true
    corresponding: true
  - "Di Gai"
  - "Xin Xiong"
  - "Jiyang Xu"
  - "Ruihua Zhou"
venue: "International Conference on Computer Vision 2025 (ICCV 2025)"
venueType: "Conference"
venueLevel: "CCF-A"
acceptedDate: "2025-08-30"
fieldTags:
  - "Vehicle Re-ID"
  - "Autonomous Driving"
  - "Large-scale Pre-training"
levelTags:
  - "CCF-A"
  - "International Conference"
image: "/images/papers/vehiclemae.jpg"
paperUrl: "https://openaccess.thecvf.com/content/ICCV2025/html/Wang_VehicleMAE_View-asymmetry_Mutual_Learning_for_Vehicle_Re-identification_Pre-training_via_Masked_ICCV_2025_paper.html"
paperStatus: "available"
summary: "A masked autoencoding approach for learning robust vehicle representations under challenging visual conditions."
abstract: "Large-scale pre-training technology has achieved remarkable performance in diversified object re-identification (Re-ID) downstream tasks. Nevertheless, to our best knowledge, the pre-training model specifically for vehicle Re-ID, which focuses on tackling the challenge of multi-view variations, has not been fully investigated. In this paper, we first leverage a diffusion model to build a large-scale vehicle Re-ID benchmark dataset, dubbed “DiffVERI”, containing over 1700K images from abundant multi-view annotations. In terms of this dataset, we further present VehicleMAE, a novel masked image modeling pre-training paradigm that learns view-invariant representations by performing mutual-distillation in a self-supervised manner. To be specific, the pipeline of VehicleMAE unfolds two core modules, i.e., view-asymmetry masked image modeling (VMIM) and past-to-present mutual-distillation (PPMD). Technically, VMIM consists of two homogeneous masked autoencoders (MAE) that simultaneously reconstruct the RGB pixels and multi-view semantic information of the specific vehicle body region via paired asymmetric mask sampling strategies. To progressively distill the knowledge of the model itself, PPMD considers the two MAEs in the current epoch and the previous one as the student models and the teacher models, respectively, which leverages the knowledge learned by the current student and the historical teacher for mutual feature-level distillation. Extensive experimental results have verified that the proposed pre-training paradigm on DiffVERI gains compelling downstream task performance for vehicle Re-ID."
---
