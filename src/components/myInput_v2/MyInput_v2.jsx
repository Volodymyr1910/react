import "./MyInput_v2.css"

export default function MyInput_v2({name,type,placeholder, label}) {
  return (
    <>
    <label>{label}</label>
    <input className="MyInput_v2" name={name} type={type} placeholder={placeholder}/>
   </>
  )
}
