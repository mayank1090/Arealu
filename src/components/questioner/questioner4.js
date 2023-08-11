import React from 'react';
import './questioner4.css'; // You can define your styles in this CSS file
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuestion4Option,
} from "../../actions/questionnaireActions";
import { useNavigate } from 'react-router-dom';

const Questionnaire4 = () => {

    const navigate=useNavigate()
    const selectedOption = useSelector((state) => state.questionnaire.question4Option);
    const dispatch = useDispatch();
  
    const handleOptionClick = (option) => {
      dispatch(updateQuestion4Option(option));
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the selected option, like submitting it to a backend or processing it
    console.log('Selected option:', selectedOption);
  };

  return (
    < div className='container'>
    <div className="questionnaire-container ">
        <div className='navigator-bar d-flex'>
            <div className='lftarro' onClick={()=>{navigate("/questionnaire3")}}>
            <svg className='leftarrowoneicon' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
  <circle cx="22.5" cy="22.5" r="22.5" transform="matrix(-1 0 0 1 45 0)" fill="#9279FF"/>
  <path d="M29.0114 36.0457C28.3223 36.7348 27.2114 36.7348 26.5223 36.0457L14.8364 24.3598C14.2879 23.8113 14.2879 22.9254 14.8364 22.377L26.5223 10.691C27.2114 10.002 28.3223 10.002 29.0114 10.691C29.7004 11.3801 29.7004 12.491 29.0114 13.1801L18.8301 23.3754L29.0254 33.5707C29.7004 34.2457 29.7004 35.3707 29.0114 36.0457Z" fill="white"/>
</svg>
            </div>
            <div className='questionnumbercan'>
                <p className='questiontxtdesign'>questionnaire</p>
            </div>
            <div className='rgtarro' onClick={()=>{navigate("/loginotp")}}>
            <svg className='leftarrowoneicon' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
  <circle cx="22.5" cy="22.5" r="22.5" fill="#9279FF"/>
  <path d="M15.9886 36.0457C16.6777 36.7348 17.7886 36.7348 18.4777 36.0457L30.1636 24.3598C30.7121 23.8113 30.7121 22.9254 30.1636 22.377L18.4777 10.691C17.7886 10.002 16.6777 10.002 15.9886 10.691C15.2996 11.3801 15.2996 12.491 15.9886 13.1801L26.1699 23.3754L15.9746 33.5707C15.2996 34.2457 15.2996 35.3707 15.9886 36.0457Z" fill="white"/>
</svg>
            </div>
        </div>
      <h1 className="center-heading">Question No. 4</h1>
      <h2 className="center-subheading">Do you facing hair fall ?</h2>
      <form onSubmit={handleSubmit} className="options-container">
       <div className='options'>
       <div
              className={`option ${selectedOption === 'No' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('No')}
            >
              <p className='optionname'>No</p>
            </div>
            <div
              className={`option ${selectedOption === 'Mild' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Mild')}
            >
              <p className='optionname'>Mild</p>
            </div>
            <div
              className={`option ${selectedOption === 'Heavy' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('Heavy')}
            >
              <p className='optionname'>Heavy</p>
            </div>
            <div
              className={`option ${selectedOption === 'Extreme' ? 'selected' : ''}`}
              onClick={() =>{ handleOptionClick('Extreme')
            }}
            >
              <p className='optionname'>Extreme</p>
            </div>
       </div>

        
      </form>
      
    </div>
<div className='uppermarginprocess'>
<div className="processprnt">
<div className="progressbar primary">
  
<div class="progress text-center"> 
<div class="progress-bar" role="progressbar" style={{width: "53%"}} aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"></div>
<p className="current-percentage">53%</p>
</div>

</div>
</div>
</div>
</div>
  );
};

export default Questionnaire4;
