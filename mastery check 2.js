


function compute_catalan(n) {
    let temp = 0;
    if (n === 0) {
        return 1;
    } else {
        let i = 0;
        while (i < n) {
        temp = compute_catalan(i) * compute_catalan(n-1-i) + temp;
        i = i + 1;
        }
        // for(let i = 0; i < n; i = i + 1) {
    }
    return temp;
  }



const mem = [];
function mcat(n) {
    let temp = 0;
    if (mem[n] !== undefined) {
        return mem[n];
    } else {
     if (n === 0) {
            mem[0] = 1;
            return 1;
        } else {
            for(let i = 0; i < n; i = i + 1) {
            temp = mcat(i) * mcat(n - 1 - i) + temp;
        }
    }
    mem[n] = temp;
    return temp;
    }
}

mcat(5);
mcat(20);
mem[0];




