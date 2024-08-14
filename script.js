const bodyEl = document.querySelector("body"); // This method searches the entire document (webpage) for the first element that matches the CSS selector provided. 

bodyEl.addEventListener("mousemove", (event) =>{
    
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random()*100;
    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px"
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
})