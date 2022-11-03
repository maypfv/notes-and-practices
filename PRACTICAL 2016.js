
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
    
}

// Question 1E
////////////////////////////////////////////////////////////

function find_gene_start(xs) {

    // WRITE HERE.

}



////////////////////////////////////////////////////////////
// Question 1F
////////////////////////////////////////////////////////////

function find_gene_end(xs) {

    // WRITE HERE.

}



////////////////////////////////////////////////////////////
// Question 1G
////////////////////////////////////////////////////////////

function all_genes(xs) {

    // WRITE HERE.

}

// Question 2A
////////////////////////////////////////////////////////////

function all_different(nums) {

    // WRITE HERE.

}



////////////////////////////////////////////////////////////
// Question 2B
////////////////////////////////////////////////////////////

function is_valid_toto_set(nums, n, min, max) {

    // WRITE HERE.

}



////////////////////////////////////////////////////////////
// Question 2C
////////////////////////////////////////////////////////////

function num_of_matches(numsA, numsB) {

    // WRITE HERE.

}



////////////////////////////////////////////////////////////
// Question 2D
////////////////////////////////////////////////////////////

function check_winning_group(bet_nums, draw_nums, extra_num) {

    // WRITE HERE.

}


// Question 3A
////////////////////////////////////////////////////////////

function evaluate_BAE_tree(bae_tree) {

    // WRITE HERE.

}



////////////////////////////////////////////////////////////
// Question 3B
////////////////////////////////////////////////////////////

function build_BAE_tree(bae_list) {

    // WRITE HERE.

}



////////////////////////////////////////////////////////////
// Question 3C
////////////////////////////////////////////////////////////

function evaluate_BAE(bae_list) {

    // WRITE HERE.

}



////////////////////////////////////////////////////////////
// Question 3D
////////////////////////////////////////////////////////////

function check_parentheses(paren_list) {

    // WRITE HERE.

}

