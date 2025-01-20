import "../button/Button.css"
function Button ({type,func,text}){

    return(
            <button className="Button" type={type} onClick={func}>{text}</button>
    );
}

export default Button