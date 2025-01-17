//* імпорт картинки з папки
// треба вибрати ім'я змінної яка буде містити імпортовані дані
import reactImg from '../../assets/react.svg'


function Lesson01() {
  return (
 
 <div>
    {/* //* щоб скористатись даними із змінної ми використовуємо фігурні дужки {reacImg} */}
  <img src= {reactImg} width = {100} alt="react-img" />
  <h2>Hello, React ⚡</h2>
  <p>React — это JavaScript-библиотека для разработки пользовательского интерфейса.
  React используют для создания одностраничных и многостраничных приложений, разработки крупных сайтов.</p>
</div>
);
} // end Lesson01

export default Lesson01;