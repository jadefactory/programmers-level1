function solution(str) {
  let index = Math.floor(str.length / 2);

  if (str.length % 2) {
    return str.substring(index, index + 1);
  } else {
    return str.substring(index - 1, index + 1);
  }
}

console.log(solution('abcde')); // c
console.log(solution('qwer')); // we
