import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import App from './components/App';
import Footer from './components/Footer'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <App />
    <Box mt={8}>
        <Footer />
      </Box>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
