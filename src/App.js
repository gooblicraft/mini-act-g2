import { useState } from 'react';
import Course_Section_LRN_Phone from "./components/Course_Section_LRN_Phone";
import Name_StudentID_Email from "./components/Name_StudentID_Email";
import Age_Sex_Height_Weight_Nationality from "./components/Age_Sex_Height_Weight_Nationality";
import PlaceBirth_DateBirth_StudentType_Religion from "./components/PlaceBirth_DateBirth_StudentType_Religion";
import Header from "./components/Header";
import SummaryPage from "./components/SummaryPage";
import formBg from "./assets/dll_logo.png";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('BSE');
  const [section, setSection] = useState('1A');
  const [lrn, setLrn] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [age, setAge] = useState('17');
  const [sex, setSex] = useState(true);
  const [height, setHeight] = useState('60');
  const [weight, setWeight] = useState('20');
  const [nationality, setNationality] = useState('Filipino');
  const [placeBirth, setPlaceBirth] = useState('');
  const [dateBirth, setDateBirth] = useState('');
  const [studentType, setStudentType] = useState('Regular');
  const [religion, setReligion] = useState('');
  const [address, setAddress] = useState('');

  const formValues = {
    name,
    studentId,
    email,
    course,
    section,
    lrn,
    phoneNum,
    age,
    sex,
    height,
    weight,
    nationality,
    placeBirth,
    dateBirth,
    studentType,
    religion,
    address,
  };

  const isFormComplete = [
    name,
    studentId,
    email,
    lrn,
    phoneNum,
    age,
    height,
    weight,
    nationality,
    placeBirth,
    dateBirth,
    religion,
    address,
  ].every((value) => String(value).trim() !== '');

  const missingFields = {
    name: submitAttempted && String(name).trim() === '',
    studentId: submitAttempted && String(studentId).trim() === '',
    email: submitAttempted && String(email).trim() === '',
    lrn: submitAttempted && String(lrn).trim() === '',
    phoneNum: submitAttempted && String(phoneNum).trim() === '',
    age: submitAttempted && String(age).trim() === '',
    height: submitAttempted && String(height).trim() === '',
    weight: submitAttempted && String(weight).trim() === '',
    nationality: submitAttempted && String(nationality).trim() === '',
    placeBirth: submitAttempted && String(placeBirth).trim() === '',
    dateBirth: submitAttempted && String(dateBirth).trim() === '',
    religion: submitAttempted && String(religion).trim() === '',
    address: submitAttempted && String(address).trim() === '',
  };

  const handleSubmit = () => {
    setSubmitAttempted(true);

    if (!isFormComplete) {
      window.alert('Please fill out all required fields before submitting.');
      return;
    }

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <SummaryPage values={formValues} onBack={() => setIsSubmitted(false)} />;
  }

  return (
    <div
      className='min-h-screen bg-[length:400px_400px] bg-center bg-no-repeat pb-6 pt-0 flex flex-col items-center gap-6'
      style={{ backgroundImage: `url(${formBg})` }}
    >
      <Header text='Student Information Form' bgColor='#1e3a8a' textColor='#ffffff' />

      <div className='w-full px-6 flex flex-col items-center gap-6'>
        <Name_StudentID_Email
          name={name}
          setName={setName}
          studentId={studentId}
          setStudentId={setStudentId}
          email={email}
          setEmail={setEmail}
          missingFields={missingFields}
        ></Name_StudentID_Email>
        <Course_Section_LRN_Phone
          course={course}
          setCourse={setCourse}
          section={section}
          setSection={setSection}
          lrn={lrn}
          setLrn={setLrn}
          phoneNum={phoneNum}
          setPhoneNum={setPhoneNum}
          missingFields={missingFields}
        ></Course_Section_LRN_Phone>
        <Age_Sex_Height_Weight_Nationality
          age={age}
          setAge={setAge}
          sex={sex}
          setSex={setSex}
          height={height}
          setHeight={setHeight}
          weight={weight}
          setWeight={setWeight}
          nationality={nationality}
          setNationality={setNationality}
          missingFields={missingFields}
        ></Age_Sex_Height_Weight_Nationality>
        <PlaceBirth_DateBirth_StudentType_Religion
          placeBirth={placeBirth}
          setPlaceBirth={setPlaceBirth}
          dateBirth={dateBirth}
          setDateBirth={setDateBirth}
          studentType={studentType}
          setStudentType={setStudentType}
          religion={religion}
          setReligion={setReligion}
          address={address}
          setAddress={setAddress}
          missingFields={missingFields}
        ></PlaceBirth_DateBirth_StudentType_Religion>
        <div className='mt-8'>
          <button
            type='button'
            className='rounded-lg bg-blue-900 px-6 py-2 font-semibold text-white shadow-lg shadow-black/25 hover:bg-emerald-700'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
