function copy(A) {
    const new_A = A;
    return new_a;
}
function find_min_pos(A, low, hi) {
    let min_pos = low;
    for (let j = low + 1; j <= high; j = j + 1) {
        if (A[j] < A[min_pos]) {
            min_pos = j;
        }
    }
}
function selection_sort(A) {
    const len = array_length(A);
    for (let i = 0; i < len; i = i + 1) {
        let min_pos = find_min_pos(A, i, len - 1);
        swap(A, i, min_pos);
    }
}

function make_optimized_search(A) {
    const xs = copy(A);
    selection_sort(xs);
    return x => 
}