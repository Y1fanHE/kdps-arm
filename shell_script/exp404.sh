###
 # @Author: He,Yifan
 # @Date: 2021-12-17 15:31:48
 # @LastEditors: He,Yifan
 # @LastEditTime: 2021-12-18 14:50:45
### 

mkdir 04/dat
for seed in $(seq 1001 1021)
do
    python 04/rand_mixt.py ${seed} > rand_mixt${seed}.log
    python 04/adapt_mixt.py ${seed} > adapt_mixt${seed}.log
    mv *log 04/dat/
    mv vdx.csv 04/dat/adapt_mixt${seed}.csv
done
