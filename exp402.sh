###
 # @Author: He,Yifan
 # @Date: 2021-12-17 15:31:48
 # @LastEditors: He,Yifan
 # @LastEditTime: 2021-12-18 14:50:45
### 

mkdir 02/dat
for seed in $(seq 1001 1021)
do
    python 02/rand_mixt.py ${seed} > rand_mixt${seed}.log
    python 02/adapt_mixt.py ${seed} > adapt_mixt${seed}.log
    mv *log 02/dat/
    mv vdx.csv 02/dat/adapt_mixt${seed}.csv
done
