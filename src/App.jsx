//*  імпорти розташовані до функцій

import './App.css'
// import HomeWork_4 from './homeworks/hw_4/HomeWork_4'
// import HomeWork_3_v2 from './homeworks/hw_3_v2/HomeWork_3_v2'
// import Lesson_05 from './lessons/lesson_05/Lesson_05'
// import Lesson_04 from './lessons/lesson_04/Lesson_04'
// import FunctionForButton from './components/functionForButton/functionForButton'
// import HomeWork_03 from './homeworks/hw_3/HomeWork_03'
// import HomeWork_03 from './homeworks/hw_3/HomeWork_03'
// import Lesson_03 from './lessons/lesson_03/Lesson_03'
// import MyButton from './components/myButton/MyButton'
// import ProfilCardforHW from './components/profilCardforHW/profilCardforHW'
// import ProfileCard from './components/profileCard/ProfileCard'
// import Lesson_02 from './lessons/lesson_02/Lesson_02'
import HomeWork_05 from './homeworks/hw_5/HomeWork_05'



//*  оголошення функції з компонента Арр (функція має те саме ім'я як і назва компонента). Компонент називається з великої літери і має розширення jsx
function App() {
  //* тіло функції. Тут відбувається логіка роботи з даними. Запити до сервера, робота з елементами, що змінюються. Тут пишеться майже все те, що раніше писали в script.js
 
  return (
    // * повертає значення
    // jsx компоненти повертають xml верстку
    // динамічні данні з тіла функції можемо вставляти в теги і відображати на сторінці
    <>
      {/* <Lesson01/> */}
      {/* <h1>Hello, React ⚡</h1> */}
      {/* <HomeWork_01/> */}
      {/* <Lesson_02/> */}
      {/* <ProfileCard /> */}
      {/* <ProfilCardforHW/> */}
      {/* <Lesson_03/> */}
      {/* <HomeWork_03/> */}
      {/* <FunctionForButton/> */}
      {/* <HomeWork_03/> */}
      {/* <HomeWork_3_v2/> */}
      {/* <Lesson_04/> */}
      {/* <HomeWork_4/> */}
      {/* <Lesson_05/> */}
      <HomeWork_05/>
    </>
  )
}

//* експорт потрібен для використання цього компонента в інших місцях react
export default App

