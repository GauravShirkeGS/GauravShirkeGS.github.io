
        
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
    window.scrollTo(0,3190);
  }

  function resume(){
    // window.location.href = "https://drive.google.com/file/d/1Nfb2VY46aoj-LEs_8s7z7OEdXuR7_0T7/view?usp=sharing";
    window.open("https://drive.google.com/file/d/1Nfb2VY46aoj-LEs_8s7z7OEdXuR7_0T7/view?usp=sharing","_blank");
  }

  // const mediaQuerymin = window.matchMedia('(min-width: 820px)')
  // const mediaQuerymax = window.matchMedia('(max-width: 1180px)')

  // if(mediaQuerymin.matches&&mediaQuerymax.matches){
    
  // function about () {
  //   window.scrollTo(0,935);
  // }

  // function skill () {
  //   window.scrollTo(0,1872);
  // }
  //   function project () {
  //     window.scrollTo(0,2852);
  //   }
  
  //   function contact () {
  //     window.scrollTo(0,3913);
  //   }
  // }else{

  //   function home () {
  //     window.scrollTo(0,0);
  //   }
  
  //   function about () {
  //     window.scrollTo(0,700);
  //   }
  
  //   function skill () {
  //     window.scrollTo(0,1332);
  //   }
  
  //   function project () {
  //     window.scrollTo(0,2032);
  //   }
  
  //   function contact () {
  //     window.scrollTo(0,3190);
  //   }
  // }







function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}