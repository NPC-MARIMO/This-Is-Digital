let arrow = document.querySelector("#arrow");
let sGreen2 = document.querySelector("#arr"); 
let navItems = document.querySelectorAll(".navItems");
let image1 = document.querySelector("#image1");
let image2 = document.querySelector("#image2");
let h1 = document.querySelector("#logo");
let image3 = document.querySelector("#image3");
let centerTxt = document.querySelector("#centerTxt");
let aboutUs = document.querySelector("#aboutUs");
document.addEventListener("DOMContentLoaded" ,()=>{
    gsap.from(image1 , {
        opacity : 0 , 
        y : -50 , 
        duration : 1.25 ,
        ease : Expo.easeInOut
    })
    gsap.to("body" , {
        scale : .9
    })
    gsap.from(image2 , {
        opacity : 0 , 
        x : 50 , 
        delay : .375 ,
        duration : 1.25 ,
        ease : Expo.easeInOut
    })
    gsap.from(image3 , {
        opacity : 0 , 
        y : 50 , 
        delay : .75,
        duration : 1.25 ,
        ease : Expo.easeInOut
    })
    gsap.from(centerTxt , {
        opacity : 0 ,
        scale : .5 , 
        duration : .75 , 
        delay : 1.125
    })
    gsap.from(arrow , {
        opacity : 0 ,
        scale : 1.5 , 
        duration : .75 , 
        delay : 1.125
    })
    gsap.from("#part2>a:nth-last-child(1)" , {
        opacity : 0 , 
        scale : .5 , 
        duration : .75 , 
        delay : 1.125
    })
    gsap.from(navItems , {
        y: -100 , 
        duration : 1 ,
        delay : 1,
        opacity : 0
    })
    gsap.from(h1 , {
        opacity : 0 , 
        duration : 3 ,
        ease : Expo.easeInOut
    })
})

arrow.addEventListener("mouseover" , ()=> {
    gsap.to(sGreen2 , {
        right : "0%",
        duration : 0.5 ,
        ease : Expo.easeInOut
    })

})
arrow.addEventListener("mouseout" , ()=> {
    gsap.to(sGreen2 , {
        right : "-27%",
        duration : 0.5 ,
        ease : Expo.easeInOut
    })
})

navItems.forEach( (item,idx) => {
    item.addEventListener("mouseover" , ()=>{
        gsap.to(navItems[idx] , {
            y : -100 ,
            scale : 1.05,
            duration : .75 ,
            ease : Expo.easeInOut
        })
        
    })
    
});
navItems.forEach( (item, idx) => {
    item.addEventListener("mouseout" , ()=>{
        gsap.to(navItems[idx] , {
            y : 0 ,
            scale : 1,
            duration : .75 ,
            ease : Expo.easeInOut
        })
        
    })
    
});

image1.addEventListener("mouseover", ()=>{
    gsap.to(image1 , {
        y : -30

    })
})
image1.addEventListener("mouseout", ()=>{
    gsap.to(image1 , {
        y : 0
    })
})
image2.addEventListener("mouseover", ()=>{
    gsap.to(image2 , {
        y : -30
    })
})
image3.addEventListener("mouseover", ()=>{
    gsap.to(image3 , {
        y : -30
    })
})
image2.addEventListener("mouseout", ()=>{
    gsap.to(image2 , {
        y : 0
    })
})
image3.addEventListener("mouseout", ()=>{
    gsap.to(image3 , {
        y : 0
    })
})
h1.addEventListener("mouseover" , ()=>{
    gsap.to(h1 , {
        scale : .7
    })
})
h1.addEventListener("mouseout" , ()=>{
    gsap.to(h1 , {
        scale : 1
    })
})
centerTxt.addEventListener("mouseover", ()=>{
    gsap.to(centerTxt , {
        scale : 1.1
    })
})
centerTxt.addEventListener("mouseout", ()=>{
    gsap.to(centerTxt , {
        scale : 1
    })
})
arrow.addEventListener("mouseover", ()=>{
    gsap.to(arrow , {
        scale : 1.1
    })
})
arrow.addEventListener("mouseout", ()=>{
    gsap.to(arrow , {
        scale : 1
    })
})
aboutUs.addEventListener("mouseover" , ()=>{
    gsap.to("#arr2" , {
        right : "0%"
    })
})
aboutUs.addEventListener("mouseout" , ()=>{
    gsap.to("#arr2" , {
        right : "-35%"
    })
})
