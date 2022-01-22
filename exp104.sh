###
 # @Author: He,Yifan
 # @Date: 2021-12-04 20:57:54
 # @LastEditors: He,Yifan
 # @LastEditTime: 2021-12-07 21:47:42
###

mkdir 04/dat
for seed in $(seq 1001 1021)
do
    python 04/umad.py ${seed} > umad${seed}.log
    python 04/rand_good.py ${seed} > rand_good${seed}.log
    python 04/rand_bad.py ${seed} > rand_bad${seed}.log
    python 04/rand_mix.py ${seed} > rand_mix${seed}.log
    python 04/adapt_mix.py ${seed} > adapt_mix${seed}.log
    mv *log 04/dat/
    mv vdx.csv 04/dat/adapt_mix${seed}.csv
done
