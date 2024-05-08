import "./QrCode.css";
import qrCodeSvg from "../../assets/qrcode.svg";

const QrCode = () => {
  return (
    <section className="container white">
      <div className="qr-container">
        <img className="qr-code" color="#ffffff" src={qrCodeSvg} />
        <div className="oval-top-left"></div>
        <div className="oval-bottom-right"></div>
      </div>
      <header>
        <h1>A simple QR code modal designed matching figma</h1>
        <p>This QR code does not take you anywhere.</p>
      </header>
    </section>
  );
};

export default QrCode;
