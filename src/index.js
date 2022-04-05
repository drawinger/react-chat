import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './styles/globals.css'
import App from './App';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<App />)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

