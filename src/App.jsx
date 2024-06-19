import { useState } from 'react'
import './styles/App.css'
import MainEditor from './components/Editor';
import CVpreview from './components/CVpreview/preview';

function App() {
  const [BasicInfo, setBasicInfo] = useState({
    firstname: '',
    lastname: '',
    title:'',
    phonenumber: '',
    email:'',
    address:''
  })
  const [EduInfo, setEduInfo] = useState([]);
  const [ExperienceInfo, setExperienceInfo] = useState([]);
  const [SkillsInfo, setSkillsInfo] = useState([]);
  
  function handleBasicInfoChange (e) {
    const {name, value} = e.target;
    setBasicInfo({
      ...BasicInfo, [name]: value
    })
  }

  //Manipulate EduInfo functions

  function handleAddEduItem(EduObject) {
    setEduInfo(prevEduInfo => [
      ...prevEduInfo, EduObject
    ])
  }

  function EditEduItem(updatedItem) {
    setEduInfo((prevEduInfo) => {
      return prevEduInfo.map(item => item.id === updatedItem.id ? updatedItem : item  )
    })
  }

  function removeEduItem(updatedItem) {
    setEduInfo((prevEduInfo) => {
      return prevEduInfo.filter(item => item.id !== updatedItem.id)
    })
  }

  //

  //manipulate Experience functions

  function handleAddExpItem (ExpObject) {
    setExperienceInfo(prevExpInfo => [
      ...prevExpInfo, ExpObject
    ])
  }

  function editExpItem(updatedItem) {
    setExperienceInfo((prevExpInfo) => {
      return prevExpInfo.map(item => item.id === updatedItem.id ? updatedItem : item)
    })
  }

  function removeExpItem(updatedItem) {
    setExperienceInfo((prevExpInfo) => {
      return prevExpInfo.filter(item => item.id !== updatedItem.id)
    })
  }

  //

  //manipulate Skill functions
  function handleAddSkillItem(skillObject) {
    setSkillsInfo(prevSkillInfo => [
      ...prevSkillInfo, skillObject
    ])
  }

  function editSkillItem(updatedItem) {
    setSkillsInfo((prevSkillInfo) => {
      return prevSkillInfo.map(item => item.id === updatedItem.id ? updatedItem : item)
    })
  }

  function removeSkillItem(updatedItem) {
    setSkillsInfo((prevSkillInfo) => {
      return prevSkillInfo.filter(item => item.id !== updatedItem.id)
    })
  }

  //

  return (
      <div className='App'>
        {console.log(EduInfo)}
      <MainEditor
        BasicData={BasicInfo}
        EduData = {EduInfo}
        ExpData = {ExperienceInfo}
        SkillData = {SkillsInfo}
        handleInfoChange = {handleBasicInfoChange}
        handleEduEdit = {EditEduItem}
        handleEduRemove = {removeEduItem}
        handleEduChange = {handleAddEduItem}
        handleExpAdd = {handleAddExpItem}
        handleExpEdit = {editExpItem}
        handleExpRemove = {removeExpItem}
        handleSkillsChange = {handleAddSkillItem}
        handleSkillEdit = {editSkillItem}
        handleSkillRemove = {removeSkillItem}
      />
      <CVpreview
        BasicInfo={BasicInfo}
        Experience={ExperienceInfo}
        Education={EduInfo}
        Skills={SkillsInfo}
      />
      </div>
  )
}

export default App
