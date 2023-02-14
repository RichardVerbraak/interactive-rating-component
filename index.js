// Selected element put into state
// Shown on thank you card after

// If submit -> show other component

const ratingComponent = document.querySelector('.rating')
const ratingContent= document.querySelector('.rating-content')
const ratings = document.querySelectorAll('.rating__choice')
const submitBtn = document.querySelector('.rating__submit')


let ratingValue = "yes"

ratings.forEach((rating) => {
    rating.addEventListener('click', (e) => {       
        console.log(e.target.innerText)
        ratingValue = e.target.innerText
        console.log(ratingValue)
    })
})

submitBtn.addEventListener('click', () => {
    ratingContent.remove()
    const thankYouContent = document.createElement('div')
    thankYouContent.classList.add('thank-you')

    const thankYouImage = document.createElement('img')
    thankYouImage.src = './images/illustration-thank-you.svg'
    thankYouImage.classList.add('thank-you__image')
    thankYouContent.appendChild(thankYouImage)

    const selectionParagraph = document.createElement('p')
    selectionParagraph.innerText = `You selected ${ratingValue} out of 5`
    selectionParagraph.classList.add('thank-you__selection')
    thankYouContent.appendChild(selectionParagraph)

    const thankYouHeader = document.createElement('thankYouHeader')
    thankYouHeader.innerText = 'Thank you!'
    thankYouHeader.classList.add('thank-you__header')
    thankYouContent.appendChild(thankYouHeader)

    const subText = document.createElement('p')
    subText.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
    subText.classList.add('thank-you__subtext')
    thankYouContent.appendChild(subText)

    ratingComponent.append(thankYouContent)
})


{/* <div class="thank-you">
    <p>You selected <span class="value"></span> out of 5</p>
    
    <h2>Thank you!</h2>
    
    <p>We appreciate you taking the time to give a rating. If you ever need more support, 
      don't hesitate to get in touch!</p>  
   </div> */}
