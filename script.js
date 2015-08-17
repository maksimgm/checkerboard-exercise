// // Your JS goes here

// var newBox = document.createElement('div');
// document.getElementsByTagName('body')[0].appendChild(newBox);

// newBox.style.backgroundColor = "red";
// newBox.style.width = "11.1%";
// newBox.style.float = "left";
// newBox.style.paddingBottom = "11.1%";



for(i=0; i < 63; i++){
  var newBox = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(newBox);
  newBox.style.backgroundColor = "red";
  newBox.style.width = "11.1%";
  newBox.style.float = "left";
  newBox.style.paddingBottom = "11.1%";

  if (i % 2 === 0) {
    newBox.style.backgroundColor = "black";
  };
}


