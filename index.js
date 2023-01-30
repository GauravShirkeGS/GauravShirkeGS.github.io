
        
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
// let type = document.querySelector(".typing");
// type.innerText="gaurav";
/*

  var typed = new Typed(".typing", {
    strings: ["Java Developer", "Coder", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  */

  function home () {
    window.scrollTo(0,0);
  }

  function about () {
    window.scrollTo(0,700);
  }

  function skill () {
    window.scrollTo(0,1332);
  }

  function project () {
    window.scrollTo(0,2032);
  }

  function contact () {
    window.scrollTo(0,2800);
  }