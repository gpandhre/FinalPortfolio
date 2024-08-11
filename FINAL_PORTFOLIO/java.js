let pointer = document.querySelector(".pointer");
let page = document.querySelector(".page1");
page.addEventListener("mousemove",function(dets){
    let x = dets.clientX;
    let y = dets.clientY;
    pointer.style.top = `${y}px`;
    pointer.style.left = `${x}px`;
    pointer.style.opacity = 1;
})