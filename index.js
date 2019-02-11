// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  let answer
  if (distance > 42) {
    answer = distance - 42;
  }
  else {
    answer = 42 - distance;
  }
  return answer;
}
 