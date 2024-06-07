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
  return (
    <>
      <MainEditor
        BasicData={BasicInfo}
        EduData = {EduInfo}
        ExperienceData = {ExperienceInfo}
        SkillsData = {SkillsInfo}
        handleInfoChange = {handleBasicInfoChange}
      />
    </>
  )
}

export default App
