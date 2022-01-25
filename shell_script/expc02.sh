###
 # @Author: He,Yifan
 # @Date: 2021-12-17 15:31:48
 # @LastEditors: He,Yifan
 # @LastEditTime: 2022-01-01 16:59:14
### 

mkdir c02/dat
for seed in $(seq 1001 1021)
do
    python c02/adapt_mixt.py ${seed} > adapt_mixt${seed}.log
    python c02/rand_mixt.py ${seed} > rand_mixt${seed}.log
    python c02/umad.py ${seed} > umad${seed}.log
    mv *log c02/dat/
    mv vdx.csv c02/dat/adapt_mixt${seed}.csv
done
