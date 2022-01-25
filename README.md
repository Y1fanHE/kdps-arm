# PushGP with Adaptive Replacement Mutation and Knowledge

Code and data repository for the paper titled as "Incorporating Sub-programs as
Knowledge in Program Synthesis by PushGP and Adaptive Replacement Mutation"

- [PushGP with Adaptive Replacement Mutation and Knowledge](#pushgp-with-adaptive-replacement-mutation-and-knowledge)
  - [General idea of the study](#general-idea-of-the-study)
    - [Objectives](#objectives)
    - [General framework of Knowledge-Driven Program Synthesis (simple version)](#general-framework-of-knowledge-driven-program-synthesis-simple-version)
    - [Framework in the current study](#framework-in-the-current-study)
  - [Implementation and code for the experiments](#implementation-and-code-for-the-experiments)
    - [Preparation](#preparation)
    - [Run the experiments](#run-the-experiments)
    - [Check the results](#check-the-results)
    - [Quick view of the results](#quick-view-of-the-results)
  - [Detailed design of the conceptual system](#detailed-design-of-the-conceptual-system)
    - [GP and Online Knowledge Archive](#gp-and-online-knowledge-archive)
    - [GP and Offline Knowledge Archive](#gp-and-offline-knowledge-archive)
    - [Online KA and Offline Knowledge Archive](#online-ka-and-offline-knowledge-archive)
    - [Offline Knowledge Archive](#offline-knowledge-archive)
  - [Acknowledgements](#acknowledgements)

## General idea of the study

### Objectives

Genetic programming (GP) searches a program by random initialization, unguided
variation, and fitness-guided selection. This shows a difference to a human
programmer. Usually, a human programmer writes code based on his knowledge from
his previous programming experience.

**This study aims to build a system so that GP could use the knowledge from its
previous problem-solving experience.** We use sub-programs as knowledge in the
current study.

Click [here](/README-knowledge.md) to see a detailed
description of knowledge.

### General framework of Knowledge-Driven Program Synthesis (simple version)

<img src=img-readme/simple.png width=720>

The flowchart above shows a simple version of our framework of the
*Knowledge-Driven Program Synthesis* (KDPS) system. It works as follows.

1. The system initializes an empty Offline Knowledge Archive (KA) ***Koff[0]***
   to store knowledge
2. A user inputs the initial problem ***p[0]*** to solve
3. GP solves ***p[0]***
4. The system saves the extracted knowledge ***K(p[t])*** in an
   Offline KA ***Koff[t]*** to form ***Koff[t+1]***
5. The user inputs ***t***-th problem ***p[t]*** to solve
6. The system selects a subset of ***Koff[t]*** to form an Online KA
   ***Kon[t]*** based on ***p_t***
7. GP solves ***p[t]*** using ***Kon[t]*** by its adaptively select and evaluate
   knowledge
8. Go to step 4

A more detailed design of our conceptual system is in
[Detailed design of the conceptual system](#detailed-design-of-the-conceptual-system).

### Framework in the current study

<img src=img-readme/simple-current.png width=720>

In the current study, we ommit the Offline KA and focus on the implementation of
Online KA as the first step. Therefore, the steps related to Offline KA are
replaced by human.

## Implementation and code for the experiments

### Preparation

1. Clone the entire repository

   ```bash
   git clone https://github.com/Y1fanHE/pushgp-adaptive-replacement-\
   mutation-with-knowledge.git
   ```

2. Install Python 3 on your computer

3. Install the modified PyshGP with the following commands

   ```bash
   cd pyshgp
   pip install .
   ```

4. Install other libraries

   ```bash
   pip install numpy pyyaml
   ```

5. Download [data files](https://drive.google.com/file/d/1QMT7BjbBqW9iyV5MH0EkhhBivDT8VoKl/view?usp=sharing)
   of the benchmark problems and expand the archive

   ```bash
   tar zxvf psgb.tgz
   ```

   This should create a folder named `psgb` including data files of the four
   problems at the root of this repository.

6. Test your installation

   The following command runs PushGP with UMAD to solve the Small or Large
   problem with seed 1000.

   ```bash
   python 02/umad.py 1000
   ```

### Run the experiments

In the paper, we totally performed the following experiments. We list them with
the command to run these experiments.

1. Experiment I: adaptive replacement mutation under an ideal condition
   - Prepare the knowledge archives & Effectiveness of the adaptive replacement
     mutation

       ```bash
       ./exp102.sh && ./exp104.sh && ./exp114.sh && ./exp127.sh
       ```

   - Robustness of the adaptive replacement mutation

       ```bash
       ./exp202.sh && ./exp204.sh && ./exp214.sh && ./exp227.sh
       ```

   - Tracking the tested-good knowledge

       ```bash
       ./exp302.sh && ./exp304.sh && ./exp314.sh && ./exp327.sh
       ```

2. Experiment II: adaptive replacement mutation under a realistic condition

    ```bash
    ./exp402.sh && ./exp404.sh && ./exp414.sh && ./exp427.sh
    ./expc01.sh && ./expc02.sh
    ```

### Check the results

- The raw data of the experiments is stored in the [`02/dat`](/02/dat),
  [`04/dat`](/04/dat), [`14/dat`](/14/dat), [`27/dat`](/27/dat),
  [`c01/dat`](/c01/dat), and [`c02/dat`](/c02/dat) folders.

- You can also check the results with [exp1.ipynb](/exp1.ipynb),
[exp2.ipynb](/exp2.ipynb), [exp3.ipynb](/exp3.ipynb), and
[exp4.ipynb](/exp4.ipynb).

- The figures used in the manuscript are generated by the Jupyter Notebooks and
move to the [`fig`](/fig) folder by the following command.

   ```bash
   ./rename_img.sh
   ```

### Quick view of the results

- The success rate of five methods on four benchmark problems in Experiment I

   <img src=/img/main.success.rate.test.png width=640>

- The success rate of three methods on four bemchmark problems and two composite
  problems in Experiment II

  <img src=/img/transfer.success.rate.test.png width=640>

## Detailed design of the conceptual system

This section describes the detailed design of our conceptual system in four
parts, namely **GP & Online KA**, **GP & Offline KA**,
**Online KA & Offline KA**, and **Offline KA**.

### GP and Online Knowledge Archive

<img src=img-readme/detailed-gp-onka.png width=720>

### GP and Offline Knowledge Archive

<img src=img-readme/detailed-gp-offka.png width=720>

### Online KA and Offline Knowledge Archive

<img src=img-readme/detailed-on-off.png width=720>

### Offline Knowledge Archive

<img src=img-readme/detailed-off.png width=720>

## Acknowledgements

Our implementation is based on [PyshGP](https://github.com/erp12/pyshgp). We are
grateful to [@erp12](https://github.com/erp12) for his effort on developing this
library.

The data files of the benchmark problems are from an
[GitHub repository](https://github.com/thelmuth/program-synthesis-benchmark-datasets).
We express our thanks to [@thelmuth](https://github.com/thelmuth) for this wonderful
sharing.
