const cost_per_meter = 199.95;
function circumference(radius) {
    return 2 * math_PI * radius;
}
function cost_of_circular_handrail(r) {
    return cost_per_meter * circumference(r);
}
cost_of_circular_handrail(2.1);



function sq(x) {
    return x * x;
}
function sum_of_sq (x, y) {
    return sq(x) + sq(y);
}
function f(a) {
    return sum_of_sq(a+1, a*2);
}
f(5);


import { repeat_pattern, heart, show, stack_frac, sail} from "rune";


/*function stackn (n, rune) {
    return stack_frac (1/n, 
    rune, 
    stackn(n-1, rune);
}

show(stackn(3, heart));*/


/*function stackn (n, rune) {
    return n=== 1
    ? rune
    : stack_frac (1/n, rune, stackn (n-1, rune));
}
*/
// Trisection of the heart
show(stack_frac (1/3, heart, stack_frac(1/2, heart, heart)));

// Quadrisection of the heart
show(stack_frac (1/4, heart, stack_frac(1/3, heart, stack_frac(1/2, heart, heart))));


/* WRONG example to generalise stack_frac idea of stacking:
function stackn (n, rune) {
    return stack_frac(1/n, rune, stackn (n-1, rune));
}

stackn (3, heart);


^ shows that maximum call stack size exceeded!
hence, we need to use 
CONDITIONAL STATEMENTS in our function declarations.*/

//example

function stackn (n, rune) {
    return ( n === 1
    ? rune
    : stack_frac (1/n, rune, stackn (n-1, rune)));
}
show(stackn(5, heart));

