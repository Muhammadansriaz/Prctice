function repeatStringNumTimes(str, num) {
    if(num<1){
      console.log(""); 
    }
    else{
  
    console.log( str +repeatStringNumTimes(str, num-1));
    }
  }
  
  repeatStringNumTimes("abc", 7);