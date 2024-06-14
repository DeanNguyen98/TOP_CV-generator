import { BasicInfoEdit } from "./BasicInfo";
import { EducationEditor } from "./EducationEdit";
import { ExperienceEditor } from "./ExperienceEdit";
import { SkillsEditor } from "./SkillsEdit";

export default function MainEditor(props) {
    const {
        BasicData,
        EduData,
        ExperienceData,
        SkillsData,
        handleInfoChange,
        handleEduChange,
        handleEduEdit,
        handleExperienceChange,
        handleSkillsChange} 

        = props;
    return (
        <div className="Editor-side">
            <BasicInfoEdit data={BasicData} handleChange={handleInfoChange} />
            <EducationEditor EduData={EduData} onEditItem={handleEduEdit} onAddItem={handleEduChange}/>
            <ExperienceEditor data={ExperienceData} handleChange = {handleExperienceChange} />
            <SkillsEditor data={SkillsData} handleChange = {handleSkillsChange} />
        </div>
    )
}
