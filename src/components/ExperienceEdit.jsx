import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export function ExperienceEditor ({ExpData, onAddItem}) {
    const [ExpObject, setExpObject] = useState({
        company: '',
        JobTitle: '',
        Expstart: '',
        ExpEnd: '',
        ExpDescription: ''
    })

    function handleAddExpObject (e) {
        const { name, value } = e.target;
        setExpObject({
            ...ExpObject, [name]: value
        })
    }
    return (
        <>
            <form className="form-container" onSubmit={(e) => {
                e.preventDefault();
                onAddItem({...ExpObject, id: uuidv4()});
                setExpObject({
                    company: '',
                    JobTitle: '',
                    Expstart: '',
                    ExpEnd: '',
                    ExpDescription: ''
                })
            }}>
                <label className="form-label" htmlFor="company">
                    <span>Company name</span>
                    <input type="text" id="company" name="company" onChange={handleAddExpObject}></input>
                </label>
                <label className="form-label" htmlFor="JobTitle">
                    <span>University/Organisation</span>
                    <input type="text" id="jobTitle" name="jobTitle" onChange={handleAddExpObject}></input>
                </label>
                <label className="form-label" htmlFor="Expstart">
                    <span>Start date</span>
                    <input type="month" id="Expstart" name="Expstart" onChange={handleAddExpObject}></input>
                </label>
                <label className="form-label" htmlFor="ExpEnd">
                    <span>End date</span>
                    <input type="month" id="ExpEnd" name="ExpEnd" onChange={handleAddExpObject}></input>
                </label>
                <label className="form-label" htmlFor="ExpDescription">
                    <span>Job description</span>
                    <textarea type="text" id="ExpDescription" name="ExpDescription" onChange={handleAddExpObject}></textarea>
                </label>
                <button type="submit">Add Experience</button>
            </form>
        </>
    )
}