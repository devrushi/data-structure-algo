//A frequency array is a special array that stores the frequency of each element in the array.
//Frequency table is also known as hash table.
let max_frequency = (arr) => {
    let freq_arr = [0];
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        freq_arr[arr[i]] = (freq_arr[arr[i]] || 0) + 1;
      }
    console.log(freq_arr);

}

max_frequency([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]); // [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]