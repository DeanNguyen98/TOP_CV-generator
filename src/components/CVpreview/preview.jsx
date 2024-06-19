import "../../styles/preview.scss";

export default function CVpreview(props) {
    const {BasicInfo, Experience, Education, Skills} = props
    return (
        <div className="cv-preview">
            <div className="CV-BasicInfo">
                <h1>{BasicInfo.firstname} {BasicInfo.lastname}</h1>
                <div className="contact-details">
                    <div>
                        <span><i className="fa-solid fa-envelope"></i>{BasicInfo.email}</span>
                    </div>
                    <div>
                        <span><i className="fa-solid fa-phone"></i>{BasicInfo.phonenumber}</span>
                    </div>
                    <div>
                        <span><i className="fa-solid fa-location-dot"></i>{BasicInfo.address}</span>
                    </div>
                </div>
            </div>
            <div className="CV-about section">
                <h3>About Me</h3>
                <div className="about-ctn ctn ">{BasicInfo.about}</div>
            </div>
            <div className="CV-EducationInfo section">
                {Education.length > 0 && 
                    <h3>Education</h3>
                }
                <div className="education-ctn ctn ">
                    {Education.map((item) => (
                        <div key={item.id} className="eduItem-ctn item-ctn">
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
            <div className="CV-ExperienceInfo section">
                {Experience.length > 0  && <h3>Work Experience</h3> }
                <div className="experience-ctn ctn">
                    {Experience.map((item) => (
                        <div key={item.id} className="expItem-ctn item-ctn">
                            <div className="expItem-left">
                                <p>{item.startDate} <span>-</span>{item.endDate}</p>
                                <p>{item.Location}</p>
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
            <div className="CV-SkillInfo section">
                {Skills.length > 0 &&  <h3>Skills</h3>}
                <div>
                    <ul className="skills-ctn ctn">
                    {Skills.map((item) => (
                        <li key={item.id}>{item.skill}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}