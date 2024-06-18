import { BasicInfoEdit } from "./BasicInfo";
import { EducationEditor } from "./EducationEdit";
import { ExperienceEditor } from "./ExperienceEdit";
import { SkillsEditor } from "./SkillsEdit";
import '../styles/editor.scss'

export default function MainEditor(props) {
    const {
        BasicData,
        EduData,
        ExpData,
        SkillData,
        handleInfoChange,
        handleEduChange,
        handleEduRemove,
        handleEduEdit,
        handleExpAdd,
        handleExpEdit,
        handleSkillsChange,
        handleSkillEdit
    } 

        = props;
    return (
        <div className="Editor-side">
            <BasicInfoEdit data={BasicData} handleChange={handleInfoChange} />
            <EducationEditor EduData={EduData} onEditItem={handleEduEdit} onAddItem={handleEduChange} onRemoveItem={handleEduRemove}/>
            <ExperienceEditor ExpData = {ExpData} onAddItem={handleExpAdd} onEditItem={handleExpEdit} />
            <SkillsEditor SkillData={SkillData} onAddItem = {handleSkillsChange} onEditItem={handleSkillEdit} />
        </div>
    )
}
