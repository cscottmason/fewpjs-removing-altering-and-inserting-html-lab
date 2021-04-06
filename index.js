// Write your code here!

document.querySelector('main').remove()

let newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory')
newHeader.innerHTML = "Candice is the champion"

document.body.appendChild(newHeader)