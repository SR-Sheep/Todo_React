import React from 'react'; //React를 사용
// import ReactDOM from 'react-dom'; //React DOM 사용
import ReactDOM from 'react-dom/client'; //React DOM 사용

import './index.css'; //css
import App from './App'; //App 컴포넌트
import reportWebVitals from './reportWebVitals';

//ReactDOM이 내부 컴포넌트를 root 엘리먼트에 render
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// //18버전부터 ReactDOM.render 함수가 지원 안됨
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
