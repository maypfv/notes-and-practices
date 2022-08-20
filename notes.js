// Fibonacci by recursive process
function fib_rec(n) {
    return n === 0
           ? 0
           : n === 1
           ? 1
           : fib_rec(n - 1) + fib_rec(n - 2);
}

// fib_rec(4)
>> fib_rec(3) + fib_rec(2) 
>> (fib_rec(2) + fib_rec(1)) + fib_rec(2)
>> ((fib_rec(1) + fib_rec(0)) + fib_rec(1)) + fib_rec(2) this ?<<< yeap longest
>> ((1 + 0) + fib_rec(1)) + fib_rec(2)
>> (1 + fib_rec(1)) + fib_rec(2)
>> (1 + 1) + fib_rec(2)
>> 2 + fib_rec(2)
>> 2 + (fib_rec(1) + fib_rec(0))
>> 2 + (1 + 0)
>> 2 + 1
>> 3

so the more impt thing is not the absolute no of deferred operations.
the impt thing is how the no of deferred operation change along as n changes
so if we compare fib_rec(10) and fib_rec(5), 
fib_rec(10) will have close to double the no of deferred operations of fib_rec(5), means it will use oduble the memory space
ok.. so means that its proportional to the argument n
yeap yeap so O(n) space compelxity OH cus (n) is the growth function which is linear hence n????
n is the input
and the space complexity is proportional to linear n
wait so O(n) space complexity shows that the the space needed is proportional
to n HAHA ok but then why got omega and theta and their ranges he mentioned
YES

ok basically they all mean similar thing, to measure order of growth
yeah but for the most part, in real life, practically speaking, we mostly use O(n)
cus when u write programs, you want it to be able to scale 

for eg if i write a mod timetable scheduling program that has space compelxity O(n!)
if i have to schedule 3 mods , the space required will be prop to 3!
if i have to schedule 10 mods, the sapce required wil be prop to 10! then prog might crash cus cant scale

i see, so like all 3 measures whether order of growth is prop or expotential to n 
ok... so how HAHA ohhh so the notations and growth functions help analyse if the prog is ok....
yeah

hm ok but one more thing, whats the n inside O(n) or O(n!) like how to know... 
that's the harder part hahahaha
there's no hard and fast formula for it. Havent, we only learnt factorial and fib, and used those to illustrate the diff
ohhhRIGHT but whats the n for factorial and fib i didnt get it just now ok
ya ok i show u the bottom function now for u to see
shoudl i clear the chat lol
no leh HHAHAHA



// Fibonacci by iterative process
function fib_iter(n) {
    function fibby(a, b, count) {
        return count === 0
               ? b
               : fibby(a + b, a, count - 1)
    }
    return fibby(1, 0, n);
}

// fib_iter(4)
>> fibby(1, 0, 4) 
>> fibby(1, 1, 3)
>> fibby(2, 1, 2)
>> fibby(3, 2, 1)
>> fibby(5, 3, 0)
>> 3

do u know why i had to define fibby? 
Wait yes?? HAHA like cus fib_iter's definition is fibby no? 
// i'll use comments for my text k
// u dont comment, then easy to tell who typing LOL
// yes but whycouldnt i just return fibby's definition as fib_iter's definition
wait u mean why didnt u write fibby's definition as fib_iter's?
ahh yea so u defined a new function because u want to have no def ops??? YEAH YEAH 
oh nice.. so if not we will have alot of def ops and use up space

whats state variables? 
// yeah, what was the purpose of defining a new function within fib_iter
// this is an impt qn to understand, cus it is the fundamental diff between iterative processes and recursive processes
// iterative processes are entirely contained within each iterative call, so that from each call, we can obtain the subsequent call
// so usually iterative def will contain some "state variables" that track the entire execution
// in this case, n is like the state var in fibby
// watch closely how n changes as the prog is evaluated
// so the n decrements from 4 to 1, telling us like which phase the prog is in during the evaluation
// i think every iterative process has sth similar to this one, like mission q2 the circle cone pyramid thing, can do by iterative also
// yeah, and why i brought this up lol, was for uu to note the time and space compelxity of fib_iter
// think space compelxity first, what is space needed proportional to?
// does the comp store stuff inn memory as it goes through the evaluation? yeah no it doesnt, every line is only one iter fn
// hence space compelxity is O(1) - constant, it does not depend on n the input
// generally yes, i dunno if i can say blanket that all iteraive is O(1), i also dunnno
// then time complexity is dependent on no of stpes right
// so u see lor how many calls need to be made
// agak only, no need precise one when doing order of growth, 4 or 5 or 6 or 10 has no diff
// yeah and if we were to change to fib_iter(8), the no of steps would roughly double right
// so if n doubles, the steps would double, so time compelxity O(n) - linear


ok so like interative process uses this type of function declaration and evaluation isit
oh yes back to that 

hmm no ??? 
OHHH so no def ops hence O(1) space complexity
ah yea 
ok so including fib_iter?? since its a call
ohhh icic 6?
u try evaluate fib_iter(4)
HAHA ok
nvm i try shag okok 
hahahahah try to think like computer
when the comp sees fib_iter being called
it will jump up to look at the definition of fib_iter --  which return fibby(1, 0, n)
which is fibby... which also has its own definition?? i see
so when fib_iter is called
it willl in turn call fibby first, this part ok?
wait how do we know for sure that it is proportional or not ohhh so just 2 examples 
// list it out in your head hahahahah 
// can u see, in your mind's eye, that the state var will be decrementing from 8 to 1
// which means 8 lines
// yeah and each function take O(1) time to run
// yeap yeap


yeaa 8 lines for called functions?
ohhh 
hence it will be proportional to n ?? hence O(n) time complexity

ohhh so compared to fib_rec's time complexity is the same as fib_iter but space different
damn ok... i seeee
then the only other thing we know about time complexity is the expotentially
ohhh yeah now i understand
hm but hoow would i know which is better // O(1) best, O(log n) 2nd best
chey ok!
niceee

WAIT FINAL THING
whats the number of leaves in recursion tree for fib(n) being F(n+1)
what HAHA ohhhhh but whats F?? and why is there a value attached to it
phi as in F?? HAHAA okok so thats just to calculate the number of leaves in fib(n)
ok wait but the tree for fib right
thats the fib_rec?? cus def ops on the right
OH right i rmb the avenger said yst

cus every node has 2 branches so proportional to 2^n

okok makes sense

THANKS

ok also the freaking mission  HAHAHAHA NOT OK SIALOL ok cannn thanks
// lowest tip with no children
// dont have babies below them
// a node has parent and child
// upper thing is parent, lower thing is child
// if a node has no childre, it is leaf
// OHH the phi thing, idt required to know like idt they'll test, but that is computational, can see the sicp explanation
// need solve x^2 + x + 1 = 0, the roots will give phi lol
// hahahahaha i dun rmb whats F in the lecture liao, but i think it has to do with th no of steps 
// i also dunno that part alr hahahahaha i need see again i didnt listen at the leaves thing
// yeap fib tree is fib rec, OH WAIT
// WAIT SHIT
// TIME COMPLEXITY FOR FIB REC IS 2^N
// cus of the no of nodes it has to compute
// sory my example input too small, couldnt see it
// if u do fib(8) or sth will be more apparent
// yeah yeah that
// hehe okie 
// ur mission ok not
// HAHAHAHAHAH
// eh text later k i got a GE lecture now
// byeeeee u save this if u want hahahah
yes i will byee


// fib_rec time complexity O(2^n)
// fib_rec space complexity O(n)
// fib_iter time complexity O(n)
// fib_iter space compelxity O(1)
 
//so iter better cus use less space, computer wont stack overflow when input large no
// but generally speaking, recursive processes are easier to write than iterative proceses
// the last few slides got mention a few common time compelxities
// like n, n^2, log n, n log n, etc
// but dont worry bout that first lor, will see examples of each type in time
// simi

