###
 # @Author: He,Yifan
 # @Date: 2021-12-08 18:07:56
 # @LastEditors: He,Yifan
 # @LastEditTime: 2021-12-18 14:27:11
### 

mkdir 04/dat
for seed in $(seq 1001 1021)
do
    python 04/adapt_mix2.py ${seed} > adapt_mix2${seed}.log
    mv *log 04/dat/
    mv vdx.csv 04/dat/adapt_mix2${seed}.csv
    python 04/adapt_mix3.py ${seed} > adapt_mix3${seed}.log
    mv *log 04/dat/
    mv vdx.csv 04/dat/adapt_mix3${seed}.csv
    python 04/adapt_mix4.py ${seed} > adapt_mix4${seed}.log
    mv *log 04/dat/
    mv vdx.csv 04/dat/adapt_mix4${seed}.csv

    python 04/rand_mix2.py ${seed} > rand_mix2${seed}.log
    mv *log 04/dat/
    python 04/rand_mix3.py ${seed} > rand_mix3${seed}.log
    mv *log 04/dat/
    python 04/rand_mix4.py ${seed} > rand_mix4${seed}.log
    mv *log 04/dat/
done