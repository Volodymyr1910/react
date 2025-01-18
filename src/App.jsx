//*  імпорти розташовані до функцій

import './App.css'
import ProfilCardforHW from './components/profilCardforHW/profilCardforHW'
import ProfileCard from './components/profileCard/ProfileCard'
import Lesson_02 from './lessons/lesson_02/Lesson_02'


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
      <ProfilCardforHW/>
    </>
  )
}

//* експорт потрібен для використання цього компонента в інших місцях react
export default App
