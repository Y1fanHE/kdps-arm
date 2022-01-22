###
 # @Author: He,Yifan
 # @Date: 2021-12-04 20:57:54
 # @LastEditors: He,Yifan
 # @LastEditTime: 2021-12-07 21:02:48
###

mkdir 02/dat
for seed in $(seq 1001 1021)
do
    python 02/umad.py ${seed} > umad${seed}.log
    python 02/rand_good.py ${seed} > rand_good${seed}.log
    python 02/rand_bad.py ${seed} > rand_bad${seed}.log
    python 02/rand_mix.py ${seed} > rand_mix${seed}.log
    python 02/adapt_mix.py ${seed} > adapt_mix${seed}.log
    mv *log 02/dat/
    mv vdx.csv 02/dat/adapt_mix${seed}.csv
done
