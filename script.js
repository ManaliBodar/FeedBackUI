// bring ratings class ,button,ratings container and panel

const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.rating-container')
const panel = document.querySelector('#panel')
const sendBtn = document.querySelector('#send')

//by defualt status
let selectRatings = 'Satisfied'

// add event listener on rating container
ratingsContainer.addEventListener('click',(e) =>{
    if(e.target.parentNode.classList.contains('rating'))
    {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectRatings = e.target.nextElementSibling.innerHTML
        console.log(selectRatings)
    }
})

// add click event listener on button
sendBtn.addEventListener('click' ,(e) => {
    panel.innerHTML = `
    <i class="fa fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>FeedBack:${selectRatings}</strong>
    <p>we'll use your feedback to improve our customer support</p>
    `
})


// create function removeActive

function removeActive()
{
    for(let i = 0 ; i< ratings.length ; i++)
    {
        ratings[i].classList.remove('active')
    }
}