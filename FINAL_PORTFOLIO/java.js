let pointer = document.querySelector(".pointer");
let page = document.querySelector(".page1");


// FOR SKILLS

let part2 = document.querySelector(".part2");
let skill1 = document.querySelector(".skill");
let skill2 = document.querySelector(".skill1");
let skill3= document.querySelector(".skill2");
let skill4 = document.querySelector(".skill3");
let skilltext = document.querySelectorAll(".text");

skill1.addEventListener("mouseenter",function(){
    skill2.style.display="none";
    skill3.style.display="none";
    skill4.style.display="none";
    gsap.to(skill1, {
        duration:2.5,
        ease: "power1.out",
        
        });
})
skill1.addEventListener("mouseleave",function(){
    skill2.style.display="flex";
    skill3.style.display="flex";
    skill4.style.display="flex";
   
})

skill2.addEventListener("mouseenter",function(){
    skill1.style.display="none";
    skill3.style.display="none";
    skill4.style.display="none";
})
skill2.addEventListener("mouseleave",function(){
    skill1.style.display="flex";
    skill3.style.display="flex";
    skill4.style.display="flex";
})

skill3.addEventListener("mouseenter",function(){
    skill2.style.display="none";
    skill1.style.display="none";
    skill4.style.display="none";
})
skill3.addEventListener("mouseleave",function(){
    skill2.style.display="flex";
    skill1.style.display="flex";
    skill4.style.display="flex";
})

skill4.addEventListener("mouseenter",function(){
    skill2.style.display="none";
    skill3.style.display="none";
    skill1.style.display="none";
})
skill4.addEventListener("mouseleave",function(){
    skill2.style.display="flex";
    skill3.style.display="flex";
    skill1.style.display="flex";
})


const filled = document.querySelector(".filled");
let wrapper = document.querySelector(".wrapper");

// FOR PERSONAL DATA

let data = document.querySelectorAll(".d1");
let dataIcon = document.querySelectorAll(".data-icon");
let dataText = document.querySelectorAll(".data-text");
let dataI = document.querySelectorAll("#data-i");
let posOfIcon = dataI[0].getBoundingClientRect();
console.log(posOfIcon);
dataI.forEach(function(item,indx){
    console.log(item,indx);
    if(indx===0){
        item.addEventListener("mouseenter",function(){
            dataText[0].style.display="flex";
            dataIcon[0].style.width="50%";
            dataI[0].style.fontSize="32px";
        })
        data[0].addEventListener("mouseleave",function(){
            dataText[0].style.display="none";
            dataIcon[0].style.width="100%";
            dataI[0].style.fontSize="42px";
        })
    }
    else if(indx===1)
    {
        item.addEventListener("mouseenter",function(){
            dataText[1].style.display="flex";
            dataIcon[1].style.width="50%";
            dataI[1].style.fontSize="32px";
        })
        data[1].addEventListener("mouseleave",function(){
            dataText[1].style.display="none";
            dataIcon[1].style.width="100%";
            dataI[1].style.fontSize="42px";
        })
    }
    else if(indx===2)
        {
            item.addEventListener("mouseenter",function(){
                dataText[2].style.display="flex";
                dataIcon[2].style.width="50%";
                dataI[2].style.fontSize="32px";
            })
            data[2].addEventListener("mouseleave",function(){
                dataText[2].style.display="none";
                dataIcon[2].style.width="100%";
                dataI[2].style.fontSize="42px";
            })
        }
    else
    {
        item.addEventListener("mouseenter",function(){
            dataText[3].style.display="flex";
            dataIcon[3].style.width="50%";
            dataI[3].style.fontSize="32px";
        }) 
        data[3].addEventListener("mouseleave",function(){
            dataText[3].style.display="none";
            dataIcon[3].style.width="100%";
            dataI[3].style.fontSize="42px";
        })
    }  
    

})

