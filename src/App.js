import React, { useState } from 'react';
import './App.css';
import { useRef } from 'react';
import logoPlaceholder from './logoplaceholder.png';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { exportComponentAsPNG } from './lib';
import ReactGa from "react-ga"
function App() {
  const splashRef = useRef();
  const [color, setColor] = useColor('hex', '#fff');
  const [displaySplash, setDisplaySplash] = useState(false);
  const [logo, setLogo] = useState('');
  const handleChange = (e) => {
    const file = e.target.files[0];
    const fileSize = file.size / 1024 / 1024;

    if (fileSize > 2) {
      toast(
        'Oops Logo size exceeds 2 MiB, check the expo app icon size please.',
        {
          hideProgressBar: true,
        }
      );
      e.target.value = null;
    } else {
      setLogo(URL.createObjectURL(file));
    }
  };

  React.useEffect(() => {
    if (displaySplash) {
      exportComponentAsPNG(splashRef, {
        fileName: 'splash',
        html2CanvasOptions: {
          onclone: (clonedDoc) => {
            clonedDoc.getElementById('splash').style.visibility = 'visible';
          },
        },
      }).then((r) => {
        setDisplaySplash(false)
        ReactGa.event({
          category: "BUTTON",
          action: "DOWNLOAD",
          label: "SUCCESSFUL_DOWLOAD_SPLASHSCREEN"
        })
      });
    }
  }, [displaySplash]);

  const downloadSplash = () => {
    setDisplaySplash(true);
  };

  return (
    <div className="App">
      <div style={{ backgroundColor: '#FFF400', width: "100%", padding: 20 }}>
        <a href='https://exposplash.co' style={{ color: "black", fontWeight: 'bold' }}>Checkout the brand new version here</a>
      </div>
      <ToastContainer
        toastStyle={{
          backgroundColor: '#FFF400',
          color: 'black',
          fontFamily: 'Work sans',
        }}
      />
      <header className="App-header">

        <h3>Expo SplashScreen Generator.</h3>

        <LogoPickerContainer logo={logo} handleChange={handleChange} />

        <ColorPickerContainer color={color} setColor={setColor} />

        <DownloadButton disabled={!logo} onClick={downloadSplash} />

        <Footer />

        {displaySplash ? (
          <SplashScreen logo={logo} color={color} ref={splashRef} />
        ) : null}
      </header>
    </div>
  );
}

const SplashScreen = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      id="splash"
      style={{
        width: 1172,
        height: 2532,
        backgroundColor: props.color.hex,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        visibility: 'hidden',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <img alt='SplashScreen' src={props.logo} style={{ width: 300, height: 300 }} />
      </div>
    </div>
  );
});

const LogoPickerContainer = React.memo(({ logo, handleChange }) => (
  <>
    <img alt='logo' src={logo ? logo : logoPlaceholder} className="logo-preview" />

    <label htmlFor="file-upload" className="custom-file-upload">
      <i className="fa fa-cloud-upload icon-yellow"></i> Click to upload your
      awesome logo
    </label>
    <input id="file-upload" type="file" onChange={handleChange} />
  </>
))

const ColorPickerContainer = React.memo(({ color, setColor }) => (
  <>
    <div className="color-picker-container">
      <ColorPicker
        width={250}
        height={100}
        color={color}
        onChange={setColor}
        hideHSV
        dark
        hideRGB
      />
    </div>
    <span className="color-picker-desc">
      Select the background color of your splashscreen. The default background
      color is white
    </span>
  </>
));

const DownloadButton = React.memo(({ disabled, onClick }) => (
  <button disabled={disabled} className="submit-button" onClick={onClick}>
    <i className="fa fa-cloud-download icon-black"></i> Download my splashscreen
  </button>
))

const Footer = React.memo(() => (
  <div
    style={{
      marginTop: 40
    }}
  >
    <span className="footer-text">
      Made with <i className="fa fa-heart icon-yellow"></i> by{' '}
      <a rel="noreferrer" target="_blank" href="https://twitter.com/mouhamedaly01">
        @mouhamedaly
      </a>
    </span>
    <span className="footer-text" style={{ marginLeft: 40 }}>
      <i className="fa fa-github"></i>{" "}
      <a rel="noreferrer" target="_blank" href="https://github.com/Sidibedev/expo-splashscreen-generator">
        Github repo
      </a>
    </span>
  </div>
))

export default App;
