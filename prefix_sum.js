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

//Problem solving 
//Find the Highest Altitude
//There is a biker going on a road. The road trip consists of n + 1 points at different altitudes.
// The biker starts his trip on point 0 with altitude equal 0.
// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i and i + 1 for all (0 <= i < n).
// Return the highest altitude of a point.

let highestAltitude = (gain) => {
    let maxValue = 0;
    let sum = [];
    
    for (let i = 0; i < gain.length; i++){
        if(i === 0){
            sum[i] = gain[i];
           
        }else{
            sum[i] = sum[i-1] + gain[i];
            
        }
        if(sum[i] > maxValue){
            maxValue = sum[i];
        }
    }
    console.log(maxValue);
}

highestAltitude([-5,1,5,0,-7]); // 1