import React from "react";
import "./loginotp.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateOtpValue, updateMobileValue } from "../../actions/loginotp";
import axios from "axios";

export default function Loginotp() {
  const dispatch = useDispatch();

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);
  const [showPassword, setShowPassword] = useState(false);

  const OTP = useSelector((state) => state.loginotp.otpValue);
  const MOBILENUMBER = useSelector(
    (state) => state.loginotp.mobileValue
  );

  useEffect(() => {
    // Update the state when the window is resized
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOtpChange = (event) => {
    const inputValue = event.target.value;
    // Restrict input to numbers only and maximum length of 6
    if (/^\d{0,6}$/.test(inputValue)) {
      dispatch(updateOtpValue(inputValue));
    }
  };

  const handlemobileChange = (event) => {
    const inputValue = event.target.value;
    // Restrict input to numbers only and maximum length of 6
    if (/^\d{0,10}$/.test(inputValue)) {
      dispatch(updateMobileValue(inputValue));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const sendtoprequest = async () => {
    try {
      if (!MOBILENUMBER) {
        alert("Mobile number is empty");
        return;
      }

      const response = await axios.post("http://localhost:8000/api/send-otp/", {
        phone_number: `+91${MOBILENUMBER}`,
      });

      // Handle API response if needed
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const getreportrequest= async ()=>{
    try {
      if (!MOBILENUMBER || !OTP) {
        console.error("Mobile number or OTP is empty");
        return;
      }

      const response = await axios.post("http://localhost:8000/api/send-otp/", {
        phone_number: `+91${MOBILENUMBER}`,
        otp:`${OTP}`
      });

      // Handle API response if needed
    } catch (error) {
      console.error("API Error:", error);
    }
  }

  return (
    <>
      <div class="parent ">
        <div class="logo-parent text-center">
          <img src="./Images/logo.png" />
        </div>

        <div class="d-flex gap30 justify-content-between container-fluid">
          <div class="width55 canweotherone">
            {isMobileView && (
              <div class={`width45 otherone `} style={{ display: "none" }}>
                <div className="merge-parent">
                  <img className="dotes" src="./Images/onlydotes.png" />
                  <div className="scannerone">
                    <img
                      className="landingscaner"
                      src="./Images/landingscanner.png"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="topauthprnt">
              <div className="mobilenumberprnt d-flex">
                <div className="svgmobile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.98101 0C8.04148 0.00368503 6.14489 0.571311 4.52223 1.63374C2.89958 2.69617 1.6209 4.20754 0.841947 5.98377C0.0629925 7.76 -0.182618 9.72442 0.135032 11.6378C0.452682 13.5511 1.31988 15.3308 2.63101 16.76C3.56743 17.775 4.70395 18.5851 5.96894 19.1392C7.23394 19.6933 8.59999 19.9793 9.98101 19.9793C11.362 19.9793 12.7281 19.6933 13.9931 19.1392C15.2581 18.5851 16.3946 17.775 17.331 16.76C18.6421 15.3308 19.5093 13.5511 19.827 11.6378C20.1446 9.72442 19.899 7.76 19.1201 5.98377C18.3411 4.20754 17.0624 2.69617 15.4398 1.63374C13.8171 0.571311 11.9205 0.00368503 9.98101 0ZM9.98101 18C7.90947 17.9969 5.91992 17.1903 4.43101 15.75C4.88305 14.6495 5.65204 13.7083 6.64026 13.0459C7.62848 12.3835 8.79132 12.0298 9.98101 12.0298C11.1707 12.0298 12.3335 12.3835 13.3218 13.0459C14.31 13.7083 15.079 14.6495 15.531 15.75C14.0421 17.1903 12.0525 17.9969 9.98101 18ZM7.98101 8C7.98101 7.60444 8.0983 7.21776 8.31807 6.88886C8.53783 6.55996 8.85019 6.30362 9.21564 6.15224C9.58109 6.00087 9.98322 5.96126 10.3712 6.03843C10.7591 6.1156 11.1155 6.30608 11.3952 6.58579C11.6749 6.86549 11.8654 7.22186 11.9426 7.60982C12.0197 7.99778 11.9801 8.39991 11.8288 8.76537C11.6774 9.13082 11.421 9.44318 11.0921 9.66294C10.7632 9.8827 10.3766 10 9.98101 10C9.45057 10 8.94186 9.78929 8.56679 9.41421C8.19172 9.03914 7.98101 8.53043 7.98101 8ZM16.891 14C15.9975 12.4718 14.6224 11.283 12.981 10.62C13.4902 10.0427 13.8219 9.33066 13.9365 8.56944C14.051 7.80822 13.9435 7.03011 13.6268 6.3285C13.31 5.62688 12.7976 5.03156 12.1509 4.61397C11.5042 4.19637 10.7508 3.97425 9.98101 3.97425C9.21122 3.97425 8.45778 4.19637 7.8111 4.61397C7.16442 5.03156 6.65198 5.62688 6.33526 6.3285C6.01853 7.03011 5.91099 7.80822 6.02554 8.56944C6.14008 9.33066 6.47184 10.0427 6.98101 10.62C5.3396 11.283 3.96447 12.4718 3.07101 14C2.35895 12.7871 1.98273 11.4065 1.98101 10C1.98101 7.87827 2.82386 5.84344 4.32415 4.34315C5.82444 2.84285 7.85927 2 9.98101 2C12.1027 2 14.1376 2.84285 15.6379 4.34315C17.1382 5.84344 17.981 7.87827 17.981 10C17.9793 11.4065 17.6031 12.7871 16.891 14Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div className="mobilenumbertext">
                  <p className="mobilenumbertextchild">Mobile number</p>
                </div>
              </div>

              <div className="mobileinputprnt d-flex ">
                <input
                  type="number"
                  className="numbermobile"
                  value={MOBILENUMBER}
                  onChange={handlemobileChange}
                  maxLength="10"
                />
                <div className="otpbutnprnt" onClick={sendtoprequest}>
                  <p className="OTP">OTP</p>
                </div>
              </div>

              <div className="mobilenumberprnt d-flex canwejust">
                <div className="leftotpprnt">
                  <div className="svgmobile">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                    >
                      <path
                        d="M8 11C7.69555 10.9964 7.39732 11.0862 7.14544 11.2573C6.89357 11.4284 6.70015 11.6725 6.59121 11.9568C6.48228 12.2411 6.46306 12.552 6.53615 12.8476C6.60923 13.1431 6.77111 13.4092 7 13.61V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V13.61C9.22889 13.4092 9.39077 13.1431 9.46385 12.8476C9.53694 12.552 9.51772 12.2411 9.40879 11.9568C9.29985 11.6725 9.10643 11.4284 8.85456 11.2573C8.60268 11.0862 8.30445 10.9964 8 11ZM13 7V5C13 3.67392 12.4732 2.40215 11.5355 1.46447C10.5979 0.526784 9.32608 0 8 0C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7956 7 13 7ZM5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V17Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <div className="mobilenumbertext">
                    <p className="mobilenumbertextchild">Otp</p>
                  </div>
                </div>

                <div
                  className="showpassword"
                  onClick={togglePasswordVisibility}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4.70994 20.7108C4.6167 20.804 4.50601 20.878 4.38419 20.9285C4.26237 20.9789 4.1318 21.0049 3.99994 21.0049C3.86808 21.0049 3.73751 20.9789 3.61569 20.9285C3.49387 20.878 3.38318 20.804 3.28994 20.7108C3.10164 20.5225 2.99585 20.2671 2.99585 20.0008C2.99585 19.7345 3.10164 19.4791 3.28994 19.2908L8.91994 13.6608C8.56375 12.9982 8.43053 12.2384 8.54003 11.4941C8.64953 10.7499 8.99593 10.0607 9.52788 9.52873C10.0598 8.99678 10.749 8.65038 11.4933 8.54088C12.2376 8.43138 12.9973 8.5646 13.6599 8.92079L19.2899 3.29079C19.3829 3.19706 19.4935 3.12267 19.6154 3.0719C19.7372 3.02113 19.8679 2.99499 19.9999 2.99499C20.132 2.99499 20.2627 3.02113 20.3845 3.0719C20.5064 3.12267 20.617 3.19706 20.7099 3.29079C20.8037 3.38375 20.8781 3.49436 20.9288 3.61621C20.9796 3.73807 21.0057 3.86878 21.0057 4.00079C21.0057 4.1328 20.9796 4.26351 20.9288 4.38537C20.8781 4.50723 20.8037 4.61783 20.7099 4.71079L4.70994 20.7108ZM11.9999 10.5008C11.6021 10.5008 11.2206 10.6588 10.9393 10.9401C10.658 11.2214 10.4999 11.603 10.4999 12.0008V12.0708L12.0599 10.5108L11.9999 10.5008Z"
                      fill="white"
                    />
                    <path
                      d="M12.2201 7.00062C7.92007 6.90062 5.10007 10.5906 4.22007 12.0006C4.84654 12.9999 5.59943 13.9142 6.46007 14.7206L5.00007 16.1306C3.87139 15.0671 2.90448 13.8442 2.13007 12.5006C2.0423 12.3486 1.99609 12.1762 1.99609 12.0006C1.99609 11.8251 2.0423 11.6526 2.13007 11.5006C2.76007 10.4106 6.13007 5.00062 12.0201 5.00062H12.2701C13.3776 5.03347 14.4708 5.26024 15.5001 5.67062L13.9201 7.25062C13.3644 7.10445 12.7943 7.0206 12.2201 7.00062ZM21.8701 12.5006C21.2301 13.6106 17.7001 19.1806 11.7301 19.0006C10.6225 18.9678 9.52931 18.741 8.50007 18.3306L10.0801 16.7506C10.6357 16.8968 11.2059 16.9806 11.7801 17.0006C16.0701 17.1106 18.8901 13.4106 19.7801 12.0006C19.1381 10.9983 18.3683 10.084 17.4901 9.28062L19.0001 7.87062C20.1429 8.93129 21.1234 10.1544 21.9101 11.5006C21.9918 11.6561 22.0312 11.8304 22.0242 12.006C22.0171 12.1815 21.964 12.3521 21.8701 12.5006Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="mobileinputprnt d-flex letsgetthis">
                <input
                  type={showPassword ? "number" : "password"}
                  className="numbermobile leestfinal"
                  value={OTP}
                  onChange={handleOtpChange}
                  maxLength="6"
                />
              </div>
            </div>

            <div class="scan-prnter text-center absolprnt " onClick={getreportrequest}>
              <p class="strt">Get my Report</p>
            </div>
          </div>
          {!isMobileView && (
            <div class="width45 otherone">
              <div className="merge-parent">
                <img className="dotes" src="./Images/onlydotes.png" />
                <div className="scannerone">
                  <img
                    className="landingscaner"
                    src="./Images/landingscanner.png"
                  />
                  <img
                    src="./Images/line.png"
                    alt="line"
                    className="lineclass lineprnt"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
