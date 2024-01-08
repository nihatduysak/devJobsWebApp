import { Link } from 'react-router-dom';
import data from '/data.json';

export default function Jobs({ joblimit, setJobLimit, filter, location, fullTime }) {

    let filteredData = data.filter((job) => (
        job.position.toLowerCase().includes(filter.toLowerCase()) && 
        job.location.toLowerCase().includes(location.toLowerCase()) && 
        job.contract.toLowerCase().includes(fullTime.toLowerCase())

    ))

    return (
        <>
            <div className="jobAdvertisement">
                {
                    filteredData.slice(0, joblimit).map((job) => (
                        <Link to={`/jobs/${job.id}`} key={job.id}>
                            <div className="advertisement">
                                <div className="logo" style={{backgroundColor: job.logoBackground}}>
                                    <img src={job.logo} />
                                </div>
                                <p>{job.postedAt} . {job.contract}</p>
                                <h2>{job.position}</h2>   
                                <p>{job.company}</p>
                                <h4>{job.location}</h4>
                            </div>
                        </Link>
                    ))
                }
            </div>

            { joblimit >= filteredData.length ? '' :
                <button onClick={e => setJobLimit(joblimit + 3)} className='loadMoreBtn'><p>Load More</p></button>
            }
        </>
    )
}