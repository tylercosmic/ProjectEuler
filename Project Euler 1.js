var multipleThree = [];
var multipleFive = [];

for (i = 3; i <= 1000; i += 3) {
    multipleThree.push(i);
}

for (i = 5; i <= 1000; i += 5) {
    multipleFive.push(i);
}

var totalThree = 0;
for (var i = 0; i < multipleThree.length; i++) {
    totalThree += +multipleThree[i];
}

var totalFive = 0;
for (var i = 0; i < multipleFive.length; i++) {
    totalFive += +multipleFive[i];
}

total = "The sum of all multiples of three is: " + totalThree + "\nThe sum of all multiples of five is: " + totalFive;


console.log(total);
