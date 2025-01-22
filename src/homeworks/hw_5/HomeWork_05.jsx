import ShowAllElements from "../../components/showAllElements/ShowAllElements.jsx";
import { colorArray, fellowshipArray, fellowshipArray2 } from "../../lessons/lesson_05/fellowship";



export default function HomeWork_05() {
  return (
    <ShowAllElements array={fellowshipArray2} key={"id"}/>
  )
}
