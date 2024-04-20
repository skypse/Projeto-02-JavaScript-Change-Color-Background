let index = 0;

function changeColors(){
  let colors = ["purple","plum","paleturquoise","skyblue","turquoise","aquamarine"]

  document.getElementsByTagName("body")[0].style.background = colors[index++]

  if(index > colors.length - 1){
    index = 0;
  }
}