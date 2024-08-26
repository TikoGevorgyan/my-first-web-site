
let scrollContainer=document.querySelector('.gallery')
let arrowleft=document.getElementById('arrowleft')
let arrowright=document.getElementById('arrowright')
let count=0
    scrollContainer.style.scrollBehavior='smooth'
    
    arrowleft.addEventListener('click',()=>{
    scrollContainer.scrollLeft+=1350
scrollContainer.style.scrollBehavior='smooth'
})

arrowright.addEventListener('click',()=>{
        if(count===0){
            scrollContainer.style.scrollBehavior='smooth'
            scrollContainer.scrollLeft-=1350
            count++
        }else{
            scrollContainer.style.scrollBehavior='smooth'
            scrollContainer.scrollLeft-=1350

            count--
        }
    })




    
let myregistr1=document.getElementById('myregistr1')


let res=0
let rememberclick=document.getElementById('rememberclick')
let check=document.getElementById('check')
rememberclick.addEventListener('click',()=>{
    if(res==0){
        check.style.width='6%'
        res++
    }else{
        check.style.width='0%'

        res--
    }
})

let res1=0
let signonsquare=document.getElementById('signonsquare')
let myregistr=document.getElementById('myregistr')
signonsquare.addEventListener('click',()=>{
    if(res1==0){
        signonsquare=myregistr.style.transition='3s'

        signonsquare=myregistr.style.marginTop='110px'
        res1++
    }else{
        
        signonsquare=myregistr.style.marginTop='-465px'
        signonsquare=myregistr.style.transition='2s'
        res1--
    }

})

let clicklog1=document.getElementById('clicklog')
let mailleft=document.getElementById('mailleft')
let imgleft=document.getElementById('imgleft')
let clickreg1=document.getElementById('clickreg')

clicklog1.addEventListener('click',()=>{
        mailleft.style.marginTop='-700px'
        imgleft.style.marginTop='-700px'

})

clickreg1.addEventListener('click',()=>{
        mailleft.style.marginTop='105px'
        imgleft.style.marginTop='112px'

})




let clicklog=document.getElementById('clicklog')

clicklog.addEventListener('click',()=>{
    logins.style.marginLeft='215px'

    document.getElementById('logins')
})
let clickreg=document.getElementById('clickreg')
clickreg.addEventListener('click',()=>{
    document.getElementById('logins')
    logins.style.marginLeft='70px'
    
})



document.querySelectorAll('.chapter1').forEach(p => {
    p.addEventListener('click', () => {

        const target = document.querySelector(p.getAttribute('data-target'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',

            });
        }
    });
});


document.querySelectorAll('.chapter2').forEach(p => {
    p.addEventListener('click', () => {

        const target = document.querySelector(p.getAttribute('data-target'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',

            });
        }
    });
});


document.querySelectorAll('.chapter3').forEach(p => {
    p.addEventListener('click', () => {

        const target = document.querySelector(p.getAttribute('data-target'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',

            });
        }
    });
});

document.querySelectorAll('.chapter4').forEach(p => {
    p.addEventListener('click', () => {

        const target = document.querySelector(p.getAttribute('data-target'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',

            });
        }
    });
});

document.querySelectorAll('.chapter5').forEach(p => {
    p.addEventListener('click', () => {

        const target = document.querySelector(p.getAttribute('data-target'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',

            });
        }
    });
});

document.querySelectorAll('.chapter6').forEach(p => {
    p.addEventListener('click', () => {

        const target = document.querySelector(p.getAttribute('data-target'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',

            });
        }
    });
});

document.querySelectorAll('.chapter7').forEach(p => {
    p.addEventListener('click', () => {

        const target = document.querySelector(p.getAttribute('data-target'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',

            });
        }
    });
});


document.querySelectorAll('.top').forEach(p => {
    p.addEventListener('click', () => {

        const target = document.querySelector(p.getAttribute('data-target'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',

            });
        }
    });
});