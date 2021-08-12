import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import configureAppStore from './store'
const store = configureAppStore({})
ReactDOM.render(
   <React.StrictMode>
      <ChakraProvider>
         <Provider store={store}>
            <App />
         </Provider>
      </ChakraProvider>
   </React.StrictMode>,
   document.getElementById('root')
)

reportWebVitals()
