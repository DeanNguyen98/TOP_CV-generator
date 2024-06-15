import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemForm from './ItemForm';

export function ExperienceEditor ({ExpData, onAddItem, onEditItem}) {
    const [ExpObject, setExpObject] = useState({
        Company: '',
        Title: '',
        startDate: '',
        endDate: '',
        Description: ''
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
                    Company: '',
                    Title: '',
                    startDate: '',
                    endDate: '',
                    Description: ''
                })
            }}>
                <label className="form-label" htmlFor="Company">
                    <span>Company name</span>
                    <input type="text" id="Company" name="Company" value={ExpObject.Company} onChange={handleAddExpObject}></input>
                </label>
                <label className="form-label" htmlFor="Title">
                    <span>Title</span>
                    <input type="text" id="Title" name="Title" value={ExpObject.Title} onChange={handleAddExpObject}></input>
                </label>
                <label className="form-label" htmlFor="startDate">
                    <span>Start date</span>
                    <input type="month" id="startDate" name="startDate" value={ExpObject.startDate} onChange={handleAddExpObject}></input>
                </label>
                <label className="form-label" htmlFor="endDate">
                    <span>End date</span>
                    <input type="month" id="endDate" name="endDate" value={ExpObject.endDate} onChange={handleAddExpObject}></input>
                </label>
                <label className="form-label" htmlFor="Description">
                    <span>Job description</span>
                    <textarea type="text" id="Description" name="Description" value={ExpObject.Description} onChange={handleAddExpObject}></textarea>
                </label>
                <button type="submit">Add Experience</button>
            </form>
        </>
    )
}