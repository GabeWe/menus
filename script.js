var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");

var pages = [
  {
    name:"Home",
    content:""
  },
  {
    name:"About",
    content:"Gabe"
  },
  {
    name:"Interact",
    content:"none"
  }
]



for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
 
}

function contentWrite(wd,pg){
  display.innerHTML="";
  if(pg!=="Interact"){
    display.innerHTML=wd;
  }else{
    interactPage()
  }
  
}
  
function interactPage(){
  var header = document.createElement("h1");
    header.innerHTML="Interact";
    display.appendChild(header);
}
{
  function aboutPage(){
  var header2 = document.createElement("h1");
    header2.innerHTML="About";
    display.appendChild(header2);
}
contentWrite(pages[0].content, "Home");
  contentWrite(pages[0].content, "About");
}