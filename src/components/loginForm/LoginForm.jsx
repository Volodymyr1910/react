import Button from "../button/Button";
import MyInput from "../myInput/MyInput";
import ".//LoginForm.css"

function LoginForm (){

    function handleSubmit(event) {
        event.preventDefault();
        alert("Cool!");
      }

return(
   
    <form className="form" onSubmit={handleSubmit} action="">
    <MyInput name={"login"} type={"text"} placeholder={"login"} label={"Login: "} require={true}/>
<MyInput name={"email"} type={"email"} placeholder={"email"} label={"Your email: "}/>
<MyInput name={"password"} type={"password"} placeholder={"password"} label={"Password: "}/>

<Button className="submitButton" text="Finish" type="submit"/>
</form>

);
}
export default LoginForm