import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemForm from './ItemForm';

export function ExperienceEditor ({ExpData, onAddItem, onEditItem}) {
    const [ExpObject, setExpObject] = useState({
        company: '',
        Title: '',
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
            {ExpData.length > 0 && ExpData.map(data => (
                <ItemForm 
                    key={data.id}
                    item={data}
                    onSave={onEditItem}
                />
            ))}
            <form className="form-container" onSubmit={(e) => {
                e.preventDefault();
                onAddItem({...ExpObject, id: uuidv4()});
                setExpObject({
                    company: '',
                    Title: '',
                    startDate: '',
                    endDate: '',
                    ExpDescription: ''
                })
            }}>
                <label className="form-label" htmlFor="company">
                    <span>Company name</span>
                    <input type="text" id="company" name="company" onChange={handleAddExpObject}></input>
                </label>
                <label className="form-label" htmlFor="Title">
                    <span>Title</span>
                    <input type="text" id="jobTitle" name="Title" onChange={handleAddExpObject}></input>
                </label>
                <label className="form-label" htmlFor="startDate">
                    <span>Start date</span>
                    <input type="month" id="startDate" name="startDate" onChange={handleAddExpObject}></input>
                </label>
                <label className="form-label" htmlFor="endDate">
                    <span>End date</span>
                    <input type="month" id="endDate" name="endDate" onChange={handleAddExpObject}></input>
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