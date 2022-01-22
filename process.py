'''
Author: He,Yifan
Date: 2021-11-25 15:47:47
LastEditors: He,Yifan
LastEditTime: 2022-01-09 01:35:40
'''
import re
import numpy as np


def show_values_on_bars(axs, h_v="v", size=5, hspace=0, vspace=0, rotation=90):
    def _show_on_single_plot(ax):
        if h_v == "v":
            for p in ax.patches:
                _x = p.get_x() + p.get_width() / 2 + hspace
                _y = p.get_y() + p.get_height() + vspace
                value = '{:.2f}'.format(p.get_height())
                ax.text(_x, _y, value, ha="center", size=size, rotation=rotation) 
        elif h_v == "h":
            for p in ax.patches:
                _x = p.get_x() + p.get_width() + hspace
                _y = p.get_y() + p.get_height() + vspace
                value = int(p.get_width())
                ax.text(_x, _y, value, ha="left", size=size, rotation=rotation)

    if isinstance(axs, np.ndarray):
        for idx, ax in np.ndenumerate(axs):
            _show_on_single_plot(ax)
    else:
        _show_on_single_plot(axs)

def performance(filename):
    with open(filename, "r") as log_file:
        log_file = [line.strip("\n\t ") for line in log_file]

    generations = 0
    for i, line in enumerate(log_file):

        if line == "Total error:":
            total_error = float(log_file[i+1])
            is_train_solved = (total_error==0)
        if line == "Test error:":
            test_error = float(log_file[i+1]) + total_error
            is_test_solved = (test_error==0)
        if "best" in line:
            generations += 1

    return is_train_solved, is_test_solved, total_error, test_error, generations

def adaptation(filename):
    with open(filename, "r") as log_file:
        log_file = [line.strip("\n\t ") for line in log_file]

    process = []
    for i, line in enumerate(log_file):
        if i > 0:
            if line != "":
                spawned_virus = [int(item) for item in line.split(",")]
                good_virus = 0
                for virus in spawned_virus:
                    if virus < 5:
                        good_virus += 1
                process.append(good_virus/len(spawned_virus))
            else:
                process.append(0)
    return process

def fitness_by_generation(filename, max_gen):
    with open(filename, "r") as log_file:
        log_file = [line.strip("\n\t ") for line in log_file]

    fitnesses = []
    best_fitness = 1e+14
    for line in log_file:
        mobj = re.search(r"best=[0-9.]+", line)
        if mobj:
            fitness = float(mobj.group().replace("best=", ""))
            best_fitness = min(fitness, best_fitness)
            fitnesses.append(fitness)
    while len(fitnesses) < max_gen:
        fitnesses.append(best_fitness)
    return fitnesses

def virus_gene_rate_by_generation(filename, max_gen):
    with open(filename, "r") as log_file:
        log_file = [line.strip("\n\t ") for line in log_file]

    vgene_rates = []
    for line in log_file:
        mobj = re.search(r"gene_rate=[0-9.]+", line)
        if mobj:
            vgene_rate = float(mobj.group().replace("gene_rate=", ""))
            vgene_rates.append(vgene_rate)
    while len(vgene_rates) < max_gen:
        vgene_rates.append(vgene_rate)
    return vgene_rates

def solution(filename):
    _, is_test_solved, _, _, _ = performance(filename)
    if not is_test_solved:
        return None

    with open(filename, "r") as log_file:
        log_file = [line.strip("\n\t ") for line in log_file]

    for i, line in enumerate(log_file):
        if line.strip() == "Program:":
            program = log_file[i+1].strip()

    return program
