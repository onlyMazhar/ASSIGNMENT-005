function abc(){
 console.log(arguments)
}

abc("a","b", 'c')

function sortArr(arr){
    arr.sort();
    console.log(arr)
    return arr;
}

sortArr([7,4,2,8,9,0,1])
