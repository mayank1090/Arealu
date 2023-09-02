import React from 'react';
import './questioner3.css'; // You can define your styles in this CSS file
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateQuestionOption } from "../../actions/questionnaireActions";
import { useNavigate } from 'react-router-dom';
import { updateprogressvalue } from "../../actions/updateprogress";

const Questionnaire3 = () => {
  let questionumber=3

  const navigate=useNavigate()
  const[currentselected,setselected]=useState()
  const selectedOption = useSelector((state) => state.questionnaire.questions);
  const progressValue = useSelector((state) => state.progress.progressValue);
  // const questiondata= useSelector((state)=> state.questiondataapi.questionnaireData)

  const questiondata=[
    
    {
      text: "Your Major Skin Issues ?",
      options: [
        {
          text: "Redness"
        },
        {
          text: "Darkspots"
        },
        {
          text: "Pimples"
        },
        {
          text: "Aging"
        },
        {
          text: "Acne"
        }
      ]
    },
    {
      text: "How Your Skin Feel ?",
      options: [
        {
          text: "Dry"
        },
        {
          text: "Normal"
        },
        {
          text: "Oily"
        },
        {
          text: "Itchy"
        }
      ]
    },
    {
      text: "Your Have Dandruff Problems ?",
      options: [
        {
          text: "No"
        },
        {
          text: "Mild"
        },
        {
          text: "Heavy"
        },
        {
          text: "Extreme"
        }
      ]
    },
    {
      text: "Do You Facing Hair Fall ?",
      options: [
        {
          text: "No"
        },
        {
          text: "Mild"
        },
        {
          text: "Heavy"
        },
        {
          text: "Extreme"
        }
      ]
    }
  ]
  const dispatch = useDispatch();                                 

  const handleOptionClick = (optionindex) => {
    setselected(optionindex)
    dispatch(updateQuestionOption(3, optionindex+1));
    dispatch(updateprogressvalue(85));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Do something with the selected option, like submitting it to a backend or processing it

  };

  

  return (
    <div className="container">
      <div className="questionnaire-container ">
        <div className="navigator-bar d-flex">
          <div className="lftarro" onClick={()=>{navigate("/questionnaire2")
         dispatch(updateprogressvalue(50));
        }}>
            <svg
              className="leftarrowoneicon"
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <circle
                cx="22.5"
                cy="22.5"
                r="22.5"
                transform="matrix(-1 0 0 1 45 0)"
                fill="#9279FF"
              />
              <path
                d="M29.0114 36.0457C28.3223 36.7348 27.2114 36.7348 26.5223 36.0457L14.8364 24.3598C14.2879 23.8113 14.2879 22.9254 14.8364 22.377L26.5223 10.691C27.2114 10.002 28.3223 10.002 29.0114 10.691C29.7004 11.3801 29.7004 12.491 29.0114 13.1801L18.8301 23.3754L29.0254 33.5707C29.7004 34.2457 29.7004 35.3707 29.0114 36.0457Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="questionnumbercan">
            <p className="questiontxtdesign">questionnaire</p>
          </div>
          <div className="rgtarro" onClick={()=>{navigate("/questionnaire4")
        
        }}>
            <svg
              className="leftarrowoneicon"
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <circle cx="22.5" cy="22.5" r="22.5" fill="#9279FF" />
              <path
                d="M15.9886 36.0457C16.6777 36.7348 17.7886 36.7348 18.4777 36.0457L30.1636 24.3598C30.7121 23.8113 30.7121 22.9254 30.1636 22.377L18.4777 10.691C17.7886 10.002 16.6777 10.002 15.9886 10.691C15.2996 11.3801 15.2996 12.491 15.9886 13.1801L26.1699 23.3754L15.9746 33.5707C15.2996 34.2457 15.2996 35.3707 15.9886 36.0457Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <h1 className="center-heading">Question No. {questionumber}</h1>
        <h2 className="center-subheading">{questiondata[2].text}</h2>
        <form onSubmit={handleSubmit} className="options-container">
          <div className="options">
            {questiondata[2].options.map((option,index)=>{
              return(
                <div
              className={`option ${
                currentselected===index ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(index)}
            >
              <p className="optionname">{option.text}</p>
            </div>
              )
            })}
          </div>
        </form>
      </div>
      <div className="uppermarginprocess">
        <div className="processprnt">
          <div className="progressbar primary">
            <div class="progress text-center">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: `${progressValue}%` }}
                aria-valuenow={progressValue}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <p className="current-percentage">{progressValue}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire3;
