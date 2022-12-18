function objects(stock, order) {
    let stockObj = {};
    let boolean = false;
  
    while (stock.length > 0) {
      let newArr = stock.splice(0, 2);
      stockObj[newArr[0]] = Number(newArr[1]);
    }
    while (order.length > 0) {
      let newArr = order.splice(0, 2);
      let arrValue = Number(newArr[1]);
      for (let [key, value] of Object.entries(stockObj)) {
        if (key == newArr[0]) {
          stockObj[newArr[0]] = value + arrValue;
          boolean = true;
        }
  
      }
      if (boolean === false) {
        stockObj[newArr[0]] = arrValue;
      }
      boolean = false;
    }
    for(let [key,value] of Object.entries(stockObj)){
      console.log(`${key} -> ${value}`);
    }
  }