###
 # @Author: He,Yifan
 # @Date: 2021-12-08 18:07:56
 # @LastEditors: He,Yifan
 # @LastEditTime: 2021-12-16 18:35:26
### 

mkdir 14/dat
for seed in $(seq 1001 1021)
do
    python 14/adapt_mix2.py ${seed} > adapt_mix2${seed}.log
    mv *log 14/dat/
    mv vdx.csv 14/dat/adapt_mix2${seed}.csv
    python 14/adapt_mix3.py ${seed} > adapt_mix3${seed}.log
    mv *log 14/dat/
    mv vdx.csv 14/dat/adapt_mix3${seed}.csv
    python 14/adapt_mix4.py ${seed} > adapt_mix4${seed}.log
    mv *log 14/dat/
    mv vdx.csv 14/dat/adapt_mix4${seed}.csv

    python 14/rand_mix2.py ${seed} > rand_mix2${seed}.log
    mv *log 14/dat/
    python 14/rand_mix3.py ${seed} > rand_mix3${seed}.log
    mv *log 14/dat/
    python 14/rand_mix4.py ${seed} > rand_mix4${seed}.log
    mv *log 14/dat/
done