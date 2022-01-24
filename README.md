# PushGP with Adaptive Replacement Mutation and Knowledge

Code and data repository for the paper titled as "Incorporating Sub-programs as
Knowledge in Program Synthesis by PushGP and Adaptive Replacement Mutation"

- [PushGP with Adaptive Replacement Mutation and Knowledge](#pushgp-with-adaptive-replacement-mutation-and-knowledge)
  - [General idea of the study](#general-idea-of-the-study)
    - [Objectives](#objectives)
    - [General framework of knowledge-driven program synthesis (simple version)](#general-framework-of-knowledge-driven-program-synthesis-simple-version)
    - [Framework in the current study](#framework-in-the-current-study)
  - [Implementation and code for the experiments](#implementation-and-code-for-the-experiments)
    - [Preparation](#preparation)
    - [Run the experiments](#run-the-experiments)
    - [Check the results](#check-the-results)
    - [Quick view of the results](#quick-view-of-the-results)
  - [Acknowledgements](#acknowledgements)

## General idea of the study

### Objectives

Genetic programming (GP) searches a program by random initialization, unguided
variation, and fitness-guided selection. This shows a difference to a human
programmer. Usually, a human programmer writes code based on his knowledge from
his previous programming experience.

**This study aims to build a system so that GP could use the knowledge from its
previous problem-solving experience.** We use sub-programs as knowledge in the current study.

### General framework of knowledge-driven program synthesis (simple version)

[![](https://mermaid.ink/img/eyJjb2RlIjoiXG5mbG93Y2hhcnQgTFJcblByb2JsZW0oW1Byb2JsZW1dKSAtLSBpbnB1dCAtLT4gR1A7XG5HUCAtLSBldmFsdWF0ZSAtLT4gT25saW5lS0FbKE9ubGluZTxicj5Lbm93bGVkZ2U8YnI-QXJjaGl2ZSldO1xuT25saW5lS0EgLS0gc2VsZWN0IC0tPiBHUDtcbk9mZmxpbmVLQVsoT2ZmbGluZTxicj5Lbm93bGVkZ2U8YnI-QXJjaGl2ZSldIC0tIHNlbGVjdCAtLT4gT25saW5lS0E7XG5HUCAtLSBzYXZlIC0tPiBPZmZsaW5lS0E7XG5PZmZsaW5lS0EgLS0gb3JnYW5pemUgLS0-T2ZmbGluZUtBO1xuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiXG5mbG93Y2hhcnQgTFJcblByb2JsZW0oW1Byb2JsZW1dKSAtLSBpbnB1dCAtLT4gR1A7XG5HUCAtLSBldmFsdWF0ZSAtLT4gT25saW5lS0FbKE9ubGluZTxicj5Lbm93bGVkZ2U8YnI-QXJjaGl2ZSldO1xuT25saW5lS0EgLS0gc2VsZWN0IC0tPiBHUDtcbk9mZmxpbmVLQVsoT2ZmbGluZTxicj5Lbm93bGVkZ2U8YnI-QXJjaGl2ZSldIC0tIHNlbGVjdCAtLT4gT25saW5lS0E7XG5HUCAtLSBzYXZlIC0tPiBPZmZsaW5lS0E7XG5PZmZsaW5lS0EgLS0gb3JnYW5pemUgLS0-T2ZmbGluZUtBO1xuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifX0)

### Framework in the current study

[![](https://mermaid.ink/img/eyJjb2RlIjoiXG5mbG93Y2hhcnQgTFJcblByb2JsZW0oW1Byb2JsZW1dKSAtLSBpbnB1dCAtLT4gR1A7XG5HUCAtLSBldmFsdWF0ZSAtLT4gT25saW5lS0FbKE9ubGluZTxicj5Lbm93bGVkZ2U8YnI-QXJjaGl2ZSldO1xuT25saW5lS0EgLS0gc2VsZWN0IC0tPiBHUDtcbkh1bWFuIC0tY3JlYXRlLS0-T25saW5lS0FcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiXG5mbG93Y2hhcnQgTFJcblByb2JsZW0oW1Byb2JsZW1dKSAtLSBpbnB1dCAtLT4gR1A7XG5HUCAtLSBldmFsdWF0ZSAtLT4gT25saW5lS0FbKE9ubGluZTxicj5Lbm93bGVkZ2U8YnI-QXJjaGl2ZSldO1xuT25saW5lS0EgLS0gc2VsZWN0IC0tPiBHUDtcbkh1bWFuIC0tY3JlYXRlLS0-T25saW5lS0FcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19)

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

5. Download [data files](https://drive.google.com/file/d/1QMT7BjbBqW9iyV5MH0EkhhBivDT8VoKl/view?usp=sharing) of the benchmark problems and expand the archive

   ```bash
   tar zxvf psgb.tgz
   ```

   Now, your folder looks as follows.

   ```bash
   tree -L 1
   # .
   # ├── 02
   # ├── ..
   # ├── BENCHMARK.md
   # ├── c01
   # ├── c02
   # ├── clean.sh
   # ├── dat.kgene.rate.csv
   # ├── ...
   # ├── exp102.sh
   # ├── ...
   # ├── fig
   # ├── img
   # ├── LICENSE
   # ├── process.py
   # ├── psgb
   # ├── psgb.tgz
   # ├── pyshgp
   # ├── README.md
   # └── rename_img.sh
   ```

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

   ![success-rate](/img/main.success.rate.test.png)

- The success rate of three methods on four bemchmark problems and two composite
  problems in Experiment II

  ![success-rate](/img/transfer.success.rate.test.png)

## Acknowledgements

Our implementation is based on [PyshGP](https://github.com/erp12/pyshgp).
