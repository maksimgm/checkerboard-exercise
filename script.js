

for(i=0; i < 63; i++){
  var newBox = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(newBox);
  // newBox.style.backgroundColor = "red";
  newBox.style.width = "11.1%";
  newBox.style.float = "left";
  newBox.style.paddingBottom = "11.1%";

  var r = Math.floor(Math.random()* 256);
  var g = Math.floor(Math.random()* 256);
  var b = Math.floor(Math.random()* 256);
  var randomColor = (r + "," + g + ","+ b);
  newBox.style.backgroundColor =  "r"+"g"+"b"+ "(" + randomColor+ ")";
}


