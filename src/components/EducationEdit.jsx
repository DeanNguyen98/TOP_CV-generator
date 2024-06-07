export function EducationEditor(props) {
    const {university, degree, startdate, enddate, location} = props;
    return (
        <>
            <form className="form-container">
                <label className="form-label" htmlFor="university">
                    <span>University/Organisation</span>
                    <input type="text" id="university" name="university"></input>
                </label>
                <label className="form-label" htmlFor="degree">
                    <span>Degree</span>
                    <input type="text" id="degree" name="degree"></input>
                </label>
                <label className="form-label" htmlFor="start-date">
                    <span>Start Date</span>
                    <input type="month" id="start-date" name="start-date"></input>
                </label>
                <label className="form-label" htmlFor="end-date">
                    <span>End Date</span>
                    <input type="month" id="end-date" name="end-date"></input>
                </label>
                <label className="form-label" htmlFor="location">
                    <span>Location</span>
                    <input type="text" id="location" name="location"></input>
                </label>
            </form>
        </>
    )
}