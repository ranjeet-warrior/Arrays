//Unique colour Shirt
let shirt="";
    let count=0;
    let i,j;
    for(i=0;i<N;i++){
        let current=0;
        for(j=0;j<N;j++){
            if(arr[i]==arr[j]){
                current++;
            }

        }
        if(current==1){
            shirt=shirt+arr[i];
            count++;
        }
}
return count;
