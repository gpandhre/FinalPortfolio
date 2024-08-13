let pointer = document.querySelector(".pointer");
let page = document.querySelector(".page1");
page.addEventListener("mousemove",function(dets){
    let x = dets.clientX;
    let y = dets.clientY;
    pointer.style.top = `${y}px`;
    pointer.style.left = `${x}px`;
    pointer.style.opacity = 1;
});
let part2 = document.querySelector(".part2");
let skill1 = document.querySelector(".skill1");
let skill2 = document.querySelector(".skill2");
let skill3= document.querySelector(".skill3");
let skill4 = document.querySelector(".skill4");
skill1.addEventListener("mouseenter",function(){
    skill2.style.display="none";
    skill3.style.display="none";
    skill4.style.display="none";
    //skill1.classList.add("skillafter");
    skill1.style.width="1300px";
    skill1.style.height="400px";
    skill1.style.marginTop="180px";
    
})
skill1.addEventListener("mouseleave",function(){
    //skill1.classList.remove("skillafter");
    skill2.style.display="flex";
    skill3.style.display="flex";
    skill4.style.display="flex";
    skill1.style.width="35rem";
    skill1.style.height="8rem";
    skill1.style.marginTop=0;
   
    
});
skill2.addEventListener("mouseenter",function(){
    skill1.style.display="none";
    skill3.style.display="none";
    skill4.style.display="none";
    skill2.style.width="1300px";
    skill2.style.height="400px";
    skill2.style.marginTop="180px";
    
})
skill2.addEventListener("mouseleave",function(){
    skill2.classList.remove("skillafter");
    skill1.style.display="flex";
    skill3.style.display="flex";
    skill4.style.display="flex";
    skill2.style.width="35rem";
    skill2.style.height="8rem";
    skill2.style.marginTop=0;
   
    
    
    
});

skill3.addEventListener("mouseenter",function(){
    skill2.style.display="none";
    skill1.style.display="none";
    skill4.style.display="none";
    skill3.style.width="1300px";
    skill3.style.height="400px";
    skill3.style.marginBottom="235px";
    
})
skill3.addEventListener("mouseleave",function(){
    skill2.style.display="flex";
    skill1.style.display="flex";
    skill4.style.display="flex";
    skill3.style.width="35rem";
    skill3.style.height="8rem";
    skill3.style.marginBottom=0;
   
    
    
    
    
});

skill4.addEventListener("mouseenter",function(){
    skill2.style.display="none";
    skill3.style.display="none";
    skill1.style.display="none";
    skill4.style.width="1300px";
    skill4.style.height="400px";
    skill4.style.marginBottom="235px";
    
})
skill4.addEventListener("mouseleave",function(){
    skill2.style.display="flex";
    skill3.style.display="flex";
    skill1.style.display="flex";
    skill4.style.width="35rem";
    skill4.style.height="8rem";
    skill4.style.marginBottom=0;
   
    
    
    
});
