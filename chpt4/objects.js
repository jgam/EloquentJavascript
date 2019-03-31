//write a range function

function range(start, end, step = start < end ? 1: -1){
    //returns an array cpontaining all the numbers from start up to end
    let ret_array = []
    if (step > 0){
        for(let i = start; i <= end; i += step){
            ret_array.push(i);
        }
    }
    else{
        for(let i = start; i >= end; i += step){
            ret_array.push(i);
        }
    }
    return ret_array
}

function sum(input_list){
    ret_count = 0
    for(let i = 0; i < input_list.length; i++){
        ret_count += input_list[i];
    }
    return ret_count;
}

console.log(sum([1,2,3,4,5,6,7,8,9,10]));
console.log(range(5,2,-1));

//Reversing an array

function reverseArray(input_array){
    //create another array and push the values there
    let ret_array = [];
    //reversing the loop from end to start
    for (let i = input_array.length - 1; i >= 0; i--){
        ret_array.push(input_array[i]);
    }
    return ret_array;
}

function reverseArrayInPlace(array){
    //swapping
    for (let i = 0; i < Math.floor(array.length/2); i++){
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1,2,3,4,5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // -> [5,4,3,2,1]

//List
function arrayToList(input_list){
    //produce an array from a list
    //*list is a nested set of objects, with the first object holding a reference to the second, the second to the third...
    let ret_list = null;
    for (let i = input_list.length - 1; i >= 0; i--){
        ret_list = {value: input_list[i], rest: ret_list};
    }
    return ret_list;
}

console.log(arrayToList([1,2,3,]))//{value:1, rest: {value:2, rest: {value:3, rest:null}}}

function listToArray(list){
    //this function converts list to array
    let ret_list = [];
    let ret_index = 0;
    while (list != null){
        ret_list.push(list["value"]);
        list = list["rest"]
    }
    return ret_list;
}

console.log(listToArray(arrayToList([1,2,3])));//[1,2,3]

