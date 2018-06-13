function compareNumbers(a, b) {
  return a - b;
}

var myArray = [];
for (i = 10; i > 0; i--) {
myArray[i] = process.argv[i];}

process.stdout.write("array before sorting " + myArray); 
myArray = myArray.sort(compareNumbers);
process.stdout.write("array after sorting " + myArray); 
