import Course_Section_LRN_Phone from "./components/Course_Section_LRN_Phone";
import Name_StudentID_Email from "./components/Name_StudentID_Email";
import Age_Sex_Height_Weight_Nationality from "./components/Age_Sex_Height_Weight_Nationality";
import PlaceBirth_DateBirth_StudentType_Religion from "./components/PlaceBirth_DateBirth_StudentType_Religion";
function App() {
  return (
    <div className='min-h-screen bg-slate-100 p-6'>
      <Name_StudentID_Email></Name_StudentID_Email>
      <Course_Section_LRN_Phone></Course_Section_LRN_Phone>
      <Age_Sex_Height_Weight_Nationality></Age_Sex_Height_Weight_Nationality>
      <PlaceBirth_DateBirth_StudentType_Religion></PlaceBirth_DateBirth_StudentType_Religion>
    </div>
    
  )
}

export default App;
