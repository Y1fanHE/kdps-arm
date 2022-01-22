###
 # @Author: He,Yifan
 # @Date: 2021-12-17 15:31:48
 # @LastEditors: He,Yifan
 # @LastEditTime: 2021-12-18 14:51:10
### 

mkdir 27/dat
for seed in $(seq 1001 1021)
do
    python 27/rand_mixt.py ${seed} > rand_mixt${seed}.log
    python 27/adapt_mixt.py ${seed} > adapt_mixt${seed}.log
    mv *log 27/dat/
    mv vdx.csv 27/dat/adapt_mixt${seed}.csv
done
