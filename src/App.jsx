import { useState } from 'react'
import './App.css'
import MainEditor from './components/Editor';

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

  return (
    <>
      {console.log(EduInfo)}
      <MainEditor
        BasicData={BasicInfo}
        EduData = {EduInfo}
        ExperienceData = {ExperienceInfo}
        SkillsData = {SkillsInfo}
        handleInfoChange = {handleBasicInfoChange}
        handleEduEdit = {EditEduItem}
        handleEduChange = {handleAddEduItem}
      />
    </>
  )
}

export default App
