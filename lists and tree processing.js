// qn 2
function flatten_list(xs) {
    if (is_null(xs)) {
        return 0;
    } else if (!is_list(xs)) {
        head(xs) + flatten_list(tail(xs));
    } else { pair(flatten_list(head(xs)), flatten_list(tail(xs)));
}
}

const LoL = list(list(1,2), list(3,4));
/*function flatten_list(xs) {
    return is_null(xs) 
            ? 0
            : !is_list(xs)
            ? 
            : pair(flatten_list(head(xs)), flatten_list(tail(xs)));
}*/

flatten_list(LoL);


//qn 3

function accumulate_tree(f, op, initial, tree) {
 return accumulate( /* your answer here */ , initial, tree);

// extra question
function map(f, xs) {
	return is_null
		?null
		:pair(f(head(xs)), map(f, tail(xs)));
}


>> (f(x1), f(x2), f(x3), ... f(xn))
// eg. sum(map(square, xs)) = (square(x1) + square(x2) + ... + square(xn))


function filter(condition, xs) {
	return is_null(xs) 
		? null
		:condition(head(xs))
		? pair(head(xs), filter(condition, tail(xs))
		: filter(tail(xs));
}



function accumulate(f, initial, xs) {
		return is_null(xs) 
			? initial 
			: f(head(xs), accumulate(f, initial, tail(xs)));
}

>> f is a binary operator, takes in 2 arguments


