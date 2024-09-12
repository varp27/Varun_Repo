var marks = [56, 76 ,98,64,97]

var highestmarks = marks[0];

for(var i =1; i < marks.length; i++){
     highestmarks = (marks[i] > highestmarks ? marks[i] : highestmarks)
}

console.log("The highest marks scored by stedunt :", highestmarks)