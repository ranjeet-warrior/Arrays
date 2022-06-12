//Find whether the number is present or not

const Find_Num = (array,N,M) => 
{
  for(let i=0;i<N;i++){
    if(array[i]==M){
      return "YES";
    }
    else{ 
      return "NO";
    }
}
};