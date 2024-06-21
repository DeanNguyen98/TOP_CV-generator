import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemForm from './ItemForm';

export function ExperienceEditor ({ExpData, onAddItem, onEditItem, onRemoveItem}) {
    const [ExpObject, setExpObject] = useState({
        Company: '',
        Title: '',
        startDate: '',
        endDate: '',
        Location: '',
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
            <h2 className="form-header">Experience</h2>
            {ExpData.length > 0 && ExpData.map(data => (
                <ItemForm 
                    key={data.id}
                    item={data}
                    onSave={onEditItem}
                    onRemove={onRemoveItem}
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
                    Location: '',
                    Description: ''
                })
            }}>
                <label className="form-label" htmlFor="Company">
                    <span>Company name</span>
                    <input type="text" id="Company" name="Company" value={ExpObject.Company} onChange={handleAddExpObject} placeholder="Company's name" required></input>
                </label>
                <label className="form-label" htmlFor="Title">
                    <span>Title</span>
                    <input type="text" id="Title" name="Title" value={ExpObject.Title} onChange={handleAddExpObject} placeholder="Accountant" required></input>
                </label>
                <label className="form-label" htmlFor="startDate">
                    <span>Start date</span>
                    <input type="month" id="startDate" name="startDate" value={ExpObject.startDate} onChange={handleAddExpObject}></input>
                </label>
                <label className="form-label" htmlFor="endDate">
                    <span>End date</span>
                    <input type="month" id="endDate" name="endDate" value={ExpObject.endDate} onChange={handleAddExpObject}></input>
                </label>
                <label className="form-label" htmlFor="Location">
                    <span>Location</span>
                    <input type="text" id="Location" name="Location" value={ExpObject.Location} onChange={handleAddExpObject} placeholder="Sydney NSW"></input>
                </label>
                <label className="form-label" htmlFor="Description">
                    <span>Job description</span>
                    <textarea type="text" id="Description" name="Description" value={ExpObject.Description} onChange={handleAddExpObject} placeholder="Write a short description about your responsibilities at work"></textarea>
                </label>
                <button type="submit">Add Experience</button>
            </form>
        </>
    )
}