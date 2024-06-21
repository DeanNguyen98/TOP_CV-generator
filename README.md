<h1>CV Generator</h1>

This project is a CV Generator built using React. It allows users to input their personal information, education, work experience, and skills, and then generate a formatted CV. The CV can be previewed on the web page and downloaded as a PDF.

<h2>Keys concept learned</h2>
<ol>
    <li>Using keys for components:unique keys are generated when mapping over an array, specifically in ItemForm.jsx, where the keys for the object are mapped to generate individual HTML code for each item.</li>
    <li>Passing props between components: props are passed from BasicInfo.jsx, EducationEdit.jsx, Experience.jsx and SkillsEdit to Editor.jsx, then finally passed to App.jsx</li>
    <li>Setting the state structure: the state of each object is set in EducationEdit.jsx, Experience.jsx and SkillsEdit.jsx. The main logic to edit the object after having been added to their corresponding arrays are coded in App.jsx</li>
 </ol>

 <h2>Dependencies: </h2>

 -  React + Vite

 -  html2pdf

 -  Sass

 - Uuidv4



