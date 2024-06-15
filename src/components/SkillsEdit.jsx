import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import ItemForm from './ItemForm';
export function SkillsEditor ({SkillData, onEditItem, onAddItem}) {
    const [skillObject, setSkillObject] = useState({
        skill:''
    });
    function handleSkillEdit (e) {
        const {name, value} = e.target
        setSkillObject({
            ...skillObject, [name]: value
        })
    }
    return (
        <>
        {SkillData.length > 0 && SkillData.map(data => (
            <ItemForm 
                key={data}
                item={data}
                onSave={onEditItem}
            />
        ))}

        <form className="form-container" onSubmit={(e) => {
            e.preventDefault();
            onAddItem({...skillObject, id: uuidv4()});
            setSkillObject({
                skill: ''
            })
        }}>
            <label className="form-label" htmlFor="skill">
                <span>Skills</span>
                <input type="text" id="skill" value={skillObject.skill} name="skill" onChange={handleSkillEdit}></input>
            </label>
            <button type="submit">Add skill</button>
        </form>
        </>
    )
}