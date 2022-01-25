###
 # @Author: He,Yifan
 # @Date: 2021-12-04 20:57:54
 # @LastEditors: He,Yifan
 # @LastEditTime: 2021-12-10 02:11:14
###

mkdir 14/dat
for seed in $(seq 1001 1021)
do
    python 14/umad.py ${seed} > umad${seed}.log
    python 14/rand_good.py ${seed} > rand_good${seed}.log
    python 14/rand_bad.py ${seed} > rand_bad${seed}.log
    python 14/rand_mix.py ${seed} > rand_mix${seed}.log
    python 14/adapt_mix.py ${seed} > adapt_mix${seed}.log
    mv *log 14/dat/
    mv vdx.csv 14/dat/adapt_mix${seed}.csv
done
