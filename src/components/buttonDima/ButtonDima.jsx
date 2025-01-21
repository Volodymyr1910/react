import "../myButton/MyButton.css"

// пример отдельного компонента кнопки.
function MyButton ({type, text,func}) {
    return  <button type={type} onClick={func} className="myButton">{text}</button>;
}
export default MyButton;