import MyButton from "../../components/myButton/MyButton";
import React, { useState } from "react";
function HomeWork_03 (){
  
    const [paragraphs, setParagraphs] = useState([]); // Стан для збереження параграфів

    const myFunction = () => {
      setParagraphs((prev) => [...prev, "Hello!"]); // Додаємо новий текст до списку параграфів
    };
  
    return (
      <div>
        <button onClick={myFunction}>Say Hello!</button>
        <div>
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p> // Відображення кожного параграфа
          ))}
        </div>
      </div>
    );
}

export default HomeWork_03
