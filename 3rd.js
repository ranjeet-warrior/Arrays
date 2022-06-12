//count occurence
const findCount = (N, K, Arr) => 
{
let count=0;
for(let i=0;i<N;i++){
  if(Arr[i]==K){
    count=count+1;
  }
}
return count;
};