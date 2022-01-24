Search.setIndex({docnames:["api","api/gp","api/push","configuration","contributing","core_instructions","guides/extending_push","index","instructions","overview","push_types","release_notes"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","api/gp.rst","api/push.rst","configuration.rst","contributing.rst","core_instructions.rst","guides/extending_push.rst","index.rst","instructions.rst","overview.rst","push_types.rst","release_notes.rst"],objects:{"pyshgp.gp":{estimators:[1,0,0,"-"],evaluation:[1,0,0,"-"],genome:[1,0,0,"-"],individual:[1,0,0,"-"],population:[1,0,0,"-"],search:[1,0,0,"-"],selection:[1,0,0,"-"],variation:[1,0,0,"-"]},"pyshgp.gp.estimators":{PushEstimator:[1,1,1,""]},"pyshgp.gp.estimators.PushEstimator":{fit:[1,2,1,""],load:[1,2,1,""],predict:[1,2,1,""],save:[1,2,1,""],score:[1,2,1,""]},"pyshgp.gp.evaluation":{DatasetEvaluator:[1,1,1,""],Evaluator:[1,1,1,""],FunctionEvaluator:[1,1,1,""],damerau_levenshtein_distance:[1,3,1,""]},"pyshgp.gp.evaluation.DatasetEvaluator":{evaluate:[1,2,1,""]},"pyshgp.gp.evaluation.Evaluator":{default_error_function:[1,2,1,""],evaluate:[1,2,1,""]},"pyshgp.gp.evaluation.FunctionEvaluator":{evaluate:[1,2,1,""]},"pyshgp.gp.genome":{GeneSpawner:[1,1,1,""],GeneTypes:[1,1,1,""],Genome:[1,1,1,""],GenomeSimplifier:[1,1,1,""],Opener:[1,1,1,""],genome_to_code:[1,3,1,""]},"pyshgp.gp.genome.GeneSpawner":{distribution:[1,4,1,""],erc_generator:[1,4,1,""],instruction_set:[1,4,1,""],literals:[1,4,1,""],n_input:[1,4,1,""],random_erc:[1,2,1,""],random_gene:[1,2,1,""],random_input:[1,2,1,""],random_instruction:[1,2,1,""],random_literal:[1,2,1,""],spawn_genome:[1,2,1,""]},"pyshgp.gp.genome.GeneTypes":{CLOSE:[1,4,1,""],ERC:[1,4,1,""],INPUT:[1,4,1,""],INSTRUCTION:[1,4,1,""],LITERAL:[1,4,1,""]},"pyshgp.gp.genome.GenomeSimplifier":{simplify:[1,2,1,""]},"pyshgp.gp.genome.Opener":{dec:[1,2,1,""]},"pyshgp.gp.individual":{Individual:[1,1,1,""]},"pyshgp.gp.individual.Individual":{error_vector:[1,2,1,"id0"],error_vector_bytes:[1,2,1,"id1"],genome:[1,4,1,"id2"],id:[1,4,1,""],program:[1,2,1,""],signature:[1,4,1,""],total_error:[1,2,1,"id3"]},"pyshgp.gp.population":{Population:[1,1,1,""]},"pyshgp.gp.population.Population":{add:[1,2,1,""],all_error_vectors:[1,2,1,""],all_total_errors:[1,2,1,""],best:[1,2,1,""],best_n:[1,2,1,""],error_diversity:[1,2,1,""],evaluate:[1,2,1,""],evaluated:[1,4,1,""],genome_diversity:[1,2,1,""],mean_genome_length:[1,2,1,""],median_error:[1,2,1,""],p_evaluate:[1,2,1,""],program_diversity:[1,2,1,""],unevaluated:[1,4,1,""]},"pyshgp.gp.search":{GeneticAlgorithm:[1,1,1,""],ParallelContext:[1,1,1,""],SearchAlgorithm:[1,1,1,""],SearchConfiguration:[1,1,1,""],SimulatedAnnealing:[1,1,1,""],get_search_algo:[1,3,1,""]},"pyshgp.gp.search.GeneticAlgorithm":{step:[1,2,1,""]},"pyshgp.gp.search.ParallelContext":{close:[1,2,1,""]},"pyshgp.gp.search.SearchAlgorithm":{best_seen:[1,4,1,""],config:[1,4,1,""],generation:[1,4,1,""],init_population:[1,2,1,""],is_solved:[1,2,1,""],population:[1,4,1,""],run:[1,2,1,""],step:[1,2,1,""]},"pyshgp.gp.search.SearchConfiguration":{get_selector:[1,2,1,""],get_variation_op:[1,2,1,""],tear_down:[1,2,1,""]},"pyshgp.gp.search.SimulatedAnnealing":{step:[1,2,1,""]},"pyshgp.gp.selection":{CaseStream:[1,1,1,""],Elite:[1,1,1,""],FitnessProportionate:[1,1,1,""],Lexicase:[1,1,1,""],Selector:[1,1,1,""],SimpleMultiSelectorMixin:[1,1,1,""],Tournament:[1,1,1,""],choice:[1,3,1,""],get_selector:[1,3,1,""],median_absolute_deviation:[1,3,1,""],one_individual_per_error_vector:[1,3,1,""],random:[1,3,1,""],shuffle:[1,3,1,""]},"pyshgp.gp.selection.Elite":{select:[1,2,1,""],select_one:[1,2,1,""]},"pyshgp.gp.selection.FitnessProportionate":{select:[1,2,1,""],select_one:[1,2,1,""]},"pyshgp.gp.selection.Lexicase":{select:[1,2,1,""],select_one:[1,2,1,""]},"pyshgp.gp.selection.Selector":{select:[1,2,1,""],select_one:[1,2,1,""]},"pyshgp.gp.selection.SimpleMultiSelectorMixin":{select:[1,2,1,""]},"pyshgp.gp.selection.Tournament":{select_one:[1,2,1,""],tournament_size:[1,4,1,""]},"pyshgp.gp.variation":{AdditionMutation:[1,1,1,""],Alternation:[1,1,1,""],Cloning:[1,1,1,""],DeletionMutation:[1,1,1,""],Genesis:[1,1,1,""],LiteralMutation:[1,1,1,""],VariationOperator:[1,1,1,""],VariationPipeline:[1,1,1,""],VariationStrategy:[1,1,1,""],choice:[1,3,1,""],get_variation_operator:[1,3,1,""],random:[1,3,1,""]},"pyshgp.gp.variation.AdditionMutation":{num_parents:[1,4,1,""],produce:[1,2,1,""],rate:[1,4,1,""]},"pyshgp.gp.variation.Alternation":{alignment_deviation:[1,4,1,""],num_parents:[1,4,1,""],produce:[1,2,1,""],rate:[1,4,1,""]},"pyshgp.gp.variation.Cloning":{num_parents:[1,4,1,""],produce:[1,2,1,""]},"pyshgp.gp.variation.DeletionMutation":{num_parents:[1,4,1,""],produce:[1,2,1,""],rate:[1,4,1,""]},"pyshgp.gp.variation.Genesis":{num_parents:[1,4,1,""],produce:[1,2,1,""],size:[1,4,1,""]},"pyshgp.gp.variation.LiteralMutation":{num_parents:[1,4,1,""],produce:[1,2,1,""],push_type:[1,4,1,""],rate:[1,4,1,""]},"pyshgp.gp.variation.VariationOperator":{checknum_parents:[1,2,1,""],num_parents:[1,4,1,""],produce:[1,2,1,""]},"pyshgp.gp.variation.VariationPipeline":{num_parents:[1,4,1,""],operators:[1,4,1,""],produce:[1,2,1,""]},"pyshgp.gp.variation.VariationStrategy":{add:[1,2,1,""],elements:[1,4,1,""]},"pyshgp.push":{atoms:[2,0,0,"-"],instruction:[2,0,0,"-"],instruction_set:[2,0,0,"-"],interpreter:[2,0,0,"-"],stack:[2,0,0,"-"],state:[2,0,0,"-"],type_library:[2,0,0,"-"],types:[2,0,0,"-"]},"pyshgp.push.atoms":{Atom:[2,1,1,""],Closer:[2,1,1,""],CodeBlock:[2,1,1,""],Input:[2,1,1,""],InstructionMeta:[2,1,1,""],Literal:[2,1,1,""]},"pyshgp.push.atoms.Atom":{pretty_str:[2,2,1,""]},"pyshgp.push.atoms.Closer":{pretty_str:[2,2,1,""]},"pyshgp.push.atoms.CodeBlock":{code_at_point:[2,2,1,""],depth:[2,2,1,""],pretty_str:[2,2,1,""],size:[2,2,1,""],with_code_inserted_at_point:[2,2,1,""]},"pyshgp.push.atoms.Input":{input_index:[2,4,1,"id0"],pretty_str:[2,2,1,""]},"pyshgp.push.atoms.InstructionMeta":{code_blocks:[2,4,1,"id1"],name:[2,4,1,"id2"],pretty_str:[2,2,1,""]},"pyshgp.push.atoms.Literal":{pretty_str:[2,2,1,""],push_type:[2,4,1,"id3"],value:[2,4,1,"id4"]},"pyshgp.push.instruction":{Instruction:[2,1,1,""],ProducesManyOfTypeInstruction:[2,1,1,""],SimpleInstruction:[2,1,1,""],StateToStateInstruction:[2,1,1,""],TakesStateInstruction:[2,1,1,""]},"pyshgp.push.instruction.Instruction":{code_block:[2,4,1,""],code_blocks:[2,4,1,""],docstring:[2,4,1,"id5"],evaluate:[2,2,1,""],meta:[2,2,1,""],name:[2,4,1,"id6"],required_stacks:[2,2,1,""]},"pyshgp.push.instruction.ProducesManyOfTypeInstruction":{code_blocks:[2,4,1,""],docstring:[2,4,1,""],evaluate:[2,2,1,""],f:[2,4,1,""],input_stacks:[2,4,1,""],name:[2,4,1,""],output_stack:[2,4,1,""],required_stacks:[2,2,1,""]},"pyshgp.push.instruction.SimpleInstruction":{code_blocks:[2,4,1,""],docstring:[2,4,1,""],evaluate:[2,2,1,""],f:[2,4,1,""],input_stacks:[2,4,1,""],name:[2,4,1,""],output_stacks:[2,4,1,""],required_stacks:[2,2,1,""]},"pyshgp.push.instruction.StateToStateInstruction":{code_blocks:[2,4,1,""],docstring:[2,4,1,""],evaluate:[2,2,1,""],f:[2,4,1,""],name:[2,4,1,""],required_stacks:[2,2,1,""],stacks_used:[2,4,1,""]},"pyshgp.push.instruction.TakesStateInstruction":{code_blocks:[2,4,1,""],docstring:[2,4,1,""],evaluate:[2,2,1,""],f:[2,4,1,""],name:[2,4,1,""],other_stacks:[2,4,1,""],output_stacks:[2,4,1,""],required_stacks:[2,2,1,""]},"pyshgp.push.instruction_set":{InstructionSet:[2,1,1,""]},"pyshgp.push.instruction_set.InstructionSet":{register:[2,2,1,""],register_core:[2,2,1,"id7"],register_core_by_name:[2,2,1,""],register_core_by_stack:[2,2,1,""],register_list:[2,2,1,""],required_stacks:[2,2,1,""],set_type_library:[2,2,1,""],strip_docstrings:[2,4,1,""],type_library:[2,4,1,""],unregister:[2,2,1,""]},"pyshgp.push.interpreter":{PushInterpreter:[2,1,1,""],PushInterpreterStatus:[2,1,1,""]},"pyshgp.push.interpreter.PushInterpreter":{evaluate_atom:[2,2,1,""],instruction_set:[2,4,1,""],run:[2,2,1,""],state:[2,4,1,""],status:[2,4,1,""],untyped_to_typed:[2,2,1,""]},"pyshgp.push.interpreter.PushInterpreterStatus":{growth_cap_exceeded:[2,4,1,""],normal:[2,4,1,""],runtime_limit_exceeded:[2,4,1,""],step_limit_exceeded:[2,4,1,""]},"pyshgp.push.stack":{PushStack:[2,1,1,""]},"pyshgp.push.stack.PushStack":{flush:[2,2,1,""],insert:[2,2,1,""],is_empty:[2,2,1,""],nth:[2,2,1,""],pop:[2,2,1,""],push:[2,2,1,""],push_config:[2,4,1,"id8"],push_type:[2,4,1,"id9"],set_nth:[2,2,1,""],take:[2,2,1,""],top:[2,2,1,""]},"pyshgp.push.state":{PushState:[2,1,1,""]},"pyshgp.push.state.PushState":{from_dict:[2,2,1,""],inputs:[2,4,1,""],load_code:[2,2,1,""],load_inputs:[2,2,1,""],observe_stacks:[2,2,1,""],pop_from_stacks:[2,2,1,""],pretty_print:[2,2,1,""],push_config:[2,4,1,""],push_to_stacks:[2,2,1,""],size:[2,2,1,""],stdout:[2,4,1,""],type_library:[2,4,1,""],untyped:[2,4,1,""]},"pyshgp.push.type_library":{PushTypeLibrary:[2,1,1,""],infer_literal:[2,3,1,""]},"pyshgp.push.type_library.PushTypeLibrary":{create_and_register:[2,2,1,""],push_type_for_type:[2,2,1,""],push_type_of:[2,2,1,""],register:[2,2,1,""],register_core:[2,2,1,"id10"],register_list:[2,2,1,""],supported_stacks:[2,2,1,""],unregister:[2,2,1,""]},"pyshgp.push.types":{BoolVector:[2,1,1,""],Char:[2,1,1,""],CharVector:[2,1,1,""],FloatVector:[2,1,1,""],IntVector:[2,1,1,""],PushBoolType:[2,1,1,""],PushCharType:[2,1,1,""],PushFloatType:[2,1,1,""],PushIntType:[2,1,1,""],PushStrType:[2,1,1,""],PushType:[2,1,1,""],PushVectorType:[2,1,1,""],StrVector:[2,1,1,""],make_vector_type:[2,3,1,""]},"pyshgp.push.types.Char":{"char":[2,4,1,""]},"pyshgp.push.types.PushType":{coerce:[2,2,1,""],is_collection:[2,4,1,""],is_instance:[2,2,1,""],is_numeric:[2,4,1,""],name:[2,4,1,""]},"pyshgp.push.types.PushVectorType":{coerce:[2,2,1,""]},"pyshgp.tap":{CsvTap:[0,1,1,""],JsonLinesTap:[0,1,1,""],LogFileTap:[0,1,1,""],StdOutRun:[0,1,1,""],StdOutSearchStepTap:[0,1,1,""],StdOutSimplification:[0,1,1,""],StdOutSimplificationStep:[0,1,1,""],Tap:[0,1,1,""],TapManager:[0,1,1,""],set_verbosity:[0,3,1,""],tap:[0,3,1,""]},"pyshgp.tap.CsvTap":{log:[0,2,1,""]},"pyshgp.tap.JsonLinesTap":{log:[0,2,1,""]},"pyshgp.tap.LogFileTap":{dir:[0,2,1,""],log:[0,2,1,""],path:[0,2,1,""]},"pyshgp.tap.StdOutRun":{post:[0,2,1,""],pre:[0,2,1,""]},"pyshgp.tap.StdOutSearchStepTap":{pre:[0,2,1,""]},"pyshgp.tap.StdOutSimplification":{post:[0,2,1,""],pre:[0,2,1,""]},"pyshgp.tap.StdOutSimplificationStep":{post:[0,2,1,""]},"pyshgp.tap.Tap":{"do":[0,2,1,""],post:[0,2,1,""],pre:[0,2,1,""]},"pyshgp.tap.TapManager":{"do":[0,2,1,""],get:[0,2,1,""],register:[0,2,1,""],unregister:[0,2,1,""]},"pyshgp.utils":{Copyable:[0,1,1,""],DiscreteProbDistrib:[0,1,1,""],Saveable:[0,1,1,""],Token:[0,1,1,""],instantiate_using:[0,3,1,""],list_rindex:[0,3,1,""]},"pyshgp.utils.Copyable":{copy:[0,2,1,""]},"pyshgp.utils.DiscreteProbDistrib":{add:[0,2,1,""],elements:[0,4,1,""],sample:[0,2,1,""],sample_n:[0,2,1,""],size:[0,2,1,""]},"pyshgp.utils.Saveable":{load:[0,2,1,""],save:[0,2,1,""]},"pyshgp.utils.Token":{no_stack_item:[0,4,1,""],revert:[0,4,1,""],whole_state:[0,4,1,""]},"pyshgp.validation":{PushError:[0,5,1,""],check_1d:[0,3,1,""],check_2d:[0,3,1,""],check_X_y:[0,3,1,""],check_column_types:[0,3,1,""],check_is_fitted:[0,3,1,""],check_num_columns:[0,3,1,""]},"pyshgp.validation.PushError":{empty_character:[0,2,1,""],failed_coerce:[0,2,1,""],long_character:[0,2,1,""],no_type:[0,2,1,""]},pyshgp:{gp:[1,0,0,"-"],push:[2,0,0,"-"],tap:[0,0,0,"-"],utils:[0,0,0,"-"],validation:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute","5":"py:exception"},terms:{"100":[1,3,6,10],"1000":3,"1000000":1,"108":11,"1145":1,"128":5,"200":3,"2000":1,"2017":1,"2019":7,"2020":7,"300":[1,3],"3071178":1,"3071330":1,"500":[1,6],"5e5":1,"6920034":1,"937":1,"93levenshtein_dist":1,"944":1,"abstract":[0,1,2,3,8,11],"boolean":[1,5],"break":9,"byte":1,"case":[0,1,3,4,6,9],"char":[2,5,6,10],"class":[0,1,2,3,6,8,10,11],"default":[0,1,2,3,6,10,11],"enum":[0,1,2],"final":[0,2],"float":[0,1,5,6,10],"function":[0,1,2,4,8,10,11],"import":[3,4,6,10],"int":[0,1,2,5,6,8,10,11],"long":8,"new":[1,2,3,4,5,6,10,11],"public":9,"return":[0,1,2,3,5,6,8,10,11],"static":0,"super":[3,6],"switch":[1,3,11],"throw":10,"true":[0,1,2,3,5,6,10,11],"try":2,"while":[1,4,8],Added:11,Adding:4,For:[0,1,2,3,6,8,9,10],IDs:0,Its:0,NOT:2,Oks:11,One:[8,9],That:9,The:[0,1,2,3,4,5,7,8,9,10,11],Then:1,There:[0,2],These:[0,1,2,6,8],Used:[2,8],Useful:11,With:[8,11],__init__:[3,6,10],__main__:[],__name__:[],__repr__:[6,10],_add:8,_checked_typ:[1,2],_forc:2,_pclass:2,_precord:1,aa_milne_arr:1,abbrevi:1,abc:[0,1,2],abl:[0,6],about:[0,3,6,8,9],abov:[1,6,10],accept:[1,2,3,4,6,9],access:8,accomplish:3,achiev:9,acm:1,across:[1,8],action:11,actual:1,add:[0,1,3,4,5,6,11],added:[1,8,11],adding:1,addit:[2,3,6,9],addition_r:1,additionmut:1,address:[4,6],after:[0,1,2,4,5,8,11],again:11,against:[2,6],aid:8,aim:[3,9],aka:[0,1,2],algebra:9,algorithm:[1,10],alia:[1,2],alignment_devi:[1,3],all:[0,1,2,3,4,5,6,8,9,10,11],all_error_vector:1,all_total_error:1,allow:[0,4,11],almost:11,along:[1,5],alreadi:0,also:[1,3,4,6,8],altern:[1,3],alternation_r:[1,3],although:9,alwai:[1,4],amount:11,ani:[0,1,2,5,6,8,9,10],anneal:1,annot:11,annoy:11,anticip:4,api:[1,3,9],appear:[1,2,6],append:[2,5],appli:[1,3,6],applic:0,appropri:4,approv:4,april:7,arang:1,arbitrari:[1,5],arbitrarili:2,ares:9,arg:[0,2],argument:[0,1,2,6,8,10,11],ariti:8,around:0,arr:1,arrai:1,array_lik:1,articl:11,ascii:5,assign:1,associ:[0,1,2,3],assum:[1,4],atom:[0,1,8,11],attempt:[9,10],attribut:[0,1,2,8,11],august:7,autodoc:4,automat:[1,6,8],avail:[1,4],averag:1,avoid:[1,6],axi:1,back:[3,8],bar:10,base:[0,1,2,3,4,5,8,9],basecontext:1,becom:1,been:[0,1,4,11],befor:[0,2,5,6,9,10],begin:1,behavior:[0,1,2,6],being:[0,1,2,11],below:[6,8,11],benchmark:9,benefit:1,best:[0,1,3],best_n:1,best_seen:1,better:[1,11],between:[0,1,2,6,11],bias:3,binari:0,block:[2,5,8],blossom:11,board:4,bodi:4,bool:[0,1,2,5,6,8,10],bool_depth_instr:8,bool_stack_depth:8,boolvector:2,both:[0,1,5],box:6,branch:4,bring:[3,9],broken:11,bug:[7,11],built:[4,6],burshan:11,call:[0,1,3,5,6,9,10,11],callabl:[1,2],can:[0,1,2,3,4,6,8,9,10,11],candid:1,cannot:[1,2,10],canon:10,cap:11,capabl:[1,2,6,9],captur:8,casestream:1,cast:5,caught:11,certain:[0,2],certainty_proport:0,cfm:1,chain:[6,10],chang:[0,1,2,3,4,6,8,9],charact:[0,5],charvector:2,check:[0,2,6,11],check_1d:0,check_2d:0,check_column_typ:0,check_is_fit:0,check_num_column:0,check_x_i:0,checkedpvector:[1,2],checknum_par:1,child:[1,3],children:1,choic:1,choos:3,christoph:1,citat:1,clarifi:11,clariti:11,classif:1,classmethod:[0,2],claus:8,clean:11,clear:2,climb:1,clojur:9,clojush:9,clone:[1,3,4,9],close:[1,2,11],closer:[1,2],cls:0,code:[0,1,2,5,6,7,8,9,10],code_at_point:2,code_block:[2,8],codebas:11,codeblock:[0,1,2,5,8],coerc:[0,2,6,10],coercion:6,coercion_func:10,collect:[0,1,2,6,8,10,11],column:[0,11],column_nam:0,com:1,combin:5,come:[1,5],comma:8,command:9,commit:9,common:[3,6,9,11],compar:[8,9],compat:[9,11],competit:9,complet:9,compon:7,compos:3,compuat:1,comput:[1,5,9],conain:2,concaten:[0,5],concept:8,concret:[2,3,8],confer:1,config:[0,1,2,11],configu:1,configur:[0,1,2,6,7,11],confirm:2,conflict:3,conform:[2,4,11],consid:[1,2,6,10],consist:11,constant:[1,2,3],constantli:9,constraint:[6,11],construct:4,constructor:[6,10],contain:[1,2,3,4,6,8,9,11],contemporari:9,context:1,continu:9,contrast:9,contribut:7,contributor:[4,11],control:[1,2,3,8,9,11],convent:4,convers:10,convert:[2,5,11],cool:1,coordin:[1,3],copi:[0,1,5],copyabl:[0,1],core:[1,2,3,6,7,10,11],correct:[2,6,10],correspond:[2,3,6,10],cos:5,could:[0,1,3],count:[1,5],coupl:6,cover:1,coverag:4,cpu:1,creat:[1,2,3,4,5,6,8,10],create_and_regist:[2,10],crucial:[1,2],csv:0,csvtap:0,current:[1,2],custom:[7,10,11],cut:4,damerau:1,damerau_levenshtein_dist:1,data:[0,1,4,6,8,9,10,11],datafram:[1,11],dataset:[0,1,3],datasetevalu:[1,11],debug:0,dec:1,decid:1,declar:6,decor:0,decreas:1,decrement:[1,5],dedic:[2,8],deep:[0,5],deeper:2,def:[3,6,8,10],default_error_funct:1,default_rng:1,defin:[0,1,2,6,8,10,11],definit:[0,2,6,7],deleg:6,delet:3,deletion_r:1,deletionmut:1,delta_i:6,delta_x:6,demo:[9,11],demonstr:[3,4,6,11],denot:[1,2,5,8,10],deploy:11,depth:[2,5],describ:[1,2,3,8],descript:2,design:3,desir:2,determin:[2,8,10],determinist:11,dev:[4,9],develop:9,deviat:1,dict:[0,1,2,6],dictat:4,dictionari:[0,2],differ:[1,2,3,4,5],difficulti:9,digit:5,dimension:[0,1],dir:0,direct:3,directli:[0,3,11],directori:[0,9],disabl:[6,10],discours:9,discov:9,discret:0,discreteprobdistrib:[0,1],distanc:[1,6],distinct:1,distinguish:2,distirut:[],distribut:[0,1],divid:[5,8],doc:[4,9,11],docs_sourc:4,docstr:[2,4,8,11],document:[1,3,8,11],doe:[1,2,5,9],doi:1,don:6,done:[1,4],down:[1,4],download:4,drawn:1,driven:1,drop:5,dtype:1,due:11,dup_tim:11,duplic:[4,5],dure:[0,1,2,3,6,8,9,10],each:[0,1,2,3,5,8,11],eas:1,easier:[1,9,11],easili:[0,8,9],edu:2,edward:1,effect:[0,1,5,8],either:[1,2,8],element:[0,1,2,5,6,8,10],elit:[1,3],els:[2,8],embarrassingli:1,empti:[0,2,5],empty_charact:0,encapsul:[6,11],encount:2,end:[0,5],ensur:[6,8],entir:[1,2,3,8],entri:[0,1],ephemer:[1,3],epicfaac:11,epsilon:[1,3],epsilonlexicaseselect:11,equal:5,equival:1,erc:1,erc_gener:[1,3,6],erp12:2,error:[0,1,2,3,10,11],error_divers:1,error_funct:1,error_on_not_found:2,error_threshold:1,error_vector:1,error_vector_byt:1,est:[3,6],estim:[0,3,10,11],etc:3,evalu:[2,5,6,8,10,11],evaluate_atom:2,evaluator_proxi:1,evalut:5,even:2,event:0,eventu:4,everi:[0,2,8],every_n_step:0,everyth:11,evolut:[2,3,6,9,11],evolutionari:[0,1,7,9],evolv:1,exact:8,exampl:[1,2,3,6,7,9,10,11],except:[0,8,11],exclud:8,exclude_stack:[2,11],exec:[2,5,6,8,10],exec_if:8,exec_when:8,exec_when_instr:8,execut:[0,1,2,5,6,9,10,11],exist:[2,3],expect:[1,2,3,4,8,9,10],experiment:9,explain:1,explicitli:4,express:[1,2],extend:[7,8,9],extens:[2,3,6,9],extern:0,extra:1,extrem:9,factori:1,faculti:2,fail:0,failed_coerc:0,failur:11,fals:[0,1,2,3,5,6,8,10],far:1,farthest:2,featur:[7,8,9],feedback:[9,11],few:[1,9],field:[1,9],file:[0,1,4,11],filenam:0,filepath:1,filter:[1,8],find:[1,2,4,9],finish:[4,11],finit:9,first:[1,2,4,5,6,8,10],fit:[0,1,3,6,11],fitness_proportionate_select:1,fitnessproportion:1,fix:11,flag:6,flexibl:8,float64:1,floatvector:2,floor:5,flow:2,flush:2,focus:9,folder:[4,9],follow:[2,3,8,9,11],foo:10,footprint:2,forc:2,fork:4,format:[6,8,10],forward:1,found:[0,1,2,3,4,5,8,9],framework:9,freitag:1,frequent:1,from:[0,1,2,3,4,5,6,8,10,11],from_dict:2,full:[0,9],fulli:[0,11],functionevalu:1,fundament:2,further:[3,9],garcia:11,gather:9,gecco:1,gene:[1,3,8],gener:[0,1,2,3,9,11],genesi:[1,3],genespawn:[1,3,6],genet:[0,1,6,8,9],geneticalgorithm:1,genetyp:1,genom:[0,2,3,8,11],genome_divers:1,genome_to_cod:1,genomesimplifi:1,genomespawn:1,get:[0,1,2,6,10,11],get_search_algo:1,get_selector:1,get_variation_op:1,get_variation_oper:1,github:[1,2,4,9,11],given:[0,1,2,6,8],good:2,gpbib:1,gradient:9,great:4,greater:[1,2,5],ground:1,grow:3,growth_cap_exceed:2,guid:[1,3,6,9],half:1,hampshir:2,hand:0,handl:[2,8],hang:11,has:[0,1,2,3,4,5,8,9,10,11],hashabl:1,have:[0,1,2,4,8,9,10,11],header:0,heavili:[1,9],helmuth:1,help:[2,4],here:11,heurist:1,high:9,hill:1,hold:[1,2,6,8,10],homepag:9,how:[1,2,6,8,11],howev:[4,6,9],html:[0,1,2,11],http:[0,1,2],huge:11,human:9,hyperparamet:3,i_set:6,identifi:[0,2],ieee:1,ieeexplor:1,immedi:10,impact:1,implemen:1,implement:[1,2,3,8],importantli:1,impress:9,improv:[1,11],includ:[0,1,3,4,5,8,9,10,11],include_stack:2,inclus:8,incompat:11,incorrect:11,increment:5,index:[0,2,5,7],indic:[1,2,5,6,8],individaul:1,individu:[2,3],induct:9,infer:2,infer_liter:2,infinit:11,inform:[0,2,3,6,8,9,11],ing:5,inherit:0,init_popul:1,initi:[1,2,3,11],initial_genome_s:[1,3],inject:0,input:[1,2,3,8,10,11],input_index:2,input_stack:[2,8],input_typ:8,insert:[2,4,5],inspir:[0,1],instal:[4,7],instanc:[0,1,2,3,5,6,9,10],instanti:[2,3,8,10],instantiate_us:0,instead:[1,4,11],insterpret:6,instr:2,instruciton:2,instruct:[1,7,9,10,11],instruction_nam:2,instruction_set:[1,3,6,8],instructionmeta:[1,2,5,11],instructionset:[1,2,3,6,8,10],insturct:2,insturctionset:8,int16:[6,10],int32:[6,10],int64:[6,10,11],int8:[6,10],int_div:8,int_div_instr:8,integ:[1,5,6,10],intellig:9,intend:1,intern:2,interpret:[0,1,7,8,10],interv:1,introduc:1,intruct:[],intvector:2,invers:5,invert:5,iri:11,is_collect:[2,6],is_empti:[2,8],is_inst:[2,6,10],is_numer:[2,6],is_solv:1,isn:1,issu:[4,6],item:[0,1,2,5,8,9,10],iter:[1,5],its:[0,1,2,3,5,8,9],itself:9,jamesturk:1,jellyfish:1,json:[0,1,11],jsonlinestap:0,julian:11,jump:1,june:7,just:1,kei:[0,1,2,8],kept:[1,4],keyword:[0,1],kind:6,kit:3,know:8,known:[1,3,8],kwarg:[0,1,2],label:1,lack:11,lambda:3,langdon:1,languag:[2,9,10],last:[0,5,11],last_str_from_stdout:[1,11],lead:[5,9],learn:[0,3,6,9],least:4,lee:[1,11],len:[2,8],length:[0,1,2,5],less:[1,2,5,11],letter:5,level:[0,3,6],levenshtein:1,leverag:6,lexicas:[1,3],lib2:[6,10],lib:[6,10],librari:[2,7],licens:11,like:[1,4,6,9],limit:[2,6],line:0,linear:1,link:[2,8,11],liscens:11,list:[0,1,2,3,6,8,9,10,11],list_of_push_typ:2,list_rindex:0,liter:[1,2,3,6,10,11],literalmut:1,load:[0,1,2],load_cod:2,load_input:2,locat:0,lock:4,log:[0,1,11],logfiletap:0,logic:[2,11],long_charact:0,longer:[5,11],look:6,loop:11,lower:1,lspector:2,lst:0,mad:1,made:[0,1,2,6,8,11],mai:[1,2,9],main:[0,9],maintain:[1,4],major:9,make:[0,1,2,4,8,9,11],make_vector_typ:2,manag:0,mani:[1,2,9,11],manipul:[1,2,6,8,9,10],manual:[4,11],map:0,march:7,mark:1,master:4,match:[2,8,11],materi:1,max_gener:[1,3,6],maximum:5,mcphee:1,mean_genome_length:1,meant:[4,9],meanwhil:8,measur:4,median:1,median_absolute_devi:1,median_error:1,memori:[2,11],mention:[2,4,11],merg:4,messag:0,meta:2,metevi:11,method:[0,1,2,3,6,8,9,10,11],michael:11,might:[3,6],migrat:11,minim:[0,6,9,11],minimum:[3,5],mixin:1,mod:5,model:9,modifi:[1,2,9],modul:[4,7],modulu:5,monitor:[0,11],more:[0,1,2,3,6,8,9,11],most:[0,3,9],motiv:7,move:[5,11],much:[3,4,9],multi:1,multipl:[1,2,3,5,8,10,11],multipli:5,multiprocess:[1,11],must:[1,3,4,6,8,9,10],mutablesequ:0,mutat:[1,2,3],my_method:0,my_modul:0,my_packag:0,myclass:0,n_case:1,n_featur:1,n_input:[1,3,6],n_output:1,n_proc:1,n_sampl:1,name:[0,1,2,3,4,6,8,10],name_pattern:2,narrow:3,nativ:2,naya:11,ndarrai:1,ndx:2,nearli:9,need:[1,6,8,9,11],neg:1,nest:[1,2,8],never:4,newlin:11,next:[0,4,5,8],nice:9,nichola:1,no_stack_item:[0,2],no_typ:0,non:[1,2,11],none:[0,1,2,11],normal:2,note:1,noth:[0,5],notif:0,novel:9,now:11,nth:[2,5],num_par:1,number:[0,1,2,5,6,8],numer:[1,2,5,9],numpi:[1,2,10,11],obj:0,object:[0,1,2,6,8,10],observe_stack:2,occasion:1,occur:[0,2,5,11],occurr:[0,2,5],off:[0,2],offici:9,often:1,ojbect:2,onc:[4,6],one:[0,1,2,3,4,5,6,8,9,10],one_individual_per_error_vector:1,onli:[0,1,2,3,5,6,8,10],onto:2,open:[1,2,4,5],oper:[1,3,10],optim:9,option:[0,1,2,10,11],order:[1,2,3,5,9],org:[0,1],original_error:1,other:[1,2,3,4,5,7,8,9,10],other_stack:[2,8],otherwis:[1,2,4,5,8],our:[2,6],out:[2,6],output:[1,2,9,11],output_stack:[2,8],output_typ:[2,8],outstand:9,over:[1,5],overflow:11,overrid:[0,6],overwrit:2,own:[0,2,3,11],p_evalu:1,p_vec_typ:2,packag:[0,3,4,7,9],page:[4,7,8,11],pair:1,panda:[1,11],pantridg:1,paper:3,parallel:[1,11],parallelcontext:1,paramet:[0,1,2,9],parent:1,part:2,particip:1,particular:[0,1,2],pass:[0,1,2,6,8,11],path:[0,4],patient:4,pattern:[2,7],pclass:2,penalti:1,pep8:4,per:[1,9,10],perform:[0,1,2,6,11],permut:1,persist:[1,11],philosophi:3,pickl:0,piec:2,piglet:1,pipelin:[3,9],place:[1,4,8,10],placehold:2,plai:9,pleas:4,plush:1,plushi:1,point:[1,3,6,10],point_dist:[6,11],point_distance_insrt:6,point_from_float:6,point_from_floats_instr:6,pointpushtyp:6,poli:1,pooh:1,pool:[1,11],pop:[2,5,8],pop_from_stack:2,popluat:1,popul:[0,3],populaiton_s:3,popular:9,population_s:[1,3,6],port:1,posit:[0,2,5],possibl:[1,2,3,4,6,9,11],post:0,post_print_best:0,potenti:2,pow:6,power:9,pre:[0,4],pre_print_atom:0,pre_print_config:0,precord:1,predict:1,prepar:[0,7],preselect:1,present:[0,9],preserv:1,preset:3,pressur:3,pretty_print:[2,11],pretty_str:[2,11],prevent:11,previou:9,previous:9,primari:[3,9],primit:6,print:[0,1,2,5,11],print_trac:2,probabilist:1,probabl:[0,1,3,10],problem:[6,9,11],proceed:1,process:[0,1,2,11],produc:[1,2,3,5,6,9,10],producesmanyoftypeinstruct:[2,8],program:[0,1,2,3,6,8,9,10,11],program_divers:1,program_signatur:1,programsignatur:1,progress:2,project:[4,9],properli:11,properti:1,proport:1,proportion:[1,3],protected_divison:8,proven:9,provid:[0,1,3,6,8,10,11],ptw:9,pull:[1,2,3,4,10],push3:[2,9],push:[0,1,5,7,9,11],push_cli:11,push_config:[1,2],push_stat:2,push_to_stack:2,push_typ:[0,1,2,8],push_type_for_typ:2,push_type_nam:2,push_type_of:2,pushbool:10,pushbooltyp:2,pushchar:10,pushchartyp:2,pushconfig:[0,1,2,11],pusherror:0,pushestim:[0,1,3,6,11],pushfloat:10,pushfloattyp:2,pushgp:[2,7,8,10],pushint:[6,10],pushinterpret:[1,2,6,8],pushinterpreterstatu:2,pushinttyp:2,pushpoint:[6,10],pushprogram:2,pushstack:[2,11],pushstat:[2,5,8,11],pushstr:[10,11],pushstrtyp:2,pushtyp:[0,1,2,6,8,10],pushtypelibrari:[2,6,8,10,11],pushvector:11,pushvectortyp:2,put:[0,4,5],pypi:4,pyrsist:[1,2],pysh:7,pyshgp:[3,4,6,8,10,11],pytest:9,python:[2,6,9,10,11],python_typ:[2,6],qualifi:0,quantum:9,queue:2,quick:1,rabbit:1,rais:[0,1,2,11],randint:[1,3],random:[1,3],random_erc:1,random_gen:1,random_input:1,random_instruct:1,random_liter:1,random_sampl:1,randomli:[1,3],rang:[1,5,9],rare:11,rate:1,rather:[4,9],read:[1,4,8,9,11],readi:9,readm:11,real:1,reason:[2,3],recommend:[0,2],rectangl:11,recurs:5,recus:5,redbeansandric:11,reduc:2,redux:[2,9],refactor:11,refer:[1,2,3,6,9,10],referenc:[2,3],regex:[2,8],regist:[0,1,2,6,10,11],register_al:6,register_cor:[2,6,10],register_core_by_nam:[2,8],register_core_by_stack:[2,8,11],register_list:[2,6,8,10],register_n_input:8,registr:6,regress:1,reject:1,rel:[0,1,4],relat:6,releas:9,relev:[0,2],remain:1,remov:[1,2,5,8,11],remvo:5,renam:11,repeat:[1,5],replac:[0,1,5,11],repo:[9,11],report:[2,7,11],repositori:[4,9],repres:[2,9],represent:[1,2,11],request:7,requir:[2,4,6,8,9],required_stack:2,research:9,resembl:1,reserv:2,reset_on_run:2,reshap:1,resolv:4,resourc:6,respect:[1,8,11],result:[0,1,2,5,6,8,9,10],revers:[3,5],reversemut:3,revert:[0,1,2,8],riccardo:1,roadmap:7,root:[0,9],rotat:5,roulett:[1,3],rout:2,row:[0,1],run:[0,1,2,6,7,11],runtim:[1,6,9],runtime_limit_exceed:2,safe:2,same:[0,1,2,3,6,8,10],sampl:[0,1,3],sample_n:0,save:[0,1,9],saveabl:[0,1],scalar_typ:2,sci:3,scikit:0,score:1,script:11,seach:1,search:[2,7,9,10],searchalgorithm:[0,1,11],searchconfigur:1,second:5,section:[1,3,8],see:[1,2,3,6,8,9,11],seen:[1,9],select:[],select_on:1,selector:[1,3,11],self:[2,3,6,10],send:0,separ:11,seq:0,sequenc:[0,1,2,3],sequenti:1,serial:1,serializ:11,set:[1,2,3,7,9,10,11],set_nth:2,set_type_librari:2,set_verbos:0,setup:[2,11],shape:1,share:0,shorter:1,shorthand:10,should:[0,1,2,4,6,8,10,11],shove:5,show:11,shrink:[1,3],shuffl:1,side:0,signatur:[1,2,8,11],simmul:1,simpl:[1,2,3,6],simpleinstruct:[2,5,6,8],simplemultiselectormixin:[1,11],simpler:3,simpli:[2,6],simplif:[0,1],simplifi:1,simplification_step:[1,3,6],simul:1,simulatedann:1,sin:5,singl:[1,2,10],singleton:0,situat:2,size:[0,1,2,3,5,6,8,11],size_neutral_umad:1,skip:[5,8],sklearn:0,slice:5,slowli:9,small:1,smaller:[1,11],softwar:9,solut:1,solv:9,some:[0,1,2,3,6,8,11],someth:0,sometim:9,sort:1,sourc:[0,1,2,4,5,6,11],space:[9,11],spawn:[1,8],spawn_genom:1,spawner:[1,3,6],specif:[2,6,8,9],specifi:[1,2,3,6,8,10],spector:[1,11],spector_2019_gptp:1,sphinx:4,split:[5,8],split_on_comma:8,sqrt:6,stabl:[0,9],stack:[5,6,8,9,10,11],stacks_us:[2,8],standard:[1,2,9],start:[0,1,3,5,6],stat:0,state:0,statement:0,statetostateinstruct:[2,8],statist:0,statu:2,status:2,stdout:[0,2,5,8,11],stdoutrun:0,stdoutsearchsteptap:0,stdoutsimplif:0,stdoutsimplificationstep:0,step:[0,1,2,5],step_limit_exceed:2,still:9,stochast:9,stop:1,store:[0,2],str:[0,1,2,5,6,8,10],str_:10,str_split_instr:8,str_split_on_comma:8,strategi:1,string:[0,1,2,3,5,11],strip:5,strip_docstr:2,strive:4,structur:[6,8,9,11],strvector:2,studi:9,style:11,sub:[0,1,2,3,6],subset:[1,8],subtl:1,subtract:5,subtyp:11,success:[0,9],suffic:2,suffici:[0,2],suggest:11,suit:[6,9],sum:1,summar:2,summari:[0,11],superflu:1,suppli:1,support:[1,2,6,8,9,10,11],supported_stack:[2,6,10],sure:9,swap:5,sync:4,synthes:[1,3,6,8,10],synthesi:[8,9],system:[0,1,8,9,10],take:[2,5,10,11],taken:[1,2,5,8,11],takesstateinstruct:[2,8,11],tan:5,tap:11,tapmanag:[0,11],tapmang:0,target:1,task:1,tbd:3,tear_down:1,tell:6,temperatur:1,term:9,termin:[1,2],test:[2,10,11],text:[0,4],than:[0,1,2,3,5,11],thei:[0,2,4,5,8],them:[1,2,3,11],thi:[0,1,2,3,4,5,6,8,9,10,11],thing:[0,2,10],thoma:1,three:[1,5],through:[1,9],throughout:[0,2,11],thu:[1,2,8],time:[3,4,5,11],timestamp:0,to_point:10,togeth:[5,9],token:[0,2,8],too:1,top:[2,3,5,8],total:[1,3,5],total_error:1,tournament:[1,3],tournament_s:1,tournament_select:1,toward:3,tox:11,trace:0,track:4,tradit:11,trail:5,train:[1,3],transact:8,transform:[0,3,9],translat:[1,8],travers:[2,5],treat:[0,6],tripl:11,truth:1,tune:11,tupl:[0,1,2,6,8,11],ture:9,tutori:11,two:[0,1,5,6,8],txt:9,typ:2,type:[0,1,3,7,9,11],type_lib:6,type_librari:[6,10],typelibrari:6,typic:[6,8,9],typo:11,u11:1,ucl:1,umad:[1,3],unabl:8,unbound:6,unchang:3,under:0,undergo:4,underli:[2,6,10],understand:1,unevalu:1,uniform:[1,3],uniformli:1,union:[1,2],uniqu:[1,2,8],univers:1,unknown:[6,9],unless:[2,4],unregist:[0,2],until:[1,4,5,9],untyp:2,untyped_to_typ:2,updat:11,upgrad:9,upon:2,usa:1,usag:[0,9],use:[0,1,2,3,4,8,10,11],used:[0,1,2,3,6,8,10],useful:1,user:[0,3,4,6,9,10,11],uses:[1,2],using:[0,1,2,4,5,6,8,9,10],usual:[2,9],util:[1,2,6,8,9,11],val:2,valid:[2,6,10,11],valu:[0,1,2,3,5,6,8,9,10,11],value_typ:2,valueerror:1,vargoni:11,variabl:[8,11],variant:3,variat:8,variation_strategi:[1,3],variationoper:[1,3],variationpipelin:1,variationstrategi:[1,3],variaton:1,varieti:[3,8],variou:[2,3,11],vector:[1,2,9,11],vector_bool:5,vector_char:5,vector_float:5,vector_int:5,vector_str:5,verbos:[0,1,11],verbosity_config:1,verbosityconfig:[1,11],veri:2,vers:2,version:[1,4,9,11],via:[0,4,8],wai:[2,3,4,8,11],want:[3,6,10],warn:9,watch:9,websit:9,well:[0,1,6,8],were:[1,11],what:[1,2,4,6,8,11],wheel:[1,3],when:[0,1,2,3,4,6,8,11],where:[1,2,3,4,5,9,11],whether:1,which:[1,2,3,4,5,6,8,9,10,11],whitespac:5,who:11,whole_st:0,whose:[1,2],wider:9,wiki:1,wikipedia:1,william:1,with_code_inserted_at_point:2,within:[1,5],without:[1,5,8,11],word:[2,8],work:[1,6,8],wors:1,worst:1,would:[0,4,11],wrap:[2,5,11],write:[0,1,2],written:[0,2,9],www:1,xor:5,y_hat:1,yank:5,yet:11,yield:1,york:1,you:[2,3,4,8,9,10],your:[0,4],zero:[1,2]},titles:["PyshGP API","pyshgp.gp package","pyshgp.push package","Configuring PushGP Runs","Contributing","PyshGP Core Instruction Set","Extending the Push Interpreter","PyshGP Documentation","Push Instructions","PyshGP","Push Types","Release Notes"],titleterms:{"2019":11,"2020":11,The:6,algorithm:3,api:[0,7,11],april:11,atom:2,august:11,bool_and:5,bool_dup:5,bool_dup_tim:5,bool_eq:5,bool_flush:5,bool_from_float:5,bool_from_int:5,bool_invert_first_then_and:5,bool_is_empti:5,bool_not:5,bool_or:5,bool_pop:5,bool_rot:5,bool_second_first_then_and:5,bool_shov:5,bool_shove_dup:5,bool_stack_depth:5,bool_swap:5,bool_xor:5,bool_yank:5,bool_yank_dup:5,bug:4,build:9,chang:11,char_concat:5,char_dup:5,char_dup_tim:5,char_eq:5,char_flush:5,char_from_ascii_int:5,char_from_bool:5,char_from_first_char:5,char_from_float:5,char_from_last_char:5,char_from_nth_char:5,char_is_digit:5,char_is_empti:5,char_is_lett:5,char_is_whitespac:5,char_pop:5,char_rot:5,char_shov:5,char_shove_dup:5,char_stack_depth:5,char_swap:5,char_yank:5,char_yank_dup:5,chars_from_str:5,code:4,code_but_last:5,code_combin:5,code_do:5,code_do_count:5,code_do_dup:5,code_do_rang:5,code_do_then_pop:5,code_do_tim:5,code_dup:5,code_dup_tim:5,code_eq:5,code_extract:5,code_first:5,code_first_posit:5,code_flush:5,code_from_bool:5,code_from_char:5,code_from_exec:5,code_from_float:5,code_from_int:5,code_from_str:5,code_from_vector_bool:5,code_from_vector_char:5,code_from_vector_float:5,code_from_vector_int:5,code_from_vector_str:5,code_if:5,code_insert:5,code_is_code_block:5,code_is_empti:5,code_is_singular:5,code_last:5,code_length:5,code_list:5,code_map:5,code_memb:5,code_nth:5,code_pop:5,code_rest:5,code_revers:5,code_rot:5,code_s:5,code_shov:5,code_shove_dup:5,code_stack_depth:5,code_swap:5,code_when:5,code_wrap:5,code_yank:5,code_yank_dup:5,coercion:10,compon:3,configur:3,content:[1,2],contribut:[4,9],core:[5,8],credit:11,custom:[6,8],definit:8,develop:11,document:[4,7,9],estim:1,evalu:1,evolutionari:3,exampl:[4,8],exec_do_count:5,exec_do_rang:5,exec_do_tim:5,exec_do_whil:5,exec_dup:5,exec_dup_tim:5,exec_eq:5,exec_flush:5,exec_if:5,exec_is_empti:5,exec_pop:5,exec_rot:5,exec_shov:5,exec_shove_dup:5,exec_stack_depth:5,exec_swap:5,exec_when:5,exec_whil:5,exec_yank:5,exec_yank_dup:5,extend:6,featur:4,float_add:5,float_co:5,float_dec:5,float_div:5,float_dup:5,float_dup_tim:5,float_eq:5,float_flush:5,float_from_bool:5,float_from_int:5,float_gt:5,float_inc:5,float_is_empti:5,float_lt:5,float_max:5,float_min:5,float_mod:5,float_mult:5,float_pop:5,float_rot:5,float_shov:5,float_shove_dup:5,float_sin:5,float_stack_depth:5,float_sub:5,float_swap:5,float_tan:5,float_yank:5,float_yank_dup:5,from:9,genom:1,goal:9,guid:7,indic:7,individu:1,instal:9,instruct:[2,5,6,8],instruction_set:2,int_add:5,int_dec:5,int_div:5,int_dup:5,int_dup_tim:5,int_eq:5,int_flush:5,int_from_bool:5,int_from_float:5,int_gt:5,int_inc:5,int_is_empti:5,int_lt:5,int_max:5,int_min:5,int_mod:5,int_mult:5,int_pop:5,int_rot:5,int_shov:5,int_shove_dup:5,int_stack_depth:5,int_sub:5,int_swap:5,int_yank:5,int_yank_dup:5,intern:11,interpret:[2,6],is_empty_code_block:5,issu:11,june:11,known:11,librari:[6,10],make_empty_code_block:5,mani:8,march:11,modul:[0,1,2],motiv:9,noop:5,noop_open:5,note:[7,11],other:0,packag:[1,2],parent:3,pattern:4,pip:9,popul:1,prepar:8,print_bool:5,print_char:5,print_cod:5,print_exec:5,print_float:5,print_int:5,print_str:5,print_vector_bool:5,print_vector_char:5,print_vector_float:5,print_vector_int:5,print_vector_str:5,println_bool:5,println_char:5,println_cod:5,println_exec:5,println_float:5,println_int:5,println_str:5,println_vector_bool:5,println_vector_char:5,println_vector_float:5,println_vector_int:5,println_vector_str:5,produc:8,push:[2,6,8,10],pushgp:[3,9],pysh:9,pyshgp:[0,1,2,5,7,9],regist:8,releas:[4,7,11],report:4,repositori:11,request:4,review:4,roadmap:9,run:[3,9],search:[1,3],select:[1,3],set:[5,6,8],simpl:8,sourc:9,stack:2,state:[2,8],str_append_char:5,str_but_last:5,str_but_last_n:5,str_concat:5,str_contains_char:5,str_contains_str:5,str_drop:5,str_dup:5,str_dup_tim:5,str_eq:5,str_flush:5,str_from_bool:5,str_from_char:5,str_from_first_char:5,str_from_float:5,str_from_int:5,str_from_last_char:5,str_from_nth_char:5,str_head:5,str_index_of_char:5,str_index_of_str:5,str_insert_char:5,str_insert_str:5,str_is_empti:5,str_is_empty_str:5,str_length:5,str_make_empti:5,str_occurrences_of_char:5,str_occurrences_of_str:5,str_pop:5,str_remove_all_char:5,str_remove_all_str:5,str_remove_first_char:5,str_remove_first_str:5,str_remove_n_char:5,str_remove_n_str:5,str_remove_nth:5,str_replace_all_char:5,str_replace_all_str:5,str_replace_first_char:5,str_replace_first_str:5,str_replace_n_char:5,str_replace_n_str:5,str_rest:5,str_revers:5,str_rot:5,str_set_nth:5,str_shove:5,str_shove_dup:5,str_split_on_char:5,str_split_on_str:5,str_stack_depth:5,str_strip_whitespac:5,str_swap:5,str_tail:5,str_yank:5,str_yank_dup:5,strategi:3,style:4,tabl:7,take:8,tap:0,test:[4,9],type:[2,6,8,10],type_librari:2,unit:4,use:9,util:0,valid:0,variat:[1,3],vector_bool_but_last:5,vector_bool_concat:5,vector_bool_conj:5,vector_bool_contain:5,vector_bool_dup:5,vector_bool_dup_tim:5,vector_bool_empty_vector:5,vector_bool_eq:5,vector_bool_first:5,vector_bool_flush:5,vector_bool_index_of:5,vector_bool_is_empti:5,vector_bool_iter:5,vector_bool_last:5,vector_bool_length:5,vector_bool_nth:5,vector_bool_occurrences_of:5,vector_bool_pop:5,vector_bool_push_al:5,vector_bool_remov:5,vector_bool_replac:5,vector_bool_replace_first:5,vector_bool_rest:5,vector_bool_revers:5,vector_bool_rot:5,vector_bool_set_nth:5,vector_bool_shov:5,vector_bool_shove_dup:5,vector_bool_stack_depth:5,vector_bool_subvec:5,vector_bool_swap:5,vector_bool_tak:5,vector_bool_yank:5,vector_bool_yank_dup:5,vector_char_but_last:5,vector_char_concat:5,vector_char_conj:5,vector_char_contain:5,vector_char_dup:5,vector_char_dup_tim:5,vector_char_empty_vector:5,vector_char_eq:5,vector_char_first:5,vector_char_flush:5,vector_char_index_of:5,vector_char_is_empti:5,vector_char_iter:5,vector_char_last:5,vector_char_length:5,vector_char_nth:5,vector_char_occurrences_of:5,vector_char_pop:5,vector_char_push_al:5,vector_char_remov:5,vector_char_replac:5,vector_char_replace_first:5,vector_char_rest:5,vector_char_revers:5,vector_char_rot:5,vector_char_set_nth:5,vector_char_shov:5,vector_char_shove_dup:5,vector_char_stack_depth:5,vector_char_subvec:5,vector_char_swap:5,vector_char_tak:5,vector_char_yank:5,vector_char_yank_dup:5,vector_float_but_last:5,vector_float_concat:5,vector_float_conj:5,vector_float_contain:5,vector_float_dup:5,vector_float_dup_tim:5,vector_float_empty_vector:5,vector_float_eq:5,vector_float_first:5,vector_float_flush:5,vector_float_index_of:5,vector_float_is_empti:5,vector_float_iter:5,vector_float_last:5,vector_float_length:5,vector_float_nth:5,vector_float_occurrences_of:5,vector_float_pop:5,vector_float_push_al:5,vector_float_remov:5,vector_float_replac:5,vector_float_replace_first:5,vector_float_rest:5,vector_float_revers:5,vector_float_rot:5,vector_float_set_nth:5,vector_float_shov:5,vector_float_shove_dup:5,vector_float_stack_depth:5,vector_float_subvec:5,vector_float_swap:5,vector_float_tak:5,vector_float_yank:5,vector_float_yank_dup:5,vector_int_but_last:5,vector_int_concat:5,vector_int_conj:5,vector_int_contain:5,vector_int_dup:5,vector_int_dup_tim:5,vector_int_empty_vector:5,vector_int_eq:5,vector_int_first:5,vector_int_flush:5,vector_int_index_of:5,vector_int_is_empti:5,vector_int_iter:5,vector_int_last:5,vector_int_length:5,vector_int_nth:5,vector_int_occurrences_of:5,vector_int_pop:5,vector_int_push_al:5,vector_int_remov:5,vector_int_replac:5,vector_int_replace_first:5,vector_int_rest:5,vector_int_revers:5,vector_int_rot:5,vector_int_set_nth:5,vector_int_shov:5,vector_int_shove_dup:5,vector_int_stack_depth:5,vector_int_subvec:5,vector_int_swap:5,vector_int_tak:5,vector_int_yank:5,vector_int_yank_dup:5,vector_str_but_last:5,vector_str_concat:5,vector_str_conj:5,vector_str_contain:5,vector_str_dup:5,vector_str_dup_tim:5,vector_str_empty_vector:5,vector_str_eq:5,vector_str_first:5,vector_str_flush:5,vector_str_index_of:5,vector_str_is_empti:5,vector_str_iter:5,vector_str_last:5,vector_str_length:5,vector_str_nth:5,vector_str_occurrences_of:5,vector_str_pop:5,vector_str_push_al:5,vector_str_remov:5,vector_str_replac:5,vector_str_replace_first:5,vector_str_rest:5,vector_str_revers:5,vector_str_rot:5,vector_str_set_nth:5,vector_str_shov:5,vector_str_shove_dup:5,vector_str_stack_depth:5,vector_str_subvec:5,vector_str_swap:5,vector_str_tak:5,vector_str_yank:5,vector_str_yank_dup:5,what:9,why:9}})