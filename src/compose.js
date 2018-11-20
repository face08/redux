/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

/*

var a = function (p){
    console.log(p)
    return p+=2;
}

var b = function(p){
    console.log(p)
    return p*=3
}

var arr=[a,b]

var aaa = arr.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });

 aaa(5)

 */
