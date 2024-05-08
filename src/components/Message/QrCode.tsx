import "./QrCode.css";

const QrCode = () => {
  return (
    <div className="container white">
      <div className="qr-container">
        <div className="oval-top-left"></div>
        <div className="oval-bottom-right"></div>
      </div>
      <div>
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QrCode;
