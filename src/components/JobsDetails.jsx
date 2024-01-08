import data from '/data.json';
import { useParams } from 'react-router-dom';
import { LuSun } from "react-icons/lu";
import { HiMoon } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function JobsDetails() {

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
                        <p>{job.postedAt} . {job.contract}</p>
                        <h2>{job.position}</h2>
                        <h4>{job.location}</h4>
                    </div>
                    <Link to={`/applypage/${job.id}`} key={job.id}>
                        <button>Apply Now</button>
                    </Link>
                </div>
                <div className="detailDescription">
                    <p>{job.description}</p>
                    <h3>Requirements</h3>
                    <p>{job.requirements.content}</p>
                    <ul>
                        {
                            job.requirements.items.map((x, index) => (
                                <li key={index}>{x}</li>
                            ))
                        }
                    </ul>
                    <h3>What You Will Do</h3>
                    <p>{job.role.content}</p>
                    <ol>
                        {
                            job.role.items.map((x, index) => (
                                <li key={index}>{x}</li>
                            ))
                        }
                    </ol>
                </div>
            </div>
            <div className="detailFooter">
                <div className="footer">
                    <div className="footerTitle">
                        <h2>{job.position}</h2>
                        <p>{job.company}</p>
                    </div>
                    <Link to={`/applypage/${job.id}`} key={job.id}>
                        <button>Apply Now</button>
                    </Link>
                </div>
            </div>
        </>
    )
}