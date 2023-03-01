
        
console.log(this.scrollY);

let nav =document.querySelector("nav");


  $( document ).ready(function(){
    $(window).scroll(function (){

        if (this.scrollY > 20) {
            nav.classList.add("sticky");
          } else {
            nav.classList.remove("sticky");
          }
    })
  })

const slideshow = () => {
    
  let type = document.querySelector(".typing");
  let arr = ["Java Developer", "Coder", "Problem Solver"];
  type.innerText= arr[0];
  let i=1;
  const interval = setInterval(()=>{
      
    
      type.innerText = arr[i];
      i++;
      if(i==3) i=0;
      
  },1500);
  
}
slideshow();


function openNewWindow(){
  window.open("https://drive.google.com/file/d/1Nfb2VY46aoj-LEs_8s7z7OEdXuR7_0T7/view?usp=sharing");
}


  

  
   function clickbox (){
    document.getElementById("btn").click();
  }






function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}