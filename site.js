var namesToAges = {
    'Alyssa': 22,
    'Charley': 25,
    'Dan': 25,
    'Jeff': 20,
    'Kasey': 20,
    'Kim': 20,
    'Morgan': 25,
    'Ryan': 25,
    'Stef': 22
};

console.log(Object.values(namesToAges).length) //count values in dictionary

function sortOnKeys(namesToAges) {

    var sorted = [];
    for(var key in namesToAges) {
        sorted[sorted.length] == key;
    }
    sorted.sort();
}

console.log(sortOnKeys(namesToAges))


console.log(namesToAges)


// 22 only appears twice; 20 appears three times; 25, four times
//findRarestValue(namesToAges);  //> 22
//findRarestKeys(namesToAges);  //> ['Alyssa', 'Stef']