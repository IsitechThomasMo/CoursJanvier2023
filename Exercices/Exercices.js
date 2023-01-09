function findLargestNumber(numberTab) {
    return Math.max(...numberTab);
}

// function sortWords(wordTab){
//     return wordTab.sort();
// }

const sortWords = wordTab => wordTab.sort();

function countOccurences(chaine, letter) {
    let count = 0;
    for (i of chaine) if (i.includes(letter)) count = count + 1;
    return count;
}

function flattenArray(tab) {
    return tab.flat(tab.length);
}

function removeDupes(numberTab) {
    let primeNumbers = [];
    for (i of numberTab) {
        for (j = 2; j < i; j++) {
            if (i % 2 !== 0) primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

function swapVariables(x, y) {
    [x, y] = [y, x];
    return [x, y];
}

function parseObject(object) {
    proprietesObjet = [];
    for (i of Object.values(object)) proprietesObjet.push(i);
    return proprietesObjet;
}

function mergeObjects(objectA, objectB) {
    proprietesObjets = [];
    for (i of Object.values(objectA)) proprietesObjets.push(i);
    for (i of Object.values(objectB)) proprietesObjets.push(i);
    return proprietesObjets;
}
/*
function sumArray(objectA, objectB) {
    proprietesObjets = [];
    for (i of Object.values(objectA)) proprietesObjets.push(i);
    for (i of Object.values(objectB)) proprietesObjets.push(i);
    return proprietesObjets;
}*/

console.log(findLargestNumber([1, 2, 3]))

console.log(sortWords(["tabouret", "michel-trou", "hohohaha"]))

console.log(countOccurences("tabouret", 'a'))

console.log(flattenArray(['essai', 'galère', ['fonctionne', 'stp'], [[['oui']]]]))

console.log(removeDupes([1, 3, 6, 8, 12, 13, 19, 21]))

console.log(swapVariables(1, 2))

console.log(parseObject({a: 69, b: 420, c: 'oui'}));

console.log(mergeObjects({a: 69, b: 420, c: 'oui'}, {d: "non"}));