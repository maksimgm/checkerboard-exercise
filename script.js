// // Your JS goes here

// var newBox = document.createElement('div');
// document.getElementsByTagName('body')[0].appendChild(newBox);

// newBox.style.backgroundColor = "red";
// newBox.style.width = "11.1%";
// newBox.style.float = "left";
// newBox.style.paddingBottom = "11.1%";

var bigDiv = document.createElement('div');
document.getElementsByTagName('body')[0].appendChild(bigDiv);
bigDiv.style.width = "100%";
bigDiv.style.paddingBottom = "76%";
bigDiv.style.background = "linear-gradient(to left top, magenta, rgba(30,90,40,.04))";
bigDiv.style.position= "absolute";


for(i=0; i < 63; i++){
  
  var newBox = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(newBox);
  newBox.style.backgroundColor = "red";
  newBox.style.width = "11.1%";
  newBox.style.float = "left";
  newBox.style.paddingBottom = "11.1%";

  // use linear gradient
    if (i % 2 === 0) {
    newBox.style.backgroundColor = "yellow";
  };
}
