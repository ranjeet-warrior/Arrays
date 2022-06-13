//Even Odd

const findEvenOdd = (N, Arr) => {
let oddCount = 0;
        evenCount = 0;
        let arrBB = [];
        for(let p of Arr){
          if(p%2===0){
            evenCount+=p;
          }
          else{
            oddCount+=p;
          }
        }
        arrBB[0] = evenCount;
        arrBB[1] = oddCount;
        return arrBB;
 };
