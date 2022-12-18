function password(n, k) {
    let result = [1];
    
    for(let i=0; i<n - 1;i++){
        let seqK=result.slice(-k);
        let sum=0;
        for(el of seqK){
            sum += el;
        }
        result.push(sum);
    }
    console.log(result.join(" "));
    }