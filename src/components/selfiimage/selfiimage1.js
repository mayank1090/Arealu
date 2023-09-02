import "./selfiimage.css";
import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { captureImage } from "../../actions/selfiimageaction";
import { useNavigate } from "react-router-dom";
import { updateprogressvalue } from "../../actions/updateprogress";

function Selfie1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selfieImages = useSelector((state) => state.selfieImages);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const progressValue = useSelector((state) => state.progress.progressValue);

  const [facingMode, setFacingMode] = useState("user");
  const [capturedImageData, setCapturedImageData] = useState(null);

  const switchCamera = () => {
    console.log(facingMode);
    const newFacingMode = facingMode === "user" ? "environment" : "user";
    setFacingMode(newFacingMode);
    startCamera(newFacingMode);
  };

  const startCamera = async (facingMode) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: facingMode },
      });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  useEffect(() => {
    startCamera(facingMode);
  }, [facingMode]);

  const capturePhoto = (imageData) => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    const scale = video.videoWidth / video.clientWidth;
    const canvasWidth = video.clientWidth;
    const canvasHeight = video.clientHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const context = canvas.getContext("2d");

    // Draw the video frame onto the canvas with scaled dimensions
    context.drawImage(video, 0, 0, canvasWidth, canvasHeight);

    // Convert the canvas to a data URL (image/png)
    const capturedImage = canvas.toDataURL("image/png");
    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    dispatch(captureImage("front", capturedImage)); // Dispatch action to store image in Redux
    setCapturedImageData(capturedImage);

    dispatch(updateprogressvalue(10));
  };

  return (
    <>
      <div className="selfieprnt container">
        <div className="aleru text-center">
          <img
            className="logoaselfi"
            src="./Images/blacklogo.png"
            alt="logo"
          ></img>
        </div>

        <div className="main-sec">
          <div className="upper-sec d-flex  ">
            <div className="leftarrowprnt ">
              <svg
                className="rightarrow leftway"
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
            <div className="selfitext-rnt">
              <p className="slefietxt">Front Selfie</p>
            </div>
            <div
              className="rightarrowprnt "
              onClick={() => {
                navigate("/selfie2");
              }}
            >
              <svg
                className="rightarrow"
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

          <div className="width50">
            <div className="face">
              <div className="video-wrapper">
                {capturedImageData ? (
                  <img
                    src={capturedImageData}
                    alt="Captured"
                    className="captured-image"
                  />
                ) : (
                  <video ref={videoRef} autoPlay className="video-element" />
                )}
              </div>
              <canvas ref={canvasRef} style={{ display: "none" }} />
            </div>
            <div className="btnsprnt d-flex">
              <div className="capturebtnprnt">
                <button className="capture" onClick={capturePhoto}>
                  <img
                    src="./Images/capturebtn.png"
                    alt="capture"
                    className="capturebtn"
                  />
                </button>
              </div>

              <div className="switchcameraprnt">
                <button className="swithcamera" onClick={switchCamera}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="30"
                    viewBox="0 0 46 30"
                    fill="none"
                  >
                    <path
                      d="M34.8931 11.5941C34.8402 12.1225 34.75 12.642 34.6255 13.1506C40.6819 14.5062 44.3936 16.8174 44.3936 18.97C44.3936 22.0866 37.3343 25.0121 27.9737 25.775C27.5313 25.811 27.2034 26.1907 27.2403 26.623C27.2764 27.0545 27.6529 27.3774 28.107 27.3406C37.0135 26.6145 46 23.745 46 18.97C46 15.7958 41.5958 13.0765 34.8931 11.5941ZM0 18.97C0 23.5003 8.96904 27.1045 20.7929 27.5064L19.3511 28.592C18.9993 28.8567 18.9338 29.3499 19.2044 29.6936C19.3629 29.8945 19.6009 30 19.8414 30C20.0127 30 20.1849 29.9467 20.3308 29.837L23.4443 27.4925C23.6698 27.3233 23.8008 27.0671 23.8032 26.7891C23.8032 26.7824 23.8012 26.7762 23.8011 26.7695C23.8012 26.766 23.8032 26.7631 23.8032 26.7595C23.8032 26.7485 23.7972 26.7393 23.7967 26.7283C23.7918 26.6446 23.7745 26.5641 23.7468 26.4866C23.7408 26.4709 23.7373 26.4549 23.7303 26.4397C23.6717 26.301 23.5812 26.1758 23.4565 26.0788L20.3771 23.689C20.0304 23.4193 19.5253 23.4757 19.2488 23.8159C18.9731 24.1557 19.0311 24.6497 19.3786 24.9193L20.6831 25.9318C9.32902 25.5143 1.60638 22.076 1.60638 18.97C1.60638 16.8183 5.31526 14.5082 11.3674 13.1523C11.2442 12.6439 11.1637 12.122 11.1114 11.5932C4.40618 13.0753 0 15.7951 0 18.97ZM20.7579 1.92419C20.7579 2.0776 20.8916 2.20685 21.0501 2.20685H24.9499C25.1084 2.20685 25.2425 2.0776 25.2425 1.92419V0.234675C24.5096 0.0839458 23.7569 0 22.9894 0C22.851 0 22.7121 0.00268479 22.5733 0.00767061C21.9542 0.0309224 21.3491 0.116499 20.7579 0.243496V1.92419Z"
                      fill="black"
                    />
                    <path
                      d="M30.4665 2.94005C29.3082 1.84678 27.9364 1.0509 26.4497 0.560547V1.92715C26.4497 2.73103 25.7761 3.38217 24.9464 3.38217H21.0529C20.2232 3.38217 19.5496 2.73103 19.5496 1.92715V0.568594C15.4343 1.97538 12.3704 5.8099 12.2554 10.2071C12.1322 15.0143 15.3686 19.2668 20.1329 20.553C20.2889 20.5932 20.4532 20.6173 20.6339 20.6173H25.3654C25.5461 20.6173 25.7104 20.5932 25.8664 20.553C30.5075 19.299 33.7522 15.159 33.7522 10.4724C33.7522 7.60254 32.5857 4.93365 30.4665 2.94005ZM22.9997 17.0562C19.6811 17.0562 16.9703 14.4194 16.9703 11.1798C16.9703 7.94016 19.6811 5.30346 22.9997 5.30346C26.3182 5.30346 29.029 7.94016 29.029 11.1798C29.029 14.4194 26.3182 17.0562 22.9997 17.0562Z"
                      fill="black"
                    />
                    <path
                      d="M25.1366 11.18C25.1366 12.3295 24.1756 13.262 23.0009 13.262C21.8263 13.262 20.8652 12.3295 20.8652 11.18C20.8652 10.0304 21.8263 9.0979 23.0009 9.0979"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

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
      {/* {to show the taken images} */}
      {/* <div className="captured-images">
        {Object.entries(selfieImages).map(([type, images], index) => (
          <div key={index}>
            <h2>{type.toUpperCase()} Selfies</h2>
            {images.map((image, imageIndex) => (
              <img
                key={imageIndex}
                src={image}
                alt={`${type} Selfie ${imageIndex}`}
              />
            ))}
          </div>
        ))}
      </div> */}
    </>
  );
}

export default Selfie1;
