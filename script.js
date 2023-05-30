const form = document.querySelector(".form")
const firstName = document.querySelector("#fname")
const lastName = document.querySelector("#lname")
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmation = document.getElementById('confirmation')
const parentInstrument = document.querySelector(".instruments-parent")
const instruments = document.querySelector(".instruments")


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    checkInputs()
    
    
})

function checkInputs(){
    const firstNameval = firstName.value.trim()
    const lastNameval = lastName.value.trim()
    const emailval = email.value.trim()
    const passwordval = password.value.trim()
    const confirmationval = confirmation.value.trim()

    //checking first name
      if(firstNameval==''){
        setError(firstName,"enter a value")
      }else{
        setSuccess(firstName)
      }

       //checking last name
       if(lastNameval==''){
        setError(lastName,"enter a value")
      }else{
        setSuccess(lastName)
      }
       //checking email
       if(emailval==''){
        setError(email,"enter a value")
      } else if(!isEmail(emailval)){
        setError(email,"not a valid email");
      }else{
        setSuccess(email)
      }
      //checking first password
      if(passwordval==''){
        setError(password,"enter a value")
      }else{
        setSuccess(password)
      }
      //checking second password
      if(confirmationval==''){
        setError(confirmation,"enter a value")
      } else if(confirmationval !==passwordval){
        setError(confirmation,"passwords dont match")
      }else{
        setSuccess(confirmation)
      }

}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function setError(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
  
    small.innerText = message
formControl.className = 'form-control error'
  }
  function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
  }

  //adding menu
  parentInstrument.addEventListener("click",()=>{
    instruments.classList.toggle("instrument-visible")
    instruments.classList.toggle("instruments-animation")
  })
  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
  } );
  //adding slider
  const productContainers = [...document.querySelectorAll('.product-container')];
  const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
  const preBtn = [...document.querySelectorAll('.pre-btn')];
  
  productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;
  
      nxtBtn[i].addEventListener('click', () => {
          item.scrollLeft += containerWidth;
      })
  
      preBtn[i].addEventListener('click', () => {
          item.scrollLeft -= containerWidth;
      })
  })
  //adding the form
  const formDiv = document.querySelector(".form-div")
  const closeBtn = document.querySelector(".close-btn")
  const signUp = document.querySelector(".sign-up")
  signUp.addEventListener("click",()=>{

    closeBtn.classList.add("form-visible")
    formDiv.classList.add("form-visible")
  })
  closeBtn.addEventListener("click",()=>{

    closeBtn.classList.add("form-hidden")
    formDiv.classList.add("form-hidden")
  })
  

  //product slider logic
   /*
   const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

CSS
.product-container {
  padding: 0 10vw;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
}

.product-container::-webkit-scrollbar {
  display: none;
}

HTML
   <section class="product"> 
        <h2 class="product-category">best selling</h2>
        <button class="pre-btn"><img src="images/arrow.png" alt=""></button>
        <button class="nxt-btn"><img src="images/arrow.png" alt=""></button>
        <div class="product-container">

            <div class="product-card">
                <div class="product-image">
                    <span class="discount-tag">50% off</span>
                    <img src="images/card1.jpg" class="product-thumb" alt="">
                    <button class="card-btn">add to wishlist</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            
   */