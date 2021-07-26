console.log('Client side javascript file is loaded')

/* fetch('http://puzzle.mead.io/puzzle').then((response)=> {
    response.json().then((data)=>{
        console.log(data)
    })
}) */


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value;
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageOne.className = 'loader'
    messageTwo.className = 'loader'

    // ## Both are fine
    // fetch('http://192.168.1.3:3000/weather?address=' + location).then((response) => {
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                messageOne.className = 'error'
                //console.log(data.error)
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast

                messageOne.className = 'success'
                messageTwo.className = 'success'
                //console.log(data.location)
                //console.log(data.forecast)
            }
        })
    })
})

