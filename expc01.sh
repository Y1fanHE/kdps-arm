###
 # @Author: He,Yifan
 # @Date: 2021-12-17 15:31:48
 # @LastEditors: He,Yifan
 # @LastEditTime: 2021-12-30 15:37:21
### 

mkdir c01/dat
for seed in $(seq 1001 1021)
do
    python c01/adapt_mixt.py ${seed} > adapt_mixt${seed}.log
    python c01/rand_mixt.py ${seed} > rand_mixt${seed}.log
    python c01/umad.py ${seed} > umad${seed}.log
    mv *log c01/dat/
    mv vdx.csv c01/dat/adapt_mixt${seed}.csv
done
