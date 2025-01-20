import MyButton from "../myButton/MyButton";

function FunctionForButton (operation){
alert(`The answer is: ${operation}`);
return (
    <div>
        <MyButton functionForButton= {() => FunctionForButton(5 + 5)} text={"5 + 5"}/>
        <MyButton functionForButton= {()=> FunctionForButton(5 * 5)} text={"5 * 5"}/>
        <MyButton functionForButton= {()=> FunctionForButton(5 - 5)} text={"5 - 5"}/>
        </div>
)

}
export default FunctionForButton

