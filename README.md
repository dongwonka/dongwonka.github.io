# Welcome

Welcome to Dong Wang's academic homepage repository.

This website is a minimal academic personal homepage built to present basic profile information, research interests, contact information, and selected publications in a clean and readable format.

## About

I am a Ph.D. student at the National University of Defense Technology. My research interests include 3D understanding, vehicle re-identification, and multimodal perception.

This repository is used to host my public academic homepage through GitHub Pages.

## Publications

Publication entries are maintained as Markdown files under:

```text
src/content/papers/
```

Authors can be written as plain strings:

```yaml
authors:
  - "Author A"
  - "Author B"
```

To highlight an author name or mark a corresponding author, use object syntax:

```yaml
authors:
  - name: "Dong Wang"
    bold: true
  - name: "Author B"
    corresponding: true
  - name: "Author C"
```

`bold` and `corresponding` can be used together:

```yaml
authors:
  - name: "Dong Wang"
    bold: true
    corresponding: true
```

For papers that do not yet have a public URL:

```yaml
paperUrl: ""
paperStatus: "comingSoon"
```

## Contact

Email: dongwang25@nudt.edu.cn

Google Scholar: https://scholar.google.com/citations?user=QGaI8lEAAAAJ&hl=en&authuser=1
