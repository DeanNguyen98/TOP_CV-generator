import { useState } from "react";
import "../styles/ItemForm.scss"
export default function ItemForm (props) {
    const {item, onSave, onRemove} = props;
    const [isShow, setisShow] = useState(false);
    const [editableItem, seteditableItem] = useState({...item});
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        seteditableItem({
            ...editableItem, [name] : value
        });
    }

    //asign a key object to split the name of each item in the item object into an array 
    //for easy reference
    const objectkeys = Object.keys(item);
    return (
        <div className="itemForm">
            <div className="form-banner">
                <h3>{item.length > 2 ? item[objectkeys[0]]/item[objectkeys[1]] : item[objectkeys[0]]}</h3>
                <i className="fa-solid fa-pen edit-btn" onClick={()=> setisShow(true)}></i>
            </div>
            {isShow && (
                <form className="form-container form-expand" onSubmit={(e) => {
                    e.preventDefault();
                    onSave(editableItem);
                    setisShow(false);
                }}>
                       {objectkeys.map((key) => {
                        if (key === "type" || key === "id") return null;
                        let label;
                        if (key === "startDate") {
                            label = "Start Date";
                        } else if (key === "endDate") {
                            label = "End Date"
                        } else {
                            label = key;
                        }
                        if (key === "Description") return (
                            <label className="form-label" key={key} htmlFor={key}>
                            <span>{label}</span>
                            <textarea
                                type={key.includes('Date') ? "month" : "text"}
                                id={key}
                                name={key}
                                value={editableItem[key]}
                                onChange={handleInputChange}
                            />
                        </label>
                        )
                        return (
                            <label className="form-label" key={key} htmlFor={key}>
                                <span>{label}</span>
                                <input
                                    type={key.includes('Date') ? "month" : "text"}
                                    id={key}
                                    name={key}
                                    value={editableItem[key]}
                                    onChange={handleInputChange}
                                />
                            </label>
                        );
                       })}
                    <button type="submit">Save changes</button>
                    <button onClick={() => {
                        onRemove(editableItem)
                    }}>Remove</button>
                </form>
            )}
        </div>
    )
}