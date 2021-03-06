<div id="top"></div>

# Knowledge-Driven Program Synthesis - Adaptive Replace Mutation

>Code and data repository for the paper titled as "Incorporating Sub-programs as
Knowledge in Program Synthesis by PushGP and Adaptive Replacement Mutation"

<details>
   <summary>Table of Contents</summary>
   <ul>
      <li>
         <a href="#general-idea-of-the-knowledge-driven-program-synthesis">General idea of the Knowledge-Driven Program Synthesis</a>
      </li>
      <li>
         <a href="#getting-started">Getting started</a>
      </li>
      <li>
         <a href="#usage">Usage</a>
      </li>
      <li>
         <a href="#detailed-design-of-the-conceptual-system">Detailed design of the conceptual system</a>
      </li>
   </ul>
</details>

## General idea of the Knowledge-Driven Program Synthesis

<img src=img-readme/problem.png width=720>

### Objectives

Genetic programming (GP) searches a program by random initialization, unguided
variation, and fitness-guided selection. This shows a difference to a human
programmer. Usually, a human programmer writes code based on his knowledge from
his previous programming experience.

**This study aims to build a system so that GP could use the knowledge from the
previous problems it solved in a sequence of problem-solving (shown in the above
figure).** We use sub-programs as knowledge in the current study.

Click [here](/README-knowledge.md) to see a detailed
description of knowledge.

<p align="right">&uparrow;<a href="#top">back to top</a></p>

### General framework of Knowledge-Driven Program Synthesis (simple version)

<img src=img-readme/simple.png width=720>

<details>
   <summary>Details</summary>

   The flowchart above shows a simple version of our framework of the
   *Knowledge-Driven Program Synthesis* (KDPS) system. It works as follows.

   - The system saves knowledge from the program generated by GP to an
     ***Offline Knowledge Archive*** (Offline KA).
   - The system creates an ***Online Knowledge Archive*** (Online KA)
     from the ***Offline KA***.
   - The system selects knowledge from the ***Online KA*** to the GP.
   - The system evaluates the knowledge based on the feedback from GP.

   A more detailed design of our conceptual system is in
   [Detailed design of the conceptual system](#detailed-design-of-the-conceptual-system).

</details>

<p align="right">&uparrow;<a href="#top">back to top</a></p>

### Framework in the current study

<img src=img-readme/simple-current.png width=720>

<details>
   <summary>Details</summary>

   In the current study, we ommit the ***Offline KA*** and focus on the
   implementation of ***Online KA*** as the first step. Therefore, the
   steps related to ***Offline KA*** are replaced by ***Human***.

</details>

<p align="right">&uparrow;<a href="#top">back to top</a></p>

## Getting started

### Preparation

1. Install Python 3 (< 3.10) on your computer

2. Install required libraries

   ```bash
   pip install numpy pyyaml
   ```

<p align="right">&uparrow;<a href="#top">back to top</a></p>

### Installation

1. Clone the entire repository

   ```bash
   git clone https://github.com/Y1fanHE/pushgp-adaptive-replacement-\
   mutation-with-knowledge.git
   ```

2. Install the modified PyshGP with the following commands

   ```bash
   cd pyshgp
   pip install .
   ```

3. Download [data files](https://drive.google.com/file/d/1QMT7BjbBqW9iyV5MH0EkhhBivDT8VoKl/view?usp=sharing)
   of the benchmark problems and expand the archive

   ```bash
   tar zxvf psgb.tgz
   ```

   This command should create a folder named `psgb` including data files of the
   four problems at the root of this repository.

4. Test your installation

   ```bash
   python 02/umad.py 1000
   ```

   The above command runs PushGP with UMAD to solve the Small or Large
   problem with seed 1000.

<p align="right">&uparrow;<a href="#top">back to top</a></p>


## Usage

### Experiments

First, copy the Shell scripts in [`shell_script`](/shell_script) folder to the
repository root

```bash
cp shell_script/* .
```

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

<p align="right">&uparrow;<a href="#top">back to top</a></p>

### Check the results

- The raw data of the experiments is stored in the [`02/dat`](/02/dat),
  [`04/dat`](/04/dat), [`14/dat`](/14/dat), [`27/dat`](/27/dat),
  [`c01/dat`](/c01/dat), and [`c02/dat`](/c02/dat) folders.

- Copy the Jupyter notebooks in the folder [`notebook`](/notebook) to the
  repository root.

  ```bash
  cp notebook/* .
  ```

  Now, you can also check the results with [exp1.ipynb](/exp1.ipynb),
  [exp2.ipynb](/exp2.ipynb), [exp3.ipynb](/exp3.ipynb), and
  [exp4.ipynb](/exp4.ipynb).

- The figures used in the manuscript are generated by the Jupyter Notebooks and
  move to the [`fig`](/fig) folder by the following command.

   ```bash
   ./rename_img.sh
   ```

<p align="right">&uparrow;<a href="#top">back to top</a></p>

### Quick view of the results

- The success rate of five methods on four benchmark problems in Experiment I

<img src=img-readme/result.png width=720>

<p align="right">&uparrow;<a href="#top">back to top</a></p>

## Detailed design of the conceptual system

This section describes the detailed design of our conceptual system in four
parts, namely **GP & Online KA**, **GP & Offline KA**,
**Online KA & Offline KA**, and **Offline KA**.

### GP and Online Knowledge Archive

<img src=img-readme/detailed-gp-onka.png width=720>

<details>
   <summary>Details</summary>

   - The ***Selector*** selects knowledge from the Online KA. This knowledge
     could be mutated by the ***Mutator***.
   - The ***Extractor*** extracts knowledge during the optimization of GP.
   - The GP returns the knowledge applied into the search process before.
   - The ***Evaluator*** evaluates the quality of the knowledge, either
     extractrd or returned directly from GP, based on the evolutionary process.
   - The Online KA collects the evaluated knowledge to update the unevaluated
     ones

</details>

<p align="right">&uparrow;<a href="#top">back to top</a></p>

### GP and Offline Knowledge Archive

<img src=img-readme/detailed-gp-offka.png width=720>

<details>
   <summary>Details</summary>

   - The ***Extractor*** extracts knowledge from the program generated by GP.
   - The Offline KA collectes the extracted knowledge.

</details>

<p align="right">&uparrow;<a href="#top">back to top</a></p>

### Online KA and Offline Knowledge Archive

<img src=img-readme/detailed-on-off.png width=720>

<details>
   <summary>Details</summary>

   <!--TODO: write details about the interactions between Online KA & Offline KA-->

   *editing ...*

</details>

<p align="right">&uparrow;<a href="#top">back to top</a></p>

### Offline Knowledge Archive

<img src=img-readme/detailed-off.png width=720>

<details>
   <summary>Details</summary>

   *editing ...*

</details>

<p align="right">&uparrow;<a href="#top">back to top</a></p>

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">&uparrow;<a href="#top">back to top</a></p>

## Contact

- Yifan He ([he.yifan.xs@alumni.tsukuba.ac.jp](mailto:he.yifan.xs@alumni.tsukuba.ac.jp))
- Claus Aranha ([caranha@cs.tsukuba.ac.jp](mailto:caranha@cs.tsukuba.ac.jp))

<p align="right">&uparrow;<a href="#top">back to top</a></p>

## Acknowledgements

Our implementation is based on [PyshGP](https://github.com/erp12/pyshgp). We are
grateful to [@erp12](https://github.com/erp12) for his effort on developing this
library.

The data files of the benchmark problems are from an
[GitHub repository](https://github.com/thelmuth/program-synthesis-benchmark-datasets).
We express our thanks to [@thelmuth](https://github.com/thelmuth) for this
wonderful sharing.

<p align="right">&uparrow;<a href="#top">back to top</a></p>
