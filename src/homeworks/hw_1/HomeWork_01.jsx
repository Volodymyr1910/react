import myAuto from "../../assets/IMG_20240927_135748.jpg";
import style from "../hw_1/HomeWork_01.module.css";

export default function HomeWork_01() {
  return (
    <div className={style.HomeWork_01}>
      <div id={style.my_data}>
        <h2>Personal Data</h2>
        <p>Name: Volodymyr</p>
        <img className={style.HomeWork_01_img} src={myAuto} alt="my auto" />
        <p>Hobbies: reading, swimming, sauna</p>
      </div>
    </div>
  );
} //end HomeWork_01
