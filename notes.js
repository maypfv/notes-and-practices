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
>> ((fib_rec(1) + fib_rec(0)) + fib_rec(1)) + fib_rec(2) >>yes this one
>> ((1 + 0)  + fib_rec(1)) + fib_rec(2)
>> ((1 + fib_rec(1))) + fib_rec(2)
>> (1 + 1) + fib_rec(2)
>> 2 + fib_rec(2) 
>> 2 + ...



>>(1 + 0 + 1 + fib_rec(2))
>>(2 + 1 + 0)

ok so basically first of all theres like 3 notations for order of growth right
and like their purpose is to help us analyse which process is better (recursive or iterative)
do u unds the 3 notations and the growth functions ok lets see the on top example
ok so u try fill in the steps yes HAHA
/rmb the brackets! 
ok ur texts u make them comments i dont comment mine so its easier to see
ok i edit then u see ah
ok u get the idea right so u need to work out the left hand side then the right
ok can identify the longest line yeahh basically OH just say longest line on that line

OK SORRY SO LONG BUT BASICALLY u have 4 def ops here and it doesnt really matter 
the no. of def ops but more so how the no. of def ops changes as ur n changes

so imagine its fib_rec(8), the no. of def ops would rougly(?) double
SO this means the space is linearly proportional to the argument n 
hence this function has O(n) space complexity

(n) because it is linear
other most used ones are log(n), 2^n, n^2, 1 (CONSTANT)

ya and example for time complexity of this fib_rec right, it would be
O(2^n) time complexity
do uk why yeah yeah correct every node has 2 more leaves ig idk how to say 
BUT YEA then ok for the below example lets move there



// 
// the leaves grow exponentially 
//ohhh okok i get that, 
//yeps, yea makes sense
//the third line isit HAHA
// uhh i think 5
// like as in the deferred ops
//yepp

//okays
// okee wait can js ignore the true false for now right 
//yea i get the three notations but like idg how like eg the factorial func how do u know whats its order of growth

// Fibonacci by iterative process
function fib_iter(n) {

    return fibby(1, 0, n);
}

function fibby(a, b, count) {
        return count === 0
               ? b
               : fibby(a + b, a, count - 1)
    }

// fib_iter(4)
>> fibby(1, 0, 4) first fib_iter call returns fibby(1, 0, n)!! then the fibby call would return the other stuff
>> fibby(1, 1, 3)
>> fibby(2, 1, 2)
>> fibby(3, 2, 1)
>> fibby(5, 3, 0)
>> since count === 0, hence final returns b = 3 can?? oHHH yesyes i get it 
OK



u can just calculate in the brackets for fib_iter actually fib_rec also
if its (fib_rec(1+2) just write fib_rec(3)) YEA 
okla this is badly written let me fix the function sorry

so basically here whats the time complexity?? 
how does no. of steps change if n changes (no. of steps can be defined however u like!
matters more how itll change)
yes linearly proportional hence O(n) time complexity for this again
how about space needed?
ok space has a "definition" which says is the no. of deff ops
iterative (for now at least) has no def ops hence constant
YES so itll have a notation of O(1) space complexity


means right in summary for the same fibonacci function,
>> fib_iter: O(n) time complexity
>> fib_iter: O(1) space complexity
>> fib_rec: O(n) time complexity
>> fib_rec: O(2^n) space complexity
anyway from here, the better function to use is fib_iter since the space 
complexity is constant
but fib_iter it more difficult to write up 

AND YA thats just it ... we just learning notations to analyze
HHAHAHA i just learned this yst im glad u unds now URE WELCOME

save this if u need!
 HAHA OK JIAYOU bae
 yes! thanks hehe
 // u toooo lmk if u need any other help or anyth yaaaa, 
// brooo ur so good at explaning!!1 thankuuuu <33 yaaa wayway better, yepp def will

ya apparently its like theres 3 notations and their difference is the 
ranges?? but my friend said logically in reality we use O ... idk... 
AHAHAH but for simplicity we use O now to compare the application. 
generally its all similar ig?? 

// ohhh, yaaa easier that way
// so generally O is used the most?
// ohh okok so constant, yeppp 
// the space is also linear?
//it changes linearly
// omg im damn cnfused SORRY send help pls 
// noo i legit q bad at iterative 
// ohhh isee
// im damn bad at the iterative ooPS


isok bae yaya so n u can replace with the value already which is 4


