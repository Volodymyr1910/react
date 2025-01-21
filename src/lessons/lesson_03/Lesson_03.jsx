
import UserCard from "../../components/userCard/UserCard.jsx";
import Button from "../../components/button/Button.jsx"
import ButtonDima from "../../components/buttonDima/ButtonDima.jsx"

function Lesson_03 (){

    const handleClickTest = ()=>{console.log("Click");
    }

    const handleSubmit = ()=>{alert("Submit!");
    }

    function handleClick(){
        return alert("Cool!");
    }
    function handleClick2(){
        return alert("You are handsome !");
    }

    return (
      
        <div>

            {/* <Button func={handleClick} text="Click me ! " type="button"/>
            <Button  func={handleClick2} text="One more Time ! " type="button"/> */}


            {/* <h2>React Props 👨‍👩‍👧‍👦</h2> */}
            {/* в данном случае передается 1 обьект props с разными ключами - name, age, hobby*/}
            {/* <UserCard name={"Peter"} age= {35} hobby={"diving"}/>
            <UserCard name={"Rosa"} age= {40} />
            <UserCard name={"Anton"}  age= {28} hobby={"snowboard"}/> */}
            <ButtonDima func={handleClickTest} text={"Click me !"} type={"button"}/>
            <ButtonDima func={handleSubmit} text={"Submit"} type={"submit"}/>
            
            {/* приклад передачі невеликої анонімної  фунцкції всередині тега виклику компонента без прописаного раніше обробника */}
            <ButtonDima func={()=>alert("😉 No Handle")} text={"No handle"} type={"submit"}/>
        </div>
    );
}

export default Lesson_03

