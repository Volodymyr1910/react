import MyButton from "../../components/myButton/MyButton"

function Lesson_02() {
    const element = <h4>Это JSX элемент из переменной element</h4>
    const text = "Это строка из переменной text..."

    const react = {
        library: 'react',
        developer: 'Meta',
        logo: 'https://cdn.pixabay.com/photo/2022/01/18/08/43/meta-6946620_960_720.jpg'
      }
      const angular = {
        library: 'angular',
        developer: 'Google',
        logo: 'https://cdn.pixabay.com/photo/2022/01/18/08/43/meta-6946620_960_720.jpg'
      }


    function showDeveloper (object) {
        if (object.developer && object.library){
        return `Developer of  ${object.library} is ${object.developer} his logo: ${object.logo}`
    }
    return "Not valid Data 😉"
    }

    // переменная от значения котрой зависит отображения данных
    const isLoggedIn = true;

  return (
    <div>
      <h2>React JSX components</h2>
      {element}
      <p>В JSX можем пользоваться динамическими данными, которые приходят из тела функции react компонента или других файлов</p>
      <p>Здесь будет строка: {text}</p>
      {/* в фигурных скобках в верстке  JSX можно использовать логичсекие конструкции JS - в том числе числовые и вызовы функций*/}
      <p>Это вычисление случилось в JSX: {40 * 42}.</p>
      
      {/* пример вызова функций внутри тегов, с передачей им вход. данных  */}
      <p>{showDeveloper(react)}</p>
      <p>{showDeveloper(angular)}</p>
      <p>Вызов функции с передачей ей переменной, в которой нет нужных ключей: {showDeveloper(text)}</p>
        
        {/* пример исп тернарного оператора */}
        {isLoggedIn ? <img width={"250px"} src={react.logo} alt="logo" /> :  <h4>To see image you must authorize!</h4>}

        {/* пример множественного импорта компонентов в файл */}
        <div>
            <MyButton/>
            <MyButton/>
            <MyButton/>
        </div>

    </div>
  );
}
export default Lesson_02;
