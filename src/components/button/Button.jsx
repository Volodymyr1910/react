import "../button/Button.css"
function Button ({className, type,func,text}){

    return(
            <button className={className} type={type} onClick={func}>{text}</button>
    );
}

export default Button