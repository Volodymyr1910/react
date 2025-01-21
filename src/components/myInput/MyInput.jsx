function MyInput({ name, type, placeholder, label, require }) {
  return (
    <div>
      <div>
        <label >{label}</label>
      </div>
      <div>
        {require === true ? (<input className="input" name={name} type={type} placeholder={placeholder} required/>) : (<input className="input" name={name} type={type} placeholder={placeholder}/>)} 
      </div>
    </div>
  );
}

export default MyInput;
