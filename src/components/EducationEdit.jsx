import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ItemForm from "./ItemForm";

export function EducationEditor({onAddItem, EduData, onEditItem}) {
    const [EduObject, setEduObject] = useState({
        Organisation: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
    })
    function handleAddEduObject (e) {
        const {name, value} = e.target;
        setEduObject({
          ...EduObject, [name]: value
        })
      }
    return (
        <>
            {EduData.length > 0 && EduData.map((data) => {
                return <ItemForm
                    key={data.id}
                    item={data}
                    onSave={onEditItem}
                />
            })}
            <form className="form-container" onSubmit={(e) => {
                e.preventDefault();
                onAddItem({...EduObject, id: uuidv4()});
                setEduObject({
                    Organisation: '',
                    degree: '',
                    startDate: '',
                    endDate: '',
                    location: ''
                });
            }}>
                <label className="form-label" htmlFor="Organisation">
                    <span>Organisation</span>
                    <input type="text" value={EduObject.Organisation} onChange={handleAddEduObject} id="Organisation" name="Organisation"></input>
                </label>
                <label className="form-label" htmlFor="degree">
                    <span>Degree</span>
                    <input type="text" id="degree" value={EduObject.degree} onChange={handleAddEduObject} name="degree"></input>
                </label>
                <label className="form-label" htmlFor="startDate">
                    <span>Start Date</span>
                    <input type="month" id="startDate" value={EduObject.startDate} onChange={handleAddEduObject}  name="startDate"></input>
                </label>
                <label className="form-label" htmlFor="endDate">
                    <span>End Date</span>
                    <input type="month" id="endDate" value={EduObject.endDate} onChange={handleAddEduObject} name="endDate"></input>
                </label>
                <label className="form-label" htmlFor="location">
                    <span>Location</span>
                    <input type="text" id="location" value={EduObject.location} onChange={handleAddEduObject} name="location"></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}