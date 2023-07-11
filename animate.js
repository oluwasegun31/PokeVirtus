// function to start the counter
const counterElement = document.querySelector('.counter');
function startCount(){
    let currentVal = 0;
    function updateCount(){
        if(currentVal === 100){
            return;
        };
        currentVal += Math.floor(Math.random() * 10) + 1;
        if(currentVal > 100){
            currentVal = 100;
        };
        counterElement.textContent = currentVal;
    
        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCount, delay)
    }
    updateCount()
}
startCount()

//gsap counter
gsap.to('.counter', 0.35, {
    delay: 3.5,
    opacity: 0,
})

//bar
gsap.to('.bar', 0.8, {
    delay: 3.5,
    height: 0,
    stagger: {
        amount: 0.5 
    },
})

//navbar
gsap.from('nav', 0.8, {
    delay: 4,
    y: 110,
})
// landing abilities
gsap.from('.ability-item h4', 0.8,{
    delay: 4.1,
    y: 70,
    stagger: 0.3,
    ease: 'power3.out',
})
//landing details
gsap.from('#landName, #landType', 0.8, {
    delay: 4,
    x: 700,
    ease:'power3.out' 
})
//landing img
gsap.from('#landImg', 1.5,{
    delay: 4.1,
    scale: 0,
    ease: 'power3.out',
})