//is two array equal

let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]

function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    
    return true
}

//suppose  if elemnts are in different order then also we can say they are equal

function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    
    let sortedArr1 = arr1.slice().sort()
    let sortedArr2 = arr2.slice().sort()
    
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false
        }
    }
    
    return true
}

//if arrays are nested then we can use JSON.stringify to compare them
function isEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2)
}
