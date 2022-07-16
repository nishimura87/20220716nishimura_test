const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});

console.log(result);

function LeapYear(year){
  if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let checkYear1 = 2020;
if(LeapYear(checkYear1)){
  console.log(checkYear1 + '年はうるう年です');
}else{
  console.log(checkYear1 + '年はうるう年ではありません');
}

let checkYear2 = 2021;
if(LeapYear(checkYear2)){
  console.log(checkYear2 + '年はうるう年です');
}else{
  console.log(checkYear2 + '年はうるう年ではありません');
}