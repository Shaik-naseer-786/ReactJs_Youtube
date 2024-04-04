import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
    return(
        <>
        <h1>Hello naseer beta</h1>
        </>
    )
}
const ReactElement={
    type :'a',
    props:{
        href:'https://google.com',
        target:'_blanck',

    },
    children:'click here open google'
}
const AnotherElement=(
    <a href='https://google.com' target='_blank'>Visit to google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    AnotherElement
  
)
