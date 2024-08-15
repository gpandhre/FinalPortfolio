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
let skilltext = document.querySelectorAll(".text");

const arr =[skill1,skill2,skill3,skill4];
let i=0;
let j=0;
arr.forEach(function(skills){
let index=arr.indexOf(skills);
    
    skills.addEventListener
    ("mouseover",function hover()
        {
            for(i=0;i<4;i++){
                for(j=0;j<2;j++)
                {
                    if(j==index)
                        { 

                            arr[j].style.display="flex";
                            arr[j].style.width="1300px";
                            arr[j].style.height="400px";
                            arr[j].style.marginTop="180px";
                
                        }
                    else
                        {
                            arr[i].style.display="none";
                        }
                }
                for(j=2;j<4;j++)
                {
                    if(j==index)
                        { 

                            arr[j].style.display="flex";
                            arr[j].style.width="1300px";
                            arr[j].style.height="400px";
                            arr[j].style.marginBottom="235px";
                
                        }
                    else
                        {
                            arr[i].style.display="none";
                        }
                }
            }
        })
         
    skills.addEventListener
    ("mouseout",function()
        {
            for(i=0;i<4;i++)
                {
                for(j=0;j<2;j++)
                {
                    if(j==index)
                        { 
    
                            arr[j].style.width="35rem";
                            arr[j].style.height="8rem";
                            arr[j].style.marginTop="0";
                
                        }
                    else
                        {
                            arr[i].style.display="flex";
                        }
                }
                for(j=2;j<4;j++){
                    if(j==index)
                        { 
    
                            arr[j].style.width="35rem";
                            arr[j].style.height="8rem";
                            arr[j].style.marginBottom="0";
                
                        }
                    else
                        {
                            arr[i].style.display="flex";
                        }
                }
    
            }
    
        
        })
})
   // }
// skill1.addEventListener("mouseenter",function(){
//     skill2.style.display="none";
//     skill3.style.display="none";
//     skill4.style.display="none";
//     //skill1.classList.add("skillafter");
//     skill1.style.width="1300px";
//     skill1.style.height="400px";
//     skill1.style.marginTop="180px";
//     skilltext.style.display="none";

    
// })
// skill1.addEventListener("mouseleave",function(){
//     //skill1.classList.remove("skillafter");
//     skill2.style.display="flex";
//     skill3.style.display="flex";
//     skill4.style.display="flex";
//     skill1.style.width="35rem";
//     skill1.style.height="8rem";
//     skill1.style.marginTop=0;
//    skilltext.style.display="flex";
    
// });
// skill2.addEventListener("mouseenter",function(){
//     skill1.style.display="none";
//     skill3.style.display="none";
//     skill4.style.display="none";
//     skill2.style.width="1300px";
//     skill2.style.height="400px";
//     skill2.style.marginTop="180px";
    
// })
// skill2.addEventListener("mouseleave",function(){
//     skill2.classList.remove("skillafter");
//     skill1.style.display="flex";
//     skill3.style.display="flex";
//     skill4.style.display="flex";
//     skill2.style.width="35rem";
//     skill2.style.height="8rem";
//     skill2.style.marginTop=0;
   
    
    
    
// });

// skill3.addEventListener("mouseenter",function(){
//     skill2.style.display="none";
//     skill1.style.display="none";
//     skill4.style.display="none";
//     skill3.style.width="1300px";
//     skill3.style.height="400px";
//     skill3.style.marginBottom="235px";
    
// })
// skill3.addEventListener("mouseleave",function(){
//     skill2.style.display="flex";
//     skill1.style.display="flex";
//     skill4.style.display="flex";
//     skill3.style.width="35rem";
//     skill3.style.height="8rem";
//     skill3.style.marginBottom=0;
   
    
    
    
    
// });

// skill4.addEventListener("mouseenter",function(){
//     skill2.style.display="none";
//     skill3.style.display="none";
//     skill1.style.display="none";
//     skill4.style.width="1300px";
//     skill4.style.height="400px";
//     skill4.style.marginBottom="235px";
    
// })
// skill4.addEventListener("mouseleave",function(){
//     skill2.style.display="flex";
//     skill3.style.display="flex";
//     skill1.style.display="flex";
//     skill4.style.width="35rem";
//     skill4.style.height="8rem";
//     skill4.style.marginBottom=0;
   
    
    
    
// });




// let arr = [
//     {dp:"https://images.unsplash.com/photo-1719352354062-0a35d9db5773?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
//     story:"https://images.unsplash.com/photo-1719352354062-0a35d9db5773?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"},
//     {dp:"https://images.unsplash.com/photo-1719658414203-83fdaf1bdb33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
//      story:"https://images.unsplash.com/photo-1719658414203-83fdaf1bdb33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
//     },
//     {dp:"https://images.unsplash.com/photo-1719582868977-9633f6e91a91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
//      story:"https://images.unsplash.com/photo-1719582868977-9633f6e91a91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {dp:"https://images.unsplash.com/photo-1719530908903-caf3926dd2e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D",
//      story:"https://images.unsplash.com/photo-1719530908903-caf3926dd2e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {dp:"https://images.unsplash.com/photo-1718585708744-573c54a2c38c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D",
//      story:"https://images.unsplash.com/photo-1718585708744-573c54a2c38c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D"
//     },
// ]
// let clutter = "";
// arr.forEach(function(elem,idx){
//     console.log(elem,idx);
//     clutter += `<div class="story">
//                 <img id=${idx} src="${elem.dp}" alt="">
//             </div>`
// });
// let container = document.querySelector(".container");
// container.innerHTML = clutter;
// container.addEventListener("click",function(dets){
//     document.querySelector(".full-screen").style.display = "block";
//     document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;
//     setTimeout(function(){
//         document.querySelector(".full-screen").style.display = "none";
//     },3000)//
