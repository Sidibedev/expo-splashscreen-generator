import React, { useState } from 'react';
import './App.css';
import { useRef } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';
import logoPlaceholder from './logoplaceholder.png';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const splashRef = useRef();
  const [color, setColor] = useColor('hex', '#fff');
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

  const downloadSplash = () => {
    exportComponentAsPNG(splashRef, {
      html2CanvasOptions: {
        onclone: (clonedDoc) => {
          clonedDoc.getElementById('splash').style.visibility = 'visible';
        },
      },
    });
  };

  return (
    <div className="App">
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

        <SplashScreen logo={logo} color={color} ref={splashRef} />

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
        <img src={props.logo} style={{ width: 300, height: 300 }} />
      </div>
    </div>
  );
});

const LogoPickerContainer = ({ logo, handleChange }) => (
  <>
    <img src={logo ? logo : logoPlaceholder} className="logo-preview" />

    <label htmlFor="file-upload" className="custom-file-upload">
      <i className="fa fa-cloud-upload icon-yellow"></i> Click to upload your
      awesome logo
    </label>
    <input id="file-upload" type="file" onChange={handleChange} />
  </>
);

const ColorPickerContainer = ({ color, setColor }) => (
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
);

const DownloadButton = ({ disabled, onClick }) => (
  <button disabled={disabled} className="submit-button" onClick={onClick}>
    <i className="fa fa-cloud-download icon-black"></i> Download my splashscreen
  </button>
);

const Footer = () => (
  <div
    style={{
      position: 'absolute',
      right: 40,
      bottom: 10,
    }}
  >
    <span className="footer-text">
      Made with <i className="fa fa-heart icon-yellow"></i> by{' '}
      <a target="_blank" href="https://twitter.com/mouhamedaly01">
        @mouhamedaly
      </a>
    </span>
  </div>
);

export default App;
