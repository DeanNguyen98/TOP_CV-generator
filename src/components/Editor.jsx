import { BasicInfoEdit } from "./BasicInfo";
import { EducationEditor } from "./EducationEdit";
import { ExperienceEditor } from "./ExperienceEdit";
import { SkillsEditor } from "./SkillsEdit";

export default function MainEditor(props) {
    const {
        BasicData,
        EduData,
        ExpData,
        SkillsData,
        handleInfoChange,
        handleEduChange,
        handleEduEdit,
        handleExpAdd,
        handleExpEdit,
        handleSkillsChange} 

        = props;
    return (
        <div className="Editor-side">
            <BasicInfoEdit data={BasicData} handleChange={handleInfoChange} />
            <EducationEditor EduData={EduData} onEditItem={handleEduEdit} onAddItem={handleEduChange}/>
            <ExperienceEditor ExpData = {ExpData} onAddItem={handleExpAdd} onEditItem={handleExpEdit} />
            <SkillsEditor data={SkillsData} handleChange = {handleSkillsChange} />
        </div>
    )
}
