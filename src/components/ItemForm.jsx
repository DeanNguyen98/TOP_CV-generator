import { useState } from "react";

export default function ItemForm (props) {
    const {item, onSave} = props;
    const [isShow, setisShow] = useState(false);
    const [editableItem, seteditableItem] = useState({...item});
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        seteditableItem({
            ...editableItem, [name] : value
        });
    }
    return (
        <div className="itemForm">
            <h3>{item.Organisation}/{item.degree}</h3>
            <button onClick={()=> setisShow(true)}>Edit</button>
            {isShow && (
                <form className="form-container" onSubmit={(e) => {
                    e.preventDefault();
                    onSave(editableItem);
                    setisShow(false);
                }}>
                    <label htmlFor="Organisation">
                        <span>Organisation</span>
                        <input type="text" id="Organisation" name={item.Organisation} value={editableItem.Organisation} onChange={handleInputChange}></input>
                    </label>
                    <label htmlFor="degree">
                        <span>Degree</span>
                        <input type="text" id="degree" name="degree" value={editableItem.degree} onChange={handleInputChange}></input>
                    </label>
                    <label htmlFor="startDate">
                        <span>Start date</span>
                        <input type="month" id="startDate" name="startDate" value={editableItem.startDate} onChange={handleInputChange}></input>
                    </label>
                    <label htmlFor="endDate">
                        <span>End Date</span>
                        <input type="month" id="endDate" name="endDate" value={editableItem.endDate} onChange={handleInputChange}></input>
                    </label>
                    <label htmlFor="location">
                        <span>Location</span>
                        <input type="text" id="location" name="location" value={editableItem.location} onChange={handleInputChange}></input>
                    </label>
                    <button type="submit">Save changes</button>
                </form>
            )}
        </div>
    )
}