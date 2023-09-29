import "./popup.css";

const Popup = () => {
  const handleStartBtn = () => {
    chrome.tabs?.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "request_recording" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "error line 14");
          }
        }
      );
    });
  };

  const options = {
    video: true,
    audio: true,
  };

  async function startCapture(displayMediaOptions) {
    let captureStream;

    try {
      captureStream = await navigator.mediaDevices.getDisplayMedia(
        displayMediaOptions
      );
    } catch (err) {
      console.error(`Error: ${err}`);
    }
    console.log(captureStream);
    return captureStream;
  }

  const handleStopBtn = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "stopvideo" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "error line 27");
          }
        }
      );
    });
  };

  return (
    <div>
      <div className="container popup__container">
        <div className="top">
          <div className="logo__container">
            <img src="/static/icons/logo.png" alt="" />
            <img src="/static/icons/HelpMeOut.png" alt="" />
          </div>
          <div className="left__icon">
            <img src="/static/icons/setting-2.png" alt="" />
            <img src="/static/icons/close-circle.png" alt="" />
          </div>
        </div>
        <div className="desc">
          This extension helps you record and share help videos with ease.
        </div>
        <div className="tabs">
          <div>
            <img src="/static/icons/monitor.png" alt="" />
            <p>Full screen</p>
          </div>
          <div>
            <img src="/static/icons/copy.png" alt="" />
            <p>Current Tab</p>
          </div>
        </div>
        <div className="permissions">
          <div>
            <span>
              <img src="/static/icons/video-camera.png" alt="" />
              Camera
            </span>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <span>
              <img src="/static/icons/microphone.png" alt="" />
              Audio
            </span>
            <input type="checkbox" name="" id="" />
          </div>
        </div>
        <button onClick={handleStartBtn} className="start">
          Start Recording1
        </button>
        <button onClick={() => startCapture(options)} className="start">
          Start Recording
        </button>
      </div>
    </div>
  );
};

export default Popup;
