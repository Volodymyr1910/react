import "C:/Users/Vova/Desktop/AIT/PRO курс/FRONT/VSS/src/components/showAllElements/ShowAllElements.css";

export default function ShowAllElements({ array, uniqueKey }) {
  return (
    <div className="showAllElements_mainContainer">
      {array.map((element, index) => {
        // обьект
        if (
          typeof element === "object" &&
          element !== null &&
          !Array.isArray(element)
        ) {
          return (
            <div key={uniqueKey || { index }} className="showAllElements_item">
              {Object.keys(element).map((key) =>
                key === "image" || key === "img" ? (
                  <div className="showAllElements_item_img_container" key={key}>
                    <img src={element[key]} alt="image" />
                  </div>
                ) : key === "name"? (<h3 key={key}>{`${key}: ${element[key]}`}</h3>) : (
                  <p key={key}>{`${key}: ${element[key]}`}</p>
                )
              )}
            </div>
          );
        }

        // массив
        if (Array.isArray(element)) {
          return (
            <div key={index} className="showAllElements_nestedArray">
              <ShowAllElements array={element} uniqueKey={uniqueKey} />
            </div>
          );
        }

        // простые елементы
        return (
          <div key={index} className="showAllElements_item">
            <p className="showAllElements_simpleItem">{element}</p>
          </div>
        );
      })}
    </div>
  );
}
