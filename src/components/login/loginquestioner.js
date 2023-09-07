import React, { useEffect} from "react";
import "./loginquestion.css"; // You can define your styles in this CSS file
import { useSelector, useDispatch } from "react-redux";
import { updateAge,updateFullname,updateGender } from "../../actions/loginquestions";
import { useNavigate } from "react-router-dom";
import { updateprogressvalue } from "../../actions/updateprogress";

const Loginquestioner = () => {
  const navigate = useNavigate()
  const gender = useSelector((state) => state.loginquestioner.gender);
  const age = useSelector((state) => state.loginquestioner.age);
  const fullname =useSelector((state)=>state.loginquestioner.fullname)
  const progressValue = useSelector((state) => state.progress.progressValue);

  const dispatch = useDispatch();

  const handlegender = (option) => {
    dispatch(updateGender(option));
    dispatch(updateprogressvalue(40));
  };

  const handlefullname = (option) => {
    dispatch(updateFullname(option));
    dispatch(updateprogressvalue(35));
  };

  const handleage = (option) => {
    dispatch(updateAge(option));
    dispatch(updateprogressvalue(45));
  };

  const fulllogin = useSelector((state) => state.loginquestioner);

  useEffect(()=>{console.log(fulllogin)},[fulllogin])

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Do something with the selected option, like submitting it to a backend or processing it
  //   console.log("Selected option:", gender,age,fullname);
  // };

  return (
    <div className="container">
      <div className="questionnaire-container ">
        <div className="navigator-bar d-flex">
          <div className="lftarro" onClick={()=>{navigate("/selfie3")
           dispatch(updateprogressvalue(30));
          }
        } >
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
          <div className="rgtarro" onClick={()=>{navigate("/questionnaire1")}}>
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

        <div className="newlogincontainer">
            <div className="fullnamelogin">
                <p className="loginfullname">Full Name</p>
            </div>
            <div className="nameinput">
                <input className="fullnameinput" value={fullname} onChange={(e)=>{handlefullname(e.target.value)}}/>
            </div>

            <div className="genderdiv">
                <p className="maleandfemale">Gender</p>
            </div>

            <div className="genderoptions d-flex">
                <div className={`malegenderoption ${gender === 'Male' ? 'selected' : ''}`}
                onClick={() => handlegender('Male')}
                >
                    <p className="malegender">Male</p>
                </div>

                <div className={`femalegenderoption ${gender === 'Female' ? 'selected' : ''}`}
                onClick={() => handlegender('Female')}
                >
                    <p className="femalegender">Female</p>
                </div>
            </div>

            <div className="agecategories">
                <p className="agehead">Age</p>
            </div>

            <div className="ageoptions">
                <div className="ageoptionrow d-flex">
                    <div className={`earlyagerow ${age === '18-24' ? 'selected' : ''}`}
                    onClick={() => handleage('18-24')}
                    >
                        <p className="till24">18-24</p>
                    </div>

                    <div className={`earlyagerow ${age === '25-34' ? 'selected' : ''}`}
                    onClick={() => handleage('25-34')}
                    >
                        <p className="till34">25-34</p>
                    </div>
                </div>

                <div className="ageoptionrow d-flex">
                <div className={`earlyagerow ${age === '35-54' ? 'selected' : ''}`}
                    onClick={() => handleage('35-54')}
                    >
                        <p className="till54">35-54</p>
                    </div>

                    <div className={`earlyagerow ${age === '54+' ? 'selected' : ''}`}
                    onClick={() => handleage('54+')}
                    >
                        <p className="beyond54">54+</p>
                    </div>
                </div>
          </div>
        </div>
       
      </div>
      <div className="uppermarginprocess othercanbethe">
        <div className="processprnt">
          <div className="progressbar primary">
            <div class="progress text-center">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: `${progressValue}%`  }}
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

export default Loginquestioner;
