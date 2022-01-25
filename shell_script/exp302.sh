###
 # @Author: He,Yifan
 # @Date: 2021-12-17 15:31:48
 # @LastEditors: He,Yifan
 # @LastEditTime: 2021-12-17 15:35:28
### 

mkdir 02/dat
for seed in $(seq 1001 1021)
do
    python 02/rand_goodv.py ${seed} > rand_goodv${seed}.log
    python 02/rand_mixv.py ${seed} > rand_mixv${seed}.log
    python 02/adapt_mixv.py ${seed} > adapt_mixv${seed}.log
    mv *log 02/dat/
    mv vdx.csv 02/dat/adapt_mixv${seed}.csv
done
