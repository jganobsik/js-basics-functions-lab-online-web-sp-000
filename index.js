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

function distanceFromHqInFeet(distance){
let blocks = distanceFromHqInBlocks(distance);
let answer = blocks * 264;
return answer;
}

function distanceTravelledInFeet(start, end) {
  let blocks = end - start;
  let answer = blocks * 264;
  return Math.abs(answer);
}