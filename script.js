var scale;
function fixSizes() {
  if (window.innerWidth/16 > window.innerHeight/9){
    scale = window.innerHeight/1080;
  } else {
    scale = window.innerWidth/1920;
  }
}
