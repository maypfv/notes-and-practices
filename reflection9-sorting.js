function copy(A) {
    let new_A = [];
    const len = array_length(A);
    for (let i = 0; i < len; i = i + 1) {
        new_A[i] = A[i];
    }
    return new_A;
}
function find_min_pos(A, low, hi) {
    let min_pos = low;
    for (let j = low + 1; j <= hi; j = j + 1) {
        if (A[j] < A[min_pos]) {
            min_pos = j;
        }
    }
}
function merge_sort(A) {
    merge_sort_helper(A, 0, array_length(A) - 1);
}

function merge_sort_helper(A, low, high) {
    if (low < high) {
        const mid = math_floor((low + high) / 2);
        merge_sort_helper(A, low, mid);
        merge_sort_helper(A, mid + 1, high);
        merge(A, low, mid, high);
    }
}

function merge(A, low, mid, high) {
    const B = [];
    let left = low;
    let right = mid + 1;
    let Bidx = 0;
    
    while (left <= mid && right <= high) {
        if (A[left] <= A[right]) {
            B[Bidx] = A[left];
            left = left + 1;
        } else {
            B[Bidx] = A[right];
            right = right + 1;
        }
        Bidx = Bidx + 1;
    }
    
    while (left <= mid) {
        B[Bidx] = A[left];
        Bidx = Bidx + 1;
        left = left + 1;
    }   
    while (right <= high) {
        B[Bidx] = A[right];
        Bidx = Bidx + 1;
        right = right + 1;
    }
    
    for (let k = 0; k < high - low + 1; k = k + 1) {
        A[low + k] = B[k];
    }
}
function binary_search(A, v) {
    let low = 0;
    let high = array_length(A) - 1;
    while (low <= high) {
        const mid = math_floor((low + high) / 2 );
        if (v === A[mid]) {
            break;
        } else if (v < A[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return (low <= high);
}


function make_optimized_search(A) {
    const xs = copy(A);
    merge_sort(xs);
    return x => binary_search(xs, x);
}

const a = [1,2,3,4];
const b = make_optimized_search(a);
b(5);


// qn 2

// function fibs(n) {
//     const fibi = [0, 1];
//     for (let i = 2; i <= n; i = i + 1) {
//         fibi[i] = fibi[i - 2] + fibi[i - 1];
        
//     }
//     return fibi;
// }

// fibs(5);

























