// Prefix sum of an array is the sum  of all elements from 0 to i in a given array.
//Brute force approch is to calculate the sum of 

let prefix_sum = (arr) => {
    let prefix_sum_arr = [];
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = 0; j<= i; j++){
            sum += arr[j];
        }
        prefix_sum_arr[i] = sum; 
    }
    console.log(prefix_sum_arr);
    return prefix_sum_arr;
}

prefix_sum([1,2,3,4,5,6,7,8,9,10]); // [1,3,6,10,15,21,28,36,45,55]

//Optimized approach is to calculate the prefix sum 

let prefix_sum_optimized = (arr) => {
    let prefix_sum_arr = [];
    prefix_sum_arr[0] = arr[0];
    for(let i = 1; i < arr.length; i++){
        
        prefix_sum_arr[i] = prefix_sum_arr[i-1] + arr[i];
    }
    console.log(prefix_sum_arr);
    return prefix_sum_arr;
}

prefix_sum_optimized([1,2,3,4,5,6,7,8,9,10]); // [1,3,6,10,15,21,28,36,45,55]