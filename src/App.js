import { useState } from "react";
import { TextField, Button } from "@mui/material";
import QRCode from "qrcode";
import "./App.css";
import { margin, width } from "@mui/system";
import Footer from "./Footer";
function App() {
  const [url, setUrl] = useState();
  const [qrcode, setQrcode] = useState("");

  const GenerateQrCode = () => {
    QRCode.toDataURL(
      url,
      { width: 800, margin: 1, color: { dark: "#355764FF" } },
      (err, url) => {
        if (err) return console.log(err);

        console.log(url);
        setQrcode(url);
      }
    );
  };

  return (
    <div className="App">
      <div className="container">
        <h1>QR Code Generator</h1>
        <div className="form-container">
          <TextField
            id="filled-basic"
            label="Text or URL "
            variant="filled"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <Button
            className="borderleft"
            variant="contained"
            color="success"
            style={{ margin: "2rem" }}
            onClick={GenerateQrCode}
          >
            {" "}
            Generate
          </Button>
        </div>
        <div className="qr-code">
          {qrcode && (
            <div className="qr-code">
              <img src={qrcode} alt="Qr-code" />
              <a href={qrcode} download="qr-code.png">
                <Button>Download</Button>
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
