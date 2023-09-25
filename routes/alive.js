const express  = require("express");
const alive = express.Router();
alive.get('/', (req, res) => {
  res.send('It Works!');
}  );

alive.get('/get-device', (req,res) => {
    const whatDeviceIsThis = req.header('User-Agent');
    //collecting the device information and find out if the device is windows, mac, or linux
    if (whatDeviceIsThis.includes('Windows')) {
      isWindows = true;
      isMac = false;
      isLinux = false;
      postmanRunTime = false;
    }
  
    if (whatDeviceIsThis.includes('Mac')) {
      isWindows = false;
      isMac = true;
      isLinux = false;
      postmanRunTime = false;
    }
  
    if (whatDeviceIsThis.includes('Linux')) {
      isWindows = false;
      isMac = false;
      isLinux = true;
      postmanRunTime = false;
    }
  
    if (whatDeviceIsThis.includes('PostmanRuntime')) {
      isWindows = false;
      isMac = false;
      isLinux = false;
      postmanRunTime = true;
    }
  
    res.send({isWindows, isMac, isLinux, postmanRunTime});
  })
    
alive.post('/getuser', (req, res) => {
    const name = req.body.name;
    const loginId = req.body.loginId;
    const SISId = req.body.SISId;
    const Section = req.body.Section;
    const Email = req.body.Email;
    res.send({name, loginId, SISId, Section, Email});
  })

module.exports = alive;