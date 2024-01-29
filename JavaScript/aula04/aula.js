

const reduce = (array, callback, initialValue = null) => {
    let accumulator = initialValue === null ? array[0] : initialValue
    let index = initialValue === null ? 1 : 0;
    for (index; index<array.length; index++){
        
       accumulator = callback(accumulator, array[index], index, array)
    }
    return accumulator;
}

// const initialValue = 0;

const array = [0 , 2, 4, 6, 7];
function sum (acumulador, valorAtual, index, array) {
    return acumulador + valorAtual;
  };
  // 10

 console.log(array.reduce(sum,15))
  console.log("_------------------------------------_")
  console.log(reduce(array, sum,25))
  