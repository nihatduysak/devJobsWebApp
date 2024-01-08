import data from '/data.json';
import { useParams } from 'react-router-dom';
import { LuSun } from "react-icons/lu";
import { HiMoon } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function ApplyPage() {

    const { id } = useParams()
    const job = data.find(job => job.id === Number(id))

    return (
        <>
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
                <div className="detailHeader">
                    <div className="leftside">
                        <div className="logo" style={{backgroundColor: job.logoBackground}}>
                            <img src={job.logo} />
                        </div>
                        <div className="detailHeaderTitle">
                            <h1>{job.company}</h1>
                            <p>website.com</p>
                        </div>
                    </div>
                    <button>Company Site</button>
                </div>
            </div>
            <div className="details">
                <div className="detailTitle">
                    <div>
                        <p>{job.contract}</p>
                        <h2>{job.position}</h2>
                        <h4>{job.location}</h4>
                    </div>
                </div>
                <div className="gratzMsg">
                    <h3>Your application has been received for <span>{job.company}</span>'s 
                    <br /> <span>{job.position}</span> job vacancy in <span>{job.location}</span> location.</h3>
                    <br />
                    <h1><u>Congratulations.</u> 🥳</h1>
                </div>
            </div>
        </>
    )
}