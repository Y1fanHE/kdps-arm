###
 # @Author: He,Yifan
 # @Date: 2021-12-17 15:31:48
 # @LastEditors: He,Yifan
 # @LastEditTime: 2021-12-18 14:50:45
### 

mkdir 14/dat
for seed in $(seq 1001 1021)
do
    python 14/rand_mixt.py ${seed} > rand_mixt${seed}.log
    python 14/adapt_mixt.py ${seed} > adapt_mixt${seed}.log
    mv *log 14/dat/
    mv vdx.csv 14/dat/adapt_mixt${seed}.csv
done
