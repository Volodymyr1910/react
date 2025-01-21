import "./MyButton.css"

// пример отдельного компонента кнопки.
function MyButton () {
    return  <button onClick={functionForButton} className="myButton">{text}</button>;
}
export default MyButton;