function convertToRoman(num) {
  if (num <10){
    return onethConverter(num);
  } else {
    num = num.toString();
    var thousandth = Number(num[num.length-4]);
    var hundredth = Number(num[num.length-3]);
    var tenth = Number(num[num.length-2]);
    var oneth = Number(num[num.length-1]);

  if (num<100){
    return tenthConverter(tenth)+ onethConverter(oneth);
  } else if (num < 1000){
    return hundredthConverter(hundredth)+tenthConverter(tenth)+ onethConverter(oneth);
  } else if (num < 10000){
    return thousandthConverter(thousandth)+hundredthConverter(hundredth)+tenthConverter(tenth)+ onethConverter(oneth);
  } else {
    return "You broke it"
  }
}
}

var onethConverter = function(num){
  var string = "";
  if(num<4){
    for(let i = 1;  i<=num; i++){
      string += "I";
      }
    } else if (num === 4){
      string = "IV";
    } else if (num < 9){
      string = "V";
      for( let i = 5; i< num; i++){
        string += "I";
      }
    } else {
      string = "IX";
    }
    return string;
  };
  var tenthConverter = function(num){
    var string = "";
    if(num<4){
      for(let i = 1;  i<=num; i++){
        string += "X";
      }
    } else if (num === 4){
      string = "XL";
    } else if (num < 9){
      string = "L";
      for( let i = 5; i< num; i++){
        string += "X";
      }
    } else {
      string = "XC";
    }
    return string;
  };

  var hundredthConverter = function(num){
    var string = "";
    if(num<4){
      for(let i = 1;  i<=num; i++){
        string += "C";
      }
    } else if (num === 4){
      string = "CD";
    } else if (num < 9){
      string = "D";
      for( let i = 5; i< num; i++){
        string += "C";
      }
    } else {
      string = "CM";
    }
    return string;
  };

  var thousandthConverter = function(num){
    var string  = "";
    for(let i = 1;  i<=num; i++){
        string += "M";
    }
    return string;
  };
