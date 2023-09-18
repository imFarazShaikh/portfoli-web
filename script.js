const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
   
// function circleMouseFolower(){
//     window.addEventListener("mousemove", function(dets){
//         document.querySelector("#minicircle").style.transform = `tranlate(${dets.clientX}px, ${dets.clientY}px)`;
//     })
            
// }
// circleMouseFolower();
function circleMouseFollower() {
    window.addEventListener("mousemove", function(event) {
        var miniCircle = document.querySelector("#minicircle");
        miniCircle.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });
}
function firstPageAnimation(){
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration:1.5,
        ease: expo.easeInOut
    })
        .to(".boundinelem", {
            y: 0,
            duration: 2,
            ease: expo.easeInOut,
            Stagger: .2,
            delay:-1
        })
        .from("#herofooter", {
           y: '-10',
           opacity: 0,
           duration:1.5,
           ease: expo.easeInOut,
           delay:-1
        })
}

circleMouseFollower();
firstPageAnimation();


