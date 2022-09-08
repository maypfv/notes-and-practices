// qn 1
function flatten_list(xs) {
    return accumulate(append, null, xs);
}

// qn 2
function tree_sum(my_tree) {
    if (is_null(tree)) { 
        return 0;
    } else if (is_list(head(tree))) {
        tree_sum(head(tree)) + tree_sum(tail(tree));
    } else { head(tree) + tree_sum(tail(tree))
    }
}


//qn 3

function accumulate_tree(f, op, initial, tree) {
 return accumulate( /* your answer here */ , initial, tree);


function accumulate_tree(f, op, initial, tree) {
    return accumulate(op()
        
        , initial, tree);
}
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



