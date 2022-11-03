
// Question 1A


function is_nucleobase(s) {

    return is_string(s)
           ? s === "A" || s === "C" || s === "G" || s === "T"
           : false;
}

is_nucleobase("Otto"); // false
is_nucleobase("G"); // true
is_nucleobase("B"); // false
is_nucleobase("A"); // true


// Question 1B


function is_dna_strand(xs) {
    return !is_null(xs)
           ? is_nucleobase(head(xs)) && is_dna_strand(tail(xs))
           : true;
}

is_dna_strand(list("A", "G", "A")); // true
is_dna_strand(list("A", "B", "B", "A")); // false
is_dna_strand(list("T", "G", "C")); // true
is_dna_strand(list("T", "G", "Otto")); // false


// Question 1C

function combine(xss) {
    return accumulate(append, null, xss);
}
combine(list(list("A", "G", "A"),
 list("G", "C", "T", "A"), list("C")));
// returns list("A", "G", "A", "G", "C", "T", "A", "C")
combine(list(list("G"), list("T"),
 list("C", "A", "A", "A"), list("G")));
// returns list("G", "T", "C", "A", "A", "A", "G")


// Question 1D

function oxoguanine_repair(xs) {
    if (is_null(xs)) {
        return null;
    } else if (head(xs) === "8") {
        set_head(xs, "G");
        oxoguanine_repair(tail(xs));
        return xs;
    } else {
        oxoguanine_repair(tail(xs));
        return xs;
    }
}

oxoguanine_repair(
 list("A", "8", "A", "8", "C", "T", "A", "C", "8", "8"));


// Question 1E
// //////////////////////////////////////////////////////////

function find_gene_start(xs) {
    if (is_null(xs)) {
        return null;
    } else if (head(xs) === "A") {
        return head(tail(xs)) === "T" && (!is_null(tail(tail(xs))))
               ?head(tail(tail(xs))) === "G" 
                    ?list(tail(tail(tail(xs)))) 
                        :find_gene_start(tail(xs))
               :find_gene_start(tail(xs));
    } else {
        return find_gene_start(tail(xs));
    }
}

find_gene_start(list("A", "C", "A", "T", "G", "T", "A", "C"));
// returns list(list("T", "A", "C"))
find_gene_start(list("A", "T", "A", "G", "T", "A", "T", "G"));
// returns list(null)
find_gene_start(list("A", "T", "A", "G", "T", "A", "C", "G"));
// returns null



// ////////////////////////////////////////////////////////////
// // Question 1F
// ////////////////////////////////////////////////////////////

function find_gene_end(xs) {
     function helper(L, accum) {
        if (is_null(L)) {
            return null;
        } else if (head(L) === "T" && !is_null(tail(L))) {
            return head(tail(L)) === "A" && (!is_null(tail(tail(L))))
                   ? (head(tail(tail(L))) === "G" || head(tail(tail(L))) === "A" 
                      ?list(reverse(accum))
                      :helper(tail(L), pair(head(L), accum)))
                   : (head(tail(L)) === "G" && (!is_null(tail(tail(L))))
                      ?(head(tail(tail(L))) === "A" 
                        ?list(reverse(accum))
                        :helper(tail(L),
                                    pair(head(L),
                                         accum)))
                      :helper(tail(L), pair(head(L), accum)));
        } else { 
            return helper(tail(L), pair(head(L), accum));
        }
    }
    return helper(xs, null);
}

find_gene_end(list("A", "T", "A", "C", "T", "A", "G",
 "A", "T", "A", "A"));
// returns list(list("A", "T", "A", "C"))
find_gene_end(list("T", "G", "A", "A", "T", "A", "C"));
// returns list(null)
find_gene_end(list("A", "T", "A", "C", "C", "A", "G",
 "A", "T"));
// returns null



// ////////////////////////////////////////////////////////////
// // Question 1G
// ////////////////////////////////////////////////////////////

function all_genes(xs) {
    function helper(L, accum) {
        return is_null(L) || (is_null(tail(L))) 
              ?accum
              :helper(member(tail(head(find_gene_start(L))), L), 
                                append(head(find_gene_end(head(find_gene_start(L)))), accum));
    }
    return helper(xs,list(null));
}

all_genes(list("T", "A", "T", "G", "C", "A", "T",
 "A", "A", "G", "T", "A", "G", "A",
 "T", "G", "A", "T", "G", "A", "T"));
// returns list(list("C", "A"), list("A"))

// Question 2A
////////////////////////////////////////////////////////////

function all_different(nums) {
    const len = length(nums);
    for (let i = len - 1; i >= 0; i = i - 1) {
        for (let j = 0; j < i; j = j + 1) {
            if (list_ref(nums, j) !== list_ref(nums, i)) {
            
            } else {
                return false;
            }
        }
    }
    return true;
}



// ////////////////////////////////////////////////////////////
// // Question 2B
// ////////////////////////////////////////////////////////////

function is_valid_toto_set(nums, n, min, max) {
    const len = length(nums);
    const range = enum_list(min, max);
    return len !== n 
           ? false
           : !all_different(nums)
           ? false
           : is_null(tail(nums))  
           ? !is_null(member(head(nums), range))
           :!is_null(member(head(nums), range)) 
                && is_valid_toto_set(tail(nums), n - 1, min, max);
}



// ////////////////////////////////////////////////////////////
// // Question 2C
// ////////////////////////////////////////////////////////////

function num_of_matches(numsA, numsB) {
    function helper(xs, ys, n) {
        if (is_null(xs)) {
            return n;
        } else if (is_null(ys)) {
            return n;
        } else {
            return !is_null(member(head(xs), ys))
                   ?helper(tail(xs), ys, n + 1)
                   :helper(tail(xs), ys, n);
        }
    }
    return helper(numsA, numsB, 0);
}



// ////////////////////////////////////////////////////////////
// // Question 2D
// ////////////////////////////////////////////////////////////

function check_winning_group(bet_nums, draw_nums, extra_num) {
    const n = length(draw_nums);
    const matches = num_of_matches(bet_nums, draw_nums);
    function helper(xs, ys, x, wgn) {
        if (matches === x) {
            return wgn + 1;
        } else if (matches === x - 1) {
            return !is_null(member(extra_num, bet_nums))
                   ? wgn + 2
                   : wgn + 3;
        } else if (matches === x - 2) {
            return !is_null(member(extra_num, bet_nums))
                   ? wgn + 4
                   : wgn + 5;
        } else {
            return wgn;
        }
    }
    return helper(bet_nums, draw_nums, n, 0);
}


// // Question 3A
// ////////////////////////////////////////////////////////////

function evaluate_BAE_tree(bae_tree) {
    function operator(L) {
        const op = list_ref(L, 2);
        const lhs = list_ref(L, 1);
        const rhs = list_ref(L, 3);
        return op === "+" 
              ?evaluate_BAE_tree(lhs) + evaluate_BAE_tree(rhs)
              :op === "-"
              ?evaluate_BAE_tree(lhs) - evaluate_BAE_tree(rhs)
              :op === "*"
              ?evaluate_BAE_tree(lhs) * evaluate_BAE_tree(rhs)
              :op === "/"
              ?evaluate_BAE_tree(lhs) / evaluate_BAE_tree(rhs)
              :
    }
    return is_number(bae_tree) ? bae_tree : operator(bae_tree);
}



// ////////////////////////////////////////////////////////////
// // Question 3B
// ////////////////////////////////////////////////////////////

// function build_BAE_tree(bae_list) {

//     // WRITE HERE.

// }



// ////////////////////////////////////////////////////////////
// // Question 3C
// ////////////////////////////////////////////////////////////

// function evaluate_BAE(bae_list) {

//     // WRITE HERE.

// }



// ////////////////////////////////////////////////////////////
// // Question 3D
// ////////////////////////////////////////////////////////////

// function check_parentheses(paren_list) {

//     // WRITE HERE.

// }