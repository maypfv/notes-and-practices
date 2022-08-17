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


import { repeat_pattern, heart, show } from "rune";

show(repeat_pattern(3,heart));