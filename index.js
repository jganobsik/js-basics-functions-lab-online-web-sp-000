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

function calculatesFarePrice(start, end) {
    let blocks = end - start;
    let feet = distanceTravelledInFeet(blocks);
    let answer;
    if(feet < 2500){
      if(feet > 2000) {
        answer = 
      }
    let deducted = feet - 400;
    let 
    }
    else {
      answer = 'cannot travel that far'
    }
    return answer;
}

