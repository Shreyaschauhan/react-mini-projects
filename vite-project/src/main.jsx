import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"

function MyAPP() {
  return(
    <div>
        <h1>Custom app!!</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
   'Click me to visit google'

)

ReactDOM.createRoot(document.getElementById('root')).render(

      <App />
    // <MyAPP />
    // anotherElement
    // reactElement


)
