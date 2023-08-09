import React from "react";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="blank">
        <div className="head text-center">
          <img src="./Images/logo.png" alt="logo"></img>
        </div>
        <div className="imgprnt container">
          <p className="heading">About Us</p>
        </div>
        <div className="container d-flex parentnydiv">
          <div className="lftprnt">
            <div className="company">
              <div className="profile">
                <p className="companyname">rezang la private limited</p>
              </div>
            </div>

            <div className="headquater">
              <div className="head">
                <p className="headquater-txt">headquaters</p>
              </div>
              <div className="address">
                <p className="address-txt">
                  302, 3rd floor, kanakshree near orbit resort, new bhupalpura,
                  rupsagar,shobhaghpura, udaipur, rajasthan 313001,IN
                </p>
              </div>
            </div>
          </div>
          <div className="rgtprnt">
            <div className="d-flex ttyr">
              <div className="leftone">
                <div className="ornngprnt">
                  <p className="emaillike">Phone</p>
                </div>
                <div className="whiteparnt phonediff">
                  <p className="number">(123)456-789</p>
                </div>
              </div>

              <div className="leftone">
                <div className="ornngprnt">
                  <p className="emaillike margindis">Email</p>
                </div>
                <div className="whiteparnt">
                  <p className="number">(123)456-789</p>
                </div>
              </div>
            </div>

            <div className="d-flex ttyr">
              <div className="leftone">
                <div className="ornngprnt">
                  <p className="emaillike margindis">Social</p>
                </div>
                <div className="whiteparnt d-flex ">
                  <div className="gacsvg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_397)">
                        <path
                          d="M18.6131 0H5.38691C2.4118 0 0 2.4118 0 5.38691V18.6131C0 21.5882 2.4118 24 5.38691 24H18.6131C21.5882 24 24 21.5882 24 18.6131V5.38691C24 2.4118 21.5882 0 18.6131 0Z"
                          fill="#0B86CA"
                        />
                        <path
                          d="M6.65043 9.97567H9.14437V18.0228H6.65043V9.97567ZM7.92234 5.97705C8.20807 5.97706 8.4874 6.06168 8.72509 6.22026C8.96278 6.37884 9.14818 6.60426 9.2579 6.86809C9.36762 7.13191 9.39675 7.42233 9.34161 7.70269C9.28646 7.98305 9.14952 8.2408 8.94806 8.44342C8.7466 8.64604 8.48964 8.78446 8.20959 8.8412C7.92955 8.89795 7.63898 8.87049 7.37453 8.76228C7.11008 8.65408 6.8836 8.46997 6.72366 8.23319C6.56372 7.99642 6.4775 7.71758 6.47585 7.43185C6.47476 7.24119 6.51136 7.05221 6.58357 6.87575C6.65577 6.69929 6.76214 6.53885 6.89657 6.40365C7.031 6.26845 7.19083 6.16116 7.36687 6.08795C7.5429 6.01474 7.73168 5.97705 7.92234 5.97705Z"
                          fill="white"
                        />
                        <path
                          d="M10.7405 9.9757H13.143V11.073C13.3835 10.6626 13.7309 10.3252 14.1482 10.0968C14.5654 9.86839 15.0369 9.75758 15.5122 9.77618C18.0062 9.77618 18.5133 11.4388 18.5133 13.6085V18.0228H16.0193V14.1323C16.0193 13.2012 16.0193 11.9958 14.7225 11.9958C13.4256 11.9958 13.2261 13.01 13.2261 14.0574V18.0394H10.7322L10.7405 9.9757Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_397">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="gacsvg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_406)">
                        <path
                          d="M21.7027 0H2.29726C1.02852 0 0 1.02852 0 2.29726V21.7027C0 22.9715 1.02852 24 2.29726 24H21.7027C22.9715 24 24 22.9715 24 21.7027V2.29726C24 1.02852 22.9715 0 21.7027 0Z"
                          fill="#2188F7"
                        />
                        <path
                          d="M19.0079 7.65637C18.6791 7.98883 18.2231 8.19402 17.7177 8.19402C17.6532 8.19402 17.5895 8.19033 17.5268 8.18388C18.0539 7.86756 18.4606 7.37278 18.6635 6.7821C18.6635 6.7821 18.6644 6.7821 18.6644 6.78117C18.6925 6.70232 18.716 6.62209 18.7354 6.53955C18.3185 6.98545 17.7477 7.28701 17.1081 7.35895C17.0099 7.37094 16.9098 7.37601 16.8093 7.37601C16.7775 7.37601 16.7466 7.37509 16.7157 7.37324C16.4994 7.14591 16.2417 6.95824 15.9553 6.81991C15.6362 6.66451 15.2803 6.57275 14.9045 6.56122C14.8736 6.55938 14.8427 6.55846 14.8109 6.55846C14.4918 6.55846 14.186 6.61471 13.9034 6.71938C13.8305 6.74567 13.7609 6.77472 13.6917 6.80838C12.7958 7.22799 12.1765 8.13823 12.1765 9.19325C12.1765 9.40952 12.2028 9.62024 12.2521 9.82083C11.9778 9.80976 11.7062 9.78348 11.4401 9.74382C11.3548 9.72999 11.2695 9.7157 11.1847 9.6991C10.505 9.57275 9.85758 9.35557 9.2549 9.06045C8.71632 8.79716 8.21371 8.47161 7.75675 8.09396C7.37264 7.77672 7.02081 7.4235 6.70633 7.03755C6.6925 7.02141 6.67913 7.00389 6.66622 6.98775C6.64823 7.01588 6.63071 7.04401 6.61549 7.07306C6.39554 7.45716 6.27104 7.90168 6.27104 8.3757C6.27104 8.39046 6.27104 8.40567 6.27197 8.42043C6.2775 8.77549 6.35266 9.11348 6.48731 9.42058C6.54448 9.55707 6.61457 9.68572 6.69434 9.80838C6.92951 10.1708 7.25137 10.4724 7.63087 10.6813C7.64793 10.6923 7.66545 10.7011 7.68343 10.7094C7.65623 10.7149 7.6281 10.7195 7.59997 10.7223C7.52204 10.7324 7.44181 10.7375 7.36111 10.7375C6.95672 10.7375 6.58091 10.6112 6.27289 10.3958C6.27104 10.4184 6.27104 10.4415 6.27104 10.465C6.27104 11.2171 6.58644 11.8958 7.09136 12.3745C7.48469 12.7498 7.9933 13.002 8.55862 13.0758C8.35527 13.1505 8.13532 13.1902 7.90615 13.1902C7.65807 13.1902 7.42106 13.1431 7.20387 13.0565C7.52711 14.1083 8.49222 14.8797 9.64224 14.9143C8.93996 15.6438 7.95318 16.097 6.86127 16.097C6.18251 16.097 5.54479 15.9218 4.99146 15.6147C6.32038 16.7647 8.05371 17.4596 9.9498 17.4596C14.1395 17.4596 17.5356 14.064 17.5356 9.87386C17.5356 9.6433 17.5254 9.41505 17.5047 9.18957C18.1977 8.91613 18.7474 8.35633 19.0074 7.65498L19.0079 7.65637Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_406">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="gacsvg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_403)">
                        <path
                          d="M21 0H3C1.3455 0 0 1.3455 0 3V21C0 22.6545 1.3455 24 3 24H21C22.6545 24 24 22.6545 24 21V3C24 1.3455 22.6545 0 21 0Z"
                          fill="#1976D2"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20.25 12H16.5V9C16.5 8.172 17.172 8.25 18 8.25H19.5V4.5H16.5C15.3065 4.5 14.1619 4.97411 13.318 5.81802C12.4741 6.66193 12 7.80653 12 9V12H9V15.75H12V24H16.5V15.75H18.75L20.25 12Z"
                          fill="#FAFAFA"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_403">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="leftone">
                <div className="ornngprnt">
                  <p className="emaillike">Get Updates</p>
                </div>
                <div className="whiteparnt updatediff">
                  <div className="greenupdate">
                    <p className="updatetext">Subscribe Us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
