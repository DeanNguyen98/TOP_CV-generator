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
        handleSkillsChange = {handleAddSkillItem}
        handleSkillEdit = {editSkillItem}
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
