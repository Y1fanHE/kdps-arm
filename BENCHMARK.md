<!--
 * @Author: He,Yifan
 * @Date: 2021-09-09 23:38:24
 * @LastEditors: He,Yifan
 * @LastEditTime: 2021-12-04 17:26:42
-->

# Program Synthesis Benchmark

- [Program Synthesis Benchmark](#program-synthesis-benchmark)
  - [1. Number IO (Q 3.5.1)](#1-number-io-q-351)
  - [2. Small or Large (Q 4.6.3)](#2-small-or-large-q-463)
  - [3. For Loop Index (Q 4.11.7)](#3-for-loop-index-q-4117)
  - [4. Compare String Lengths (Q 4.11.13)](#4-compare-string-lengths-q-41113)
  - [5. Double Letters (P 4.1)](#5-double-letters-p-41)
  - [6. Collatz Numbers (P 4.2)](#6-collatz-numbers-p-42)
  - [7. Replace Space with Newline (P 4.3)](#7-replace-space-with-newline-p-43)
  - [8. String Differences (P 4.4)](#8-string-differences-p-44)
  - [9. Even Squares (Q 5.4.1)](#9-even-squares-q-541)
  - [10. Wallis Pi (P 6.4)](#10-wallis-pi-p-64)
  - [11. String Lengths Backwards (Q 7.2.5)](#11-string-lengths-backwards-q-725)
  - [12. Last Index of Zero (Q 7.7.8)](#12-last-index-of-zero-q-778)
  - [13. Vector Average (Q 7.7.11)](#13-vector-average-q-7711)
  - [14. Count Odds (Q 7.7.12)](#14-count-odds-q-7712)
  - [15. Mirror Image (Q 7.7.15)](#15-mirror-image-q-7715)
  - [16. Super Anagrams (P 7.3)](#16-super-anagrams-p-73)
  - [17. Sum of Squares (Q 8.5.4)](#17-sum-of-squares-q-854)
  - [18. Vectors Summed (Q 8.7.6)](#18-vectors-summed-q-876)
  - [19. X-Word Lines (P 8.1)](#19-x-word-lines-p-81)
  - [20. Pig Latin (P 8.2)](#20-pig-latin-p-82)
  - [21. Negative To Zero (Q 9.6.8)](#21-negative-to-zero-q-968)
  - [22. Scrabble Score (P 10.1)](#22-scrabble-score-p-101)
  - [23. Word Stats (P 10.5)](#23-word-stats-p-105)
  - [24. Checksum](#24-checksum)
  - [25. Digits](#25-digits)
  - [26. Grade](#26-grade)
  - [27. Median](#27-median)
  - [28. Smallest](#28-smallest)
  - [29. Syllables](#29-syllables)

## 1. Number IO (Q 3.5.1)

Given an integer and a float, print their sum.

- **Input**: integer in $[-100, 100]$, float in $[-100, 100]$
- **Output**: printed float
- **Primitives**: `int`, `float`, `print`
- **Terminals**: `int~[-100,100]`, `float~[-100,100)`

## 2. Small or Large (Q 4.6.3)

Given an integer $n$, print `"small"` if $n < 1000$ and `"large"` if $n ≥ 2000$ (and nothing if $1000 \leq n < 2000$).

- **Input**: integer in $[-10000,10000]$
- **Output**: printed string
- **Primitives**: `exec`, `int`, `bool`, `str`, `print`
- **Terminals**: `"small"`, `"large"`, `int~[-10000, 10000]`

## 3. For Loop Index (Q 4.11.7)

Given $3$ integer inputs $start$, $end$, and $step$, print the integers in the sequence

$$n_0 = start$$

$$n_i = n_{i−1} + step$$

for each $n_i < end$, each on their own line.

- **Input**: integers `start` and `end` in $[-500,500]$, `step` in $[1,10]$
- **Output**: printed integers
- **Primitives**: `exec`, `int`, `bool`, `print`
- **Terminals**: None

## 4. Compare String Lengths (Q 4.11.13)

Given three strings $n_1$, $n_2$, and $n_3$, return `true` if $length(n_1) < length(n_2) < length(n_3)$, and `false` otherwise.

- **Input**: 3 strings of length $[0,49]$
- **Output**: boolean
- **Primitives**: `exec`, `int`, `bool`, `str`
- **Terminals**: `bool~[True,False]`

## 5. Double Letters (P 4.1)

Given a string, print the string, doubling every letter character, and tripling every exclamation point. All other non-alphabetic and non-exclamation characters should be printed a single time each.

- **Input**: string of length $[0,20]$
- **Output**: printed string
- **Primitives**: `exec`, `int`, `bool`, `char`, `string`, `print`
- **Terminals**: `'!'`

## 6. Collatz Numbers (P 4.2)

Given an integer, find the number of terms in the Collatz (hailstone) sequence starting from that integer.

- **Input**: integer in $[1,10000]$
- **Output**: integer
- **Primitives**: `exec`, `int`, `float`, `bool`
- **Terminals**: `0`, `1`, `int~[-100,100]`

## 7. Replace Space with Newline (P 4.3)

Given a string input, print the string, replacing spaces with newlines. Also, return the integer count of the non-whitespace characters. The input string will not have tabs or newlines.

- **Input**: string of length $[1,20]$
- **Output**: printed string, integer
- **Primitives**: `exec`, `int`, `bool`, `char`, `str`, `print`
- **Terminals**: `' '`, `'\n'`, `char~[\n,\t,visible char]`, `input of length [1,20]`

## 8. String Differences (P 4.4)

Given $2$ strings (without whitespace) as input, find the indices at which the strings have different characters, stopping at the end of the shorter one. For each such index, print a line containing the index as well as the character in each string. For example, if the strings are `"dealer"` and `"dollars"`, the program should print:

```txt
1 e o
2 a l
4 e a
```

- **Input**: 2 strings of $[0,10]$
- **Output**: printed string
- **Primitives**: `exec`, `int`, `bool`, `char`, `str`, `print`
- **Terminals**: `' '`, `'\n'`, `int~[-10,10]`

## 9. Even Squares (Q 5.4.1)

Given an integer $n$, print all of the positive even perfect squares less than $n$ on separate lines.

- **Input**: integer in $[1,9999]$
- **Output**: printed string
- **Primitives**: `exec`, `int`, `bool`, `print`
- **Terminals**: None

## 10. Wallis Pi (P 6.4)

John Wallis gave the following infinite product that converges to $\pi/4$:

$$\frac 2 3 \times \frac 4 3 \times \frac 4 5 \times \frac 6 5 \times \frac 6 7 \times \frac 8 7 \times \frac 8 9 \times \frac {10} 9 \times \cdots$$

Given an integer input $n$, compute an approximation of this product out to $n$ terms. Results are rounded to $5$ decimal places.

- **Input**: integer in $[1,200]$
- **Output**: float
- **Primitives**: `exec`, `int`, `float`, `bool`
- **Terminals**: `int~[-500, 500]`, `int~[-10,10]`, `float~[-500,500)`, `float~[0,1)`

## 11. String Lengths Backwards (Q 7.2.5)

Given a vector of strings, print the length of each string in the vector starting with the last and ending with the first.

- **Input**: vector of length $[0,50]$ of strings of length $[0,50]$
- **Output**: printed string
- **Primitives**: `exec`, `int`, `bool`, `str`, `vec_str`, `print`
- **Terminals**: `int~[-100,100]`

## 12. Last Index of Zero (Q 7.7.8)

Given a vector of integers, at least one of which is $0$, return the index of the last occurrence of $0$ in the vector.

- **Input**: vector of integers of length $[1,50]$ with each integer in $[-50,50]$
- **Output**: integer
- **Primitives**: `exec`, `int`, `bool`, `vec_int`
- **Terminals**: `0`

## 13. Vector Average (Q 7.7.11)

Given a vector of floats, return the average of those floats. Results are rounded to $4$ decimal places.

- **Input**: vector of floats of length $[1,50]$ with each float in $[-1000,1000]$
- **Output**: float
- **Primitives**: `exec`, `int`, `float`, `vec_float`
- **Terminals**: None

## 14. Count Odds (Q 7.7.12)

Given a vector of integers, return the number of integers that are odd, without use of a specific even or odd instruction (but allowing instructions such as mod and quotient).

- **Input**: vector of integers of length $[0,50]$ with each integer in $[-1000,1000]$
- **Output**: integer
- **Primitives**: `exec`, `int`, `bool`, `vec_int`
- **Terminals**: `0`, `1`, `2`, `int~[-1000,1000]`

## 15. Mirror Image (Q 7.7.15)

Given two vectors of integers, return true if one vector is the reverse of the other, and false otherwise.

- **Input**: $2$ vectors of integers of length $[0,50]$ with each
integer in $[−1000,1000]$
- **Output**: boolean
- **Primitives**: `exec`, `int`, `bool`, `vec_int`
- **Terminals**: `boolean ERC`

## 16. Super Anagrams (P 7.3)

Given strings $x$ and $y$ of lowercase letters, return true if $y$ is a super anagram of $x$, which is the case if every character in $x$ is in $y$. To be true, $y$ may contain extra characters, but must have at least as many copies of each character as $x$ does.

- **Input**: $2$ strings of length $[0,20]$
- **Output**: boolean
- **Primitives**: `exec`, `bool`, `char`, `str`
- **Terminals**: `boolean ERC`, `char ERC`, `integer ERC`

## 17. Sum of Squares (Q 8.5.4)

Given integer $n$, return the sum of squaring each integer in the range $[1,n]$.

- **Input**: integer in $[1,100]$
- **Output**: integer
- **Primitives**: `exec`，`int`, `bool`
- **Terminals**: `0`, `1`, `integer ERC`

## 18. Vectors Summed (Q 8.7.6)

Given two equal-sized vectors of integers, return a vector of integers that contains the sum of the input vectors at each index.

- **Input**: $2$ vectors of integers of length $[0,50]$ with each
integer in $[−1000,1000]$
- **Output**: vector of integers
- **Primitives**: `exec`, `int`, `vec_int`
- **Terminals**: `[]`, `integer ERC`

## 19. X-Word Lines (P 8.1)

Given an integer $X$ and a string that can contain spaces and newlines, print the string with exactly $X$ words per line. The last line may have fewer than $X$ words.

- **Input**: integer in $[1,10]$, string of length $[0,100]$
- **Output**: printed string
- **Primitives**: `exec`, `int`, `bool`, `char`, `str`, `print`
- **Terminals**: `'\n'`, `' '`

## 20. Pig Latin (P 8.2)

Given a string containing lowercase words separated by single spaces, print the string with each word translated to pig Latin. Specifically, if a word starts with a vowel, it should have `"ay"` added to its end; otherwise, the first letter is moved to the end of the word, followed by `"ay"`.

- **Input**: string of length $[0,50]$
- **Output**: printed string
- **Primitives**: `exec`, `int`, `bool`, `char`, `str`, `print`
- **Terminals**: `"ay"`, `' '`, `'a'`, `'e'`, `'i'`, `'o'`, `'u'`, `"aeiou"`, `string ERC`, `char ERC`

## 21. Negative To Zero (Q 9.6.8)

Given a vector of integers, return the vector where all negative integers have been replaced by $0$.

- **Input**: vector of integers of length $[0,50]$ with each integer
in $[−1000,1000]$
- **Output**: vector of integers
- **Primitives**: `exec`, `int`, `bool`, `vec_int`
- **Terminals**: `0`, `[]`

## 22. Scrabble Score (P 10.1)

Given a string of visible ASCII characters, return the Scrabble score for that string. Each letter has a corresponding value according to normal Scrabble rules, and non-letter characters are worth zero.

- **Input**: string of length $[0,20]$
- **Output**: integer
- **Primitives**: `exec`, `int`, `bool`, `char`, `str`, `vec_int`
- **Terminals**: vector containing Scrabble values (indexed by ASCII values)

## 23. Word Stats (P 10.5)

Given a file, print the number of words containing $n$ characters for $n$ from $1$ to the length of the longest word, in the format:

```txt
words of length 1: 12
words of length 2: 3
words of length 3: 0
words of length 4: 5
...
```

At the end of the output, print a line that gives the number of sentences and line that gives the average sentence length using the form:

```txt
number of sentences: 4
average sentence length: 7.452423455
```

A word is any string of consecutive non-whitespace characters (including sentence terminators). Every file will contain at least one sentence terminator (period, exclamation point, or question mark). The average sentence length is the number of words in the file divided by the number of sentence terminator characters.

- **Input**: file containing $[1,100]$ chars
- **Output**: printed string
- **Primitives**: `exec`, `int`, `float`, `bool`, `char`, `str`, `vec_int`, `vec_float`, `vec_str`, `file_input`
- **Terminals**: `'.'`, `'?'`, `'!'`, `' '`, `'\t'`, `'\n'`, `[]`, `"words of length "`, `": "`, `"number of sentences: "`, `"average sentence length: "`, `integer ERC`

## 24. Checksum

Given a string, convert each character in the string into its integer ASCII value, sum them, take the sum modulo $64$, add the integer value of the space character, and then convert that integer back into its corresponding character (the checksum character). The program must print Check sum is $X$, where $X$ is replaced by the correct checksum character.

- **Input**: string of length $[0,50]$
- **Output**: printed string
- **Primitives**: `exec`, `int`, `bool`, `char`, `str`, `print`
- **Terminals**: `"Check sum is "`, `' '`, `64`, `integer ERC`, `char ERC`

## 25. Digits

Given an integer, print that integer's digits each on their own line starting with the least significant digit. A negative integer should have the negative sign printed before the most significant digit.

- **Input**: integer in $[−9999999999,9999999999]$
- **Output**: printed integers
- **Primitives**: `exec`, `int`, `bool`, `char`, `str`, `print`
- **Terminals**: `'\n'`, `int~[-10, 10]`

## 26. Grade

Given $5$ integers, the first four represent the lower numeric thresholds for achieving an `A`, `B`, `C`, and `D`, and will be distinct and in descending order. The fifth represents the student's numeric grade. The program must print Student has a $X$ grade., where $X$ is `A`, `B`, `C`, `D`, or `F` depending on the thresholds and the numeric grade.

- **Input**: $5$ integers in $[0,100]$
- **Output**: printed string
- **Primitives**: `exec`, `int`, `bool`, `str`, `print`
- **Terminals**: `"Student has a "`, `" grade."`, `"A"`, `"B"`, `"C"`, `"D"`, `"F"`, `integer ERC`

## 27. Median

Given $3$ integers, print their median.

- **Input**: $3$ integers in $[−100,100]$
- **Output**: printed integer
- **Primitives**: `exec`, `int`, `bool`, `print`
- **Terminals**: `integer ERC`

## 28. Smallest

Given $4$ integers, print the smallest of them.

- **Input**: $4$ integers in $[−100,100]$
- **Output**: printed integer
- **Primitives**: `exec`, `int`, `bool`, `print`
- **Terminals**: `integer ERC`

## 29. Syllables

Given a string containing symbols, spaces, digits, and lowercase letters, count the number of occurrences of vowels (`a`, `e`, `i`, `o`, `u`, `y`) in the string and print that number as $X$ in The number of syllables is $X$.

- **Input**: string of length $[0,20]$
- **Output**: printed string
- **Primitives**: `exec`, `int`, `bool`, `char`, `str`, `print`
- **Terminals**: `"The number of syllables is "`, `"aeiouy"`, `'a'`, `'e'`, `'i'`, `'o'`, `'u'`, `'y'`, `char ERC`, `string ERC`
