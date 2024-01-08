import { BiSearchAlt2 } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

export default function FilterBar({ handleForm }) {

    return (

        <form onSubmit={handleForm}>
            <div className="filter">
                <BiSearchAlt2 className="searchIcon" />
                <input name="filter" type="text" placeholder='Filter by title, companies, expertise...'/>
            </div>
            <div className="filter">
                <IoLocationSharp className="locationIcon" />
                <input name="filterLocation" type="text" placeholder='Filter by location...'/>
            </div>
            <div className="checkbox">
                <input name="time" type="checkbox" /> <p>Full Time Only</p>
            </div>
            <button type="submit">Search</button>
        </form>

    )
}