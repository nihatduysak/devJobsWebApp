import { LuSun } from "react-icons/lu";
import { HiMoon } from "react-icons/hi";
import FilterBar from "./FilterBar";
import { Link } from "react-router-dom";

export default function Header({ handleForm }) {

    return (
        <div className="header">
            <img className='backgroundImg' src="/images/triangle.svg" />
            <div className="headerContent">
                <Link to={'/'}><h1>devjobs</h1></Link>
                <div className="lightDark">
                    <LuSun />
                    <div onClick={()=> document.body.classList.toggle("dark-theme")} className="themeBtn">
                        <img src="/images/ellipse-10.svg" alt="" />
                    </div>
                    <HiMoon className="mooooon" />
                </div>
            </div>
            <FilterBar handleForm={handleForm}/>
        </div>
    )
}