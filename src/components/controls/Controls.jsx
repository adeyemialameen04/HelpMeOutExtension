import "./controls.css";

const Controls = () => {
  return (
    <div className="contols__container">
      <div className="time">
        <p>00:03:45</p>
        <span></span>
      </div>
      <div className="controls">
        <button>
          <img src="/static/icons/pause.png" alt="" />
          <p>Pause</p>
        </button>
        <button>
          <img src="/static/icons/Rectangle 437.png" alt="" />
          <p>Stop</p>
        </button>
        <button>
          <img src="/static/icons/video-camera.png" alt="" />
          <p>Camera</p>
        </button>
        <button>
          <img src="/static/icons/microphone.png" alt="" />
          <p>Mic</p>
        </button>
        <button className="bin">
          <img src="/static/icons/bin.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Controls;
