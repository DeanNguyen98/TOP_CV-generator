export function ExperienceEditor () {
    return (
        <>
            <form className="form-container">
                <label className="form-label" htmlFor="company">
                    <span>Company name</span>
                    <input type="text" id="university" name="university"></input>
                </label>
                <label className="form-label" htmlFor="Job-title">
                    <span>University/Organisation</span>
                    <input type="text" id="job-title" name="job-title"></input>
                </label>
                <label className="form-label" htmlFor="Expstart-date">
                    <span>Start date</span>
                    <input type="month" id="Expstart-date" name="Expstart-date"></input>
                </label>
                <label className="form-label" htmlFor="Expend-date">
                    <span>End date</span>
                    <input type="month" id="Expend-date" name="Expend-date"></input>
                </label>
                <label className="form-label" htmlFor="Exp-description">
                    <span>Job description</span>
                    <textarea type="text" id="Exp-description" name="Exp-description"></textarea>
                </label>
            </form>
        </>
    )
}