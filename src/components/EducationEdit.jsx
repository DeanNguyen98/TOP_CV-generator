import { useState } from "react";
export function EducationEditor({onAddItem}) {
    const [EduObject, setEduObject] = useState({
        organisation: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: ''
    })
    function handleBasicEduChange (e) {
        const {name, value} = e.target;
        setEduObject({
          ...EduObject, [name]: value
        })
      }
    return (
        <>
            <form className="form-container" onSubmit={(e) => {
                e.preventDefault();
                onAddItem(EduObject);
                setEduObject({
                    organisation: '',
                    degree: '',
                    startDate: '',
                    endDate: '',
                    location: ''
                });
            }}>
                <label className="form-label" htmlFor="organisation">
                    <span>University/Organisation</span>
                    <input type="text" value={EduObject.organisation} onChange={handleBasicEduChange} id="organisation" name="organisation"></input>
                </label>
                <label className="form-label" htmlFor="degree">
                    <span>Degree</span>
                    <input type="text" id="degree" value={EduObject.degree} onChange={handleBasicEduChange} name="degree"></input>
                </label>
                <label className="form-label" htmlFor="startDate">
                    <span>Start Date</span>
                    <input type="month" id="startDate" value={EduObject.startDate} onChange={handleBasicEduChange}  name="startDate"></input>
                </label>
                <label className="form-label" htmlFor="endDate">
                    <span>End Date</span>
                    <input type="month" id="endDate" value={EduObject.endDate} onChange={handleBasicEduChange} name="endDate"></input>
                </label>
                <label className="form-label" htmlFor="location">
                    <span>Location</span>
                    <input type="text" id="location" value={EduObject.location} onChange={handleBasicEduChange} name="location"></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}