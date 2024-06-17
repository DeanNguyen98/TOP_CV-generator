export default function CVpreview(props) {
    const {BasicInfo, Experience, Education, Skills} = props
    return (
        <>
            <div className="CV-BasicInfo">
                <h3>{BasicInfo.firstname} {BasicInfo.lastname}</h3>
                <div className="contact-details">
                    <div>
                        <span>{BasicInfo.email}</span>
                    </div>
                    <div>
                        <span>{BasicInfo.phonenumber}</span>
                    </div>
                    <div>
                        <span>{BasicInfo.address}</span>
                    </div>
                </div>
            </div>
            <div className="CV-EducationInfo">
                {Education.length > 0 && 
                    <h3>Education</h3>
                }
                <div className="education-ctn">
                    {Education.map((item) => (
                        <div key={item.id} className="eduItem-ctn">
                            <div className="eduItem-left">
                                <p>{item.startDate} <span>-</span>{item.endDate}</p>
                                <p>{item.location}</p>
                            </div>
                            <div className="eduItem-right">
                                <p>{item.Organisation}</p>
                                <p>{item.degree}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="CV-ExperienceInfo">
                {Experience.length > 0  && <h3>Work Experience</h3> }
                <div className="experience-ctn">
                    {Experience.map((item) => (
                        <div key={item.id}>
                            <div className="expItem-left">
                                <p>{item.startDate} <span>-</span>{item.endDate}</p>
                                <p>{item.location}</p>
                            </div>
                            <div className="expItem-right">
                                <p>{item.Company}</p>
                                <p>{item.Title}</p>
                                <p>{item.Description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="CV-SkillInfo">
                {Skills.length > 0 &&  <h3>Skills</h3>}
                <div className="skills-ctn">
                    {Skills.map((item) => (
                        <p key={item.id}>{item.skill}</p>
                    ))}
                </div>
            </div>
        </>
    )
}