const bars = document.querySelector('.hamburger')
const  mains =document.querySelector('.main')
const body = document.querySelector('body')
const cross = document.querySelector('.cross')
const linkbtn = document.querySelector('.linkbtn')
const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')
bars.addEventListener('click',nitin)
function nitin(){
    if(mains.className.includes('main1'))
    {
        mains.classList.add('main2')
        mains.classList.remove('main1')
        body.style.overflow = "hidden"
        
    }
    else if(mains.className.includes('main2'))
    {
        mains.classList.add('main1')
        mains.classList.remove('main2')
        body.style.overflow = "visible"
        
    }
}
cross.addEventListener('click',nitin)

function preloader()
{
    page2.style.display="block"
    page1.style.display="none"
}