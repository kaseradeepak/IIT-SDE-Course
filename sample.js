// Implement the hello button behavior
// const helloBtn = document.querySelector("#btn-1")
const helloBtn = document.getElementById('btn-1')
// console.log(helloBtn)

/// Add an event listener to helloBtn
helloBtn.addEventListener('click', function() {
    // console.log("Hello")

    //To display hello on the webpage, we need to create an HTML element.
    const newHelloEle = document.createElement('div')
    newHelloEle.innerText = 'Hello'
    // console.log(newHelloEle)
    
    //Select the body element from document
    const bodyEle = document.querySelector('body')
    bodyEle.appendChild(newHelloEle)
})


// Implement the bye button behavior
const byeBtn = document.getElementById("btn-2")
// console.log(byeBtn)
byeBtn.addEventListener('click', function() {
    // console.log("Bye")
    const newByeEle = document.createElement('div')
    newByeEle.innerText = 'Bye'
    // console.log(newByeEle)

    const bodyEle = document.querySelector('body')
    bodyEle.appendChild(newByeEle)
})

// const btns = document.querySelectorAll('button')
// console.log(btns)