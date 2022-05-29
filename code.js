const c1 = document.querySelector(".c1")
console.log(c1)

c1.addEventListener('click', (eve)=>{
    console.log(eve.target.innerText)
})

const c2 = document.querySelector(".c2")
console.log(c1)

c2.addEventListener('click', ()=>{
    if(c2.classList.contains('color')){
        c2.classList.remove("color")
    }else{
        c2.classList.add("color")
    }
    
})

console.log(c2.classList)