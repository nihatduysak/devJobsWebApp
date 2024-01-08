import { useState } from 'react'
import Header from './components/Header'
import Jobs from './components/Jobs'

function App() {
    const [jobLimit, setJobLimit] = useState(9)
    const [filter, setFilter] = useState('')
    const [location, setLocation] = useState('')
    const [fullTime, setFullTime] = useState('')

    function handleForm(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formObj = Object.fromEntries(formData)
        setFilter(formObj.filter)
        setLocation(formObj.filterLocation)
        if(formObj.time === 'on') {
            setFullTime('Full Time')
        } else {
            setFullTime('')
        }
    }

    return (
        <>
            <div className="container">
                <Header handleForm={handleForm} />
                <Jobs fullTime={fullTime} location={location} filter={filter} joblimit={jobLimit} setJobLimit={setJobLimit} />
            </div>
        </>
    )
}

export default App
