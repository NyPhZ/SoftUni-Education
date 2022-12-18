function test1(numbers){
 
    let sum = [];
  
    for(let ele of numbers){
        sum.push(ele);
    }
    while(sum.length > 1){
        let arr = [];
        for(let i = 0; i < sum.length - 1;i++){
            arr[i]=sum[i] + sum[i + 1];
        }
        sum=arr;
    }
 console.log(sum.join())
  
 }