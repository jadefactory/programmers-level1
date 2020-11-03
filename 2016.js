function solution(a, b) {
  const weekDay = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  const lastDayOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sumDay = b;

  for (let i = 0; i < a - 1; i++) {
    sumDay = sumDay + lastDayOfMonth[i];
  }

  const index = sumDay % 7;

  return weekDay[index];
}

console.log(solution(5, 24)); // "TUE"
