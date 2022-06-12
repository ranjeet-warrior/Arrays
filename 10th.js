// Min and Max
function arrayMin(arr) {
  
    let result=arr[0];
    for(let i=1;i<N;i++){
      if(result>arr[i]){
        result=arr[i];
      }
    }
    return result;
    }
function arrayMax(arr,N) {
    let result1=arr[0];
    for(let i=1;i<N;i++){
      if(result1<arr[i]){
        result1=arr[i];
      }
      return result1;
    }
}
  
