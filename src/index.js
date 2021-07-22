//const element = document.createElement('h1') probando cambio
//element.innerText = 'Hello React..'
//const container = document.getElementById('root')
//container.appendChild(element)
//https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/avatar-2-1583234102.jpg

import React from 'react'
import ReactDom from 'react-dom'

const user ={
  firstName: 'Maria',
  lastName: 'Garcia',
  avatar:'//https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/avatar-2-1583234102.jpg',
}

function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
  if(user){
    return <h1>Hello {getName(user)}</h1>
  }
  return <h1>Hello Stranger </h1>
}
const name = 'Maria'

const element = (
<div>
      <h1>{getGreeting(user)}</h1>
      <img src={user.avatar}/>
</div>

)
const container = document.getElementById('root')

//ReactDOM.render(_QUE,DONDE_)

ReactDom.render(element, container)