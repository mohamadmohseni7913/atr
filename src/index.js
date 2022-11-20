import React from 'react';
// import ReactDOM from 'react-dom';    
import App from './App';
import "./sass/main.scss"
import "./output.css";
// import "./sass/css/main.min.css"
import 'sweetalert2/src/sweetalert2.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// ReactDOM.render(

//     <App />
//   ,
//   document.getElementById('root')
// );
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>
);

