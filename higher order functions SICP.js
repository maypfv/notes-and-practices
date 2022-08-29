function inc(x) {
    return x + 1;
}

function cube(x) {
    return x * x * x;
}

function sum(term, a, next, b) {
    return a > b
    ? 0
    : term(a) + sum(term, next(a), next, b);
}

function simpson_rule_integral(f, a, b, n) {
    function helper(h) {
        function y(k) {
            return f((h * k) + a);
        }
    function term(k) {
        return k === 0 || k === n
        ? y(k)
        : k % 2 === 0 
        ? 2 * y(k)
        : 4 * y(k);
    }
    return sum(term, 0, inc, n) * (h/3);
    }
    return helper((b - a) / n);
}


simpson_rule_integral(cube, 0, 1, 100);


// changing sum function to iterative sum function

function sum(term, a, next, b) {
    function sum_iter(a, total) {
        return a > total 
        ? total
        : sum_iter(next(a), result + term(a));
    }
    return sum_iter(a, 0);
}



// accumulate function (RECURSIVE)

function accumulate_r(combiner, null_value, term, a, next, b) {
    return a > b  
    ? null_value
    : combiner(term(a), accumulate_r(combiner, 
                                null_value, term, next(a), b));
}

function sum_r(term, a, next, b) {
    function plus(x, y) {
        return x + y;
    }
    return accumulate(plus, 0, term, a, next, b);
}

function product_r(term, a, next, b) {
    function multiply(x, y) {
        return x * y;
    }
    return accumulate_r(multiply, 1, term, a, next, b);
}


// accumulate function (ITERATIVE) 

function accumulate_iter(combiner, null_value, term, a, next, b) {
    function iter(a, result) {
        return a > b
        ? null_value
        : iter(next(a), combiner(term(a), result));
    }
     return iter(a, null_value)   
}

function sum_iter(term, a, next, b) {
    function plus(x, y) {
        return x + y;
    }
    return accumulate_iter(plus, 0, term, a, next, b);
}

function product_iter(term, a, next, b) {
    function multiply(x, y) {
        return x * y;
    }
    return accumulate_iter(multiply, 1, term, a, next, b);
}


// conditional statement
// if (predicate) {consesquent-statements} else {alternative-statements}

function expmod(base, exp, m) {
    if (exp === 0) {
        return 1;
    } else {
        if (is_even(exp)) {
            const half_exp = exp(base, exp / 2, m);
            return (half_exp * half_exp) % m;
        } else {
            return base * expmod(base, exp - 1, m);
        }
    }
}












































