import React from 'react';
import LandingPage from "./components/LandingPage/LandingPage";
import  Navbar  from "./components/Navbar/Navbar"
import './App.css';
import useWindowDimensions from './components/useWindowDimensions';
import Fade from 'react-reveal/Fade'

function App() {
    var clientTime = new Date();
    var currentTimeString = clientTime.getHours();
    const { height, width } = useWindowDimensions();

    return (
      <div className="App">
            <Navbar />
            <LandingPage />
            <div style={{ width: width, height: height, borderStyle: 'solid', borderColor: 'red' }} >
                <Fade left>
                    <img id="first-image-landing" src="https://lh3.googleusercontent.com/b3e982hVJI07s_VZss0XXF20xUuFDQNT7MbmNwYIame21S8lwg_xPMmgQOkpS-XLKqxNaHBVGvO1mrLosnS45fnCMsJ2pGOI_KnW3_8ScMxvsBLO7nhndcXCySwuNxszsYjDNEWsdjp8L7bxAKo78QqLn2WzvapMTHfsCXc7vVt1EysRs1fHXuw70-_kHLTWxxnDHS2Jfe7Rhk6KWclpNjGGPMNwv8tgOBHis7adr4QPct0s8_cA1BqZMO4k2v0Pu3I9DXLahvajS-eThMZJ7hU4jtFD-be8qmXEX5HT4DRqXW2urEL18nFI7xGq42Ak--KLGHowGYc_ZytobxJic9w7IPbAtNCSi-fSIoV3rpt35lvQyt2X-da3P8kxk86qDEDcOqjKUob4JSU_J9qQblbkf2sz9VHZvdXyGGsoWkHzW0LEMB6pECWeFvGXCnDquYdGGzGUA7C82MUfZ9ItWfYWwPSHiXXOPbt6aVa5qzia6aLdFgJHeE3PE2oKogi0REtKHKy86AQ6STKSekSSnxuNGunq4nsXWtLTaD8ERyB0thiR2j-VzuCs3IYWq2Xa2KIX6VcbD7-2p9M5GgQPP0a5YNtbXBMNIqSQOI4XtTiIqXgXobUVCtqDAO32Ky1fmIumdIwoV3iFwwMxYgQFpR_8B5-f1uAE6P4moFLfg-gKgop4wPcoP7gHIrRiMuEicHSF2M1K8TsuPj2J99MVhoMB=w1755-h1316-no?authuser=5"/>
                </Fade>
            </div>
            <div style={{ width: width, height: height, borderStyle: 'solid', borderColor: 'red'  }}>
                <Fade right>
                    <img id="second-image-landing" src="https://lh3.googleusercontent.com/9pvRviAB4B7Qa5i6SD5GomTLvm-FEixArlck3ktYLFNNWORTO4hROhD0qNlUV-4oK-sKSp3t5pVJZdwpWf6CTcRbYZkd1FxtrK59RbEPI5OO8xwDf4Z-xHWjAa6ntJAmGiAvsbpZBEi0Ldx-1TjYp3HiR1LuEqcFN8PFaKNIYocGCsc8t1LHKWdqV8Dyf_3D9s6y3jjc3-VPBMBQEoq0EyvG5hXzj9n8_MTgCP5xNqYMQHaxBjl5qT4Rjp0AlDd3mMjMj9JXKroHrVUEyQaaJQZdxYeH9_0pDu19C59VTj07iThW0l3PcMLTqxEB-o6IhyXkwcZYo12_Vp0PmwXe4OV1SA0YIEsbMaa7S_HVSXSWmXnq6_nvNEBCf5dfVw6MUNXhdxHCbPh3FK480qF1jnVf6TUaNqtqKa-_2N759jBkFX_ffIqwe5XlOrlsep9oRpBe69uHVoDlXwXskzhJLA4TQrzph8NVDihsS0Voysoq3NzV6NIH_1q_U_tWIAXk3pGOCuCGeAXR7huVtXXEsFQ9Jcovn1fVz_c0ozCx9LBHi6Y4m49fLBzSdpOMOkV49z1kxAPfTUsHEaBpIOSgYY2oHGfMrfvIpjjTE3ABmRsdatwssvQT-Nxb7spBvBz652gO0gatmhOJfuspdpIp4bElyFUvKW__1uCH_IXT4pGnVlsGMNDHhUKydWSvC1nSlAJj2rPxh7YU22YAgeqeUfV8=w1755-h1316-no?authuser=5" />
                </Fade>
            </div>
      </div>
      
  );
}

	
export default App;
