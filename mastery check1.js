function plus_one(x) {
 return x + 1;
}
function trans(f) {
 return x => 2 * f(2 * x);
}
function twice(f) {
 return x => f(f(x));
}
trans(plus_one)(1);

trans(twice(plus_one))(1);
trans(x => plus_one(plus_one(x)))(1)
(x => 2 * (x => plus_one(plus_one(x)))(2 * x))(1)
2 * (x => plus_one(plus_one(x)))(2)
2 * plus_one(plus_one(2))

twice(trans(plus_one))(1);
twice(x=> 2 * plus_one(2*x))(1);
(x => (x => 2 * plus_one(2*x)(x => 2 * plus_one(2*x))(x)))(1);
(x => 2 * plus_one(2*x)) ( (x => 2 * plus_one(2*x))  (1) );
26

twice(trans)(plus_one)(1);
(x => trans(trans(x)))(plus_one)(1)
trans(trans(plus_one))(1)
trans(x => 2 * plus_one(2 * x))(1)
(x => 2 * (x => 2 * plus_one(2 * x))(2 * x))(1)
2 * (x => 2 * plus_one(2 * x))(2)
2 * 2 * plus_one(2 * 2)
4 * plus_one(4)
20

const x = y => z => z(y);
function mystery(f) {
    const z = 5;
    return f(y => z * y);
}

const y = x(6)(mystery(f => x => f(f(x))));
(y => z => z(y))(6)(mystery(f => x => f(f(x))))
(z => z(6))(mystery(f => x => f(f(x)))
(z => z(6))( (f => x => f(f(x)))(y => 5 * y) )
(z => z(6))(x => (y => 5 * y)((y => 5 * y)(x)))
(x => (y => 5 * y)((y => 5 * y)(x)))(6)
(y => 5 * y)((y => 5 * y)(6)))
(y => 5 * y)( 5 * 6)
