###
 # @Author: He,Yifan
 # @Date: 2021-12-04 20:57:54
 # @LastEditors: He,Yifan
 # @LastEditTime: 2021-12-14 11:05:37
###

mkdir 27/dat
for seed in $(seq 1001 1021)
do
    python 27/umad.py ${seed} > umad${seed}.log
    python 27/rand_good.py ${seed} > rand_good${seed}.log
    python 27/rand_bad.py ${seed} > rand_bad${seed}.log
    python 27/rand_mix.py ${seed} > rand_mix${seed}.log
    python 27/adapt_mix.py ${seed} > adapt_mix${seed}.log
    mv *log 27/dat/
    mv vdx.csv 27/dat/adapt_mix${seed}.csv
done
