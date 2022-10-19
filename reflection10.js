// // function zip_streams(s1, s2) {
// //     if (is_null(s1)) {
// //         return s2;
// //     } else if (is_null(s2)) {
// //         return s1;
// //     } else {
// //         return pair(head(s1),
// //             () => pair(head(s2),
// //                         () => zip_streams(
// //                             stream_tail(s1), stream_tail(s2))));
// //     }
// // }
// function zip_list_of_streams (xs) {
//     const len = length(xs);
//     function helper(xs, n) {
//         if (is_null(xs)) {
//             return xs;
//         } else if (n > len) {
//           return helper(map(s => stream_tail(s), xs), n);
//         } else {
//             return pair(stream_ref(head(xs), n), 
//                         () => helper(list_ref(xs, n + 1), n + 1));
//         }
//     }
//     return helper(xs, 0);
// }

// const s1 = pair(1, () => pair(11, () => pair(111, () => s1)));
// const s2 = pair(2, () => pair(22, () => pair(222, () => s2)));
// const s3 = pair(3, () => pair(33, () => pair(333, () => s3)));

// const zip = zip_list_of_streams(list(s1, s2, s3));
// eval_stream(zip, 10);


function add_streams(s1, s2) {
    if (is_null(s1)) {
        return s2;
    } else if (is_null(s2)) {
        return s1;
    } else {
        return pair(head(s1) + head(s2),
                    () => add_streams(stream_tail(s1),
                                        stream_tail(s2)));
    }
}

function partial_sums(s) {
   function sum(s, x) {
       if (is_null(s)) {
           return x;
       } else {
           return pair(head(s) + x, 
                      () => sum(stream_tail(s), head(s) + x));
       }
   }
   return sum(s, 0);
}


























