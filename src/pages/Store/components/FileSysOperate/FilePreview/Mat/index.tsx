import React, {useState} from 'react';
import Home from "./Home";
import PSD from "./PSD";
import RED from "./RED";

// @ts-ignore
const Mat: React.FC<any> = (share: IProps) => {
  const [isState, setIsState] = useState("Home");

  const page = () => {
    switch (isState) {
      case "Home":
        return <Home REDOnClick={REDOnClick} PSDOnClick={PSDOnClick}/>
      case "PSD":
        return <PSD share={share}/>
      case "RED":
        return <RED share={share}/>
      default:
        return <div></div>
    }
  }
  // @ts-ignore
  const REDOnClick = (e) => {
    console.log(e, "1");
    setIsState("RED")

  }
  // @ts-ignore
  const PSDOnClick = (e) => {
    console.log(e, "2");
    setIsState("PSD")
  }
  return (<>
    {page()}
  </>)
}
export default Mat
