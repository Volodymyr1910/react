import "./MyButton.css"

// пример отдельного компонента кнопки.
function MyButton ({functionForButton, text}) {
    return  <button onClick={functionForButton} className="myButton">{text}</button>;
}
export default MyButton;