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
        handleExpRemove,
        handleSkillsChange,
        handleSkillEdit,
        handleSkillRemove
    } 

        = props;
    return (
        <div className="Editor-side">
            <h1>CV Generator</h1>
            <BasicInfoEdit data={BasicData} handleChange={handleInfoChange} />
            <EducationEditor EduData={EduData} onEditItem={handleEduEdit} onAddItem={handleEduChange} onRemoveItem={handleEduRemove}/>
            <ExperienceEditor ExpData = {ExpData} onAddItem={handleExpAdd} onEditItem={handleExpEdit} onRemoveItem={handleExpRemove} />
            <SkillsEditor SkillData={SkillData} onAddItem = {handleSkillsChange} onEditItem={handleSkillEdit} onRemoveItem={handleSkillRemove} />
        </div>
    )
}
