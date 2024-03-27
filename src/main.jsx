import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< Updated upstream
import Takume from './Takume.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Takume/>
  </React.StrictMode>
=======
import App from './App.jsx'
import Footer from './footer.jsx'
import Header from './header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Footer />
    <Header />
  </React.StrictMode>,
>>>>>>> Stashed changes
)