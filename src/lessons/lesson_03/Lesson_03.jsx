
import UserCard from "../../components/userCard/UserCard.jsx";
import Button from "../../components/button/Button.jsx"

function Lesson_03 (){
    function handleClick(){
        return alert("Cool!");
    }
    function handleClick2(){
        return alert("You are handsome !");
    }

    return (
      
        <div>

            <Button func={handleClick} text="Click me ! " type="button"/>
            <Button  func={handleClick2} text="One more Time ! " type="button"/>


            {/* <h2>React Props 👨‍👩‍👧‍👦</h2> */}
            {/* в данном случае передается 1 обьект props с разными ключами - name, age, hobby*/}
            {/* <UserCard name={"Peter"} age= {35} hobby={"diving"}/>
            <UserCard name={"Rosa"} age= {40} />
            <UserCard name={"Anton"}  age= {28} hobby={"snowboard"}/> */}
        </div>
    );
}

export default Lesson_03

