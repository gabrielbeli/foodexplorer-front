import React from 'react'
import ReactDOM from 'react-dom/client'

import { AuthProvider } from './contexts/auth'
import { Routes } from './routes'
import { ToastContainer } from 'react-toastify'

import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import 'react-toastify/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
