import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26,
//     }
//     // 1 способ использовать функцию как обработчик события:
//     this.nextYear = this.nextYear.bind(this);
//     // 2 способ использовать функцию как обработчик события:
//     // this.nextYear = () => {
//     //   this.setState(state => ({
//     //     years: ++state.years
//     //   }))
//     // }
//   }
  
//   // Способ называется classfields. Позволяет не только функции записывать вне контруктора, но и state.
//   // state = {
//   //   years: 26,
//   // }
//   // 3 способ использовать функцию как обработчик события:
//   // nextYear = () => {
//   //   this.setState(state => ({
//   //     years: ++state.years
//   //   }))
//   // }

//   // Для первого способа метод nextYear должен размещаться здесь.
//   // Для второго, выше внутри конструктора. 
//   nextYear() {
//     console.log(1);
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   //   Команда setState перезаписывает объект с нашими состояниями.
//   //   Как правильно менять наш state.
//   }
//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state
//     return (
//       <>
//         <button onClick={this.nextYear}></button>
//         <h1>My name is {name}, surname - {surname}, years - {years}</h1>
//         <a href={link}>My profile</a>
//       </>
//     )
//   }
// }

// // function WhoAmI({name, surname, link}) {
// //   return (
// //     <>
// //       <h1>My name is {name}, surname - {surname}</h1>
// //       <a href={link}>My profile</a>
// //     </>
// //   )
// // }

// const All = () => {
//   return (
//     <>
//     <WhoAmI name="Jhon" surname="Smith" link="facebook.com"/>
//     <WhoAmI name="Ivan" surname="Smith" link="football.ua"/>
//     <WhoAmI name="Alex" surname="Shepard" link="facebook.com"/>
//     </>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <All/> */}
    <App/>
  </React.StrictMode>
);

reportWebVitals();
