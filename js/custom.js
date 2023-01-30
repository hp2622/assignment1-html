let menuIcon = document.getElementById("menu");

let leftSlidebar = document.querySelector(".left-sidebar");

menuIcon.addEventListener("click", () => {
   

    // leftSlidebar.classList.toggle("menu-bar-opened");
    if(leftSlidebar.classList.contains("menu-bar-opened")){
        
        leftSlidebar.classList.remove("menu-bar-opened");
        leftSlidebar.classList.add("menu-bar-closed");

        menuIcon.setAttribute("src", "images/caret-down-solid.svg");
        menuIcon.setAttribute("id","caret-shown");
    }

    else if(leftSlidebar.classList.contains("menu-bar-closed")){
        
        leftSlidebar.classList.remove("menu-bar-closed");
        leftSlidebar.classList.add("menu-bar-opened");

        menuIcon.setAttribute("src", "images/menu-bar.svg");
        menuIcon.setAttribute("id","menu");
    }
})




let rightSlidebar = document.querySelector(".right-slidebar");

let down_arrow = document.querySelector(".downArrow");
let rightHeader = document.querySelector(".right-header");

down_arrow.addEventListener("click", () => {
    console.log("clicked");
    if(rightSlidebar.classList.contains("right-slidebar--open")){
        
        rightSlidebar.classList.remove("right-slidebar--open");
        rightSlidebar.classList.add("right-slidebar--close");

        rightHeader.classList.remove("opacity1");
        rightHeader.classList.add("opacity0");

      
    }

    else if(rightSlidebar.classList.contains("right-slidebar--close")){
        
        rightSlidebar.classList.remove("right-slidebar--close");
        rightSlidebar.classList.add("right-slidebar--open");
        rightHeader.classList.add("opacity1");
        rightHeader.classList.remove("opacity0");

       
    }
})

