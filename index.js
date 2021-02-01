const express = require('express')
const app = express()
const today=new Date()
const day = today.getDay()
const hour=today.getHours()

const timing=(req,res,next)=>{
    if (day>6 &&  hour >= 9 && hour < 17) {
        next();
      } else {
        res.sendFile(__dirname + '/Public/notfound.html')
      }
    }
app.use(timing)
app.use('/', express.static(__dirname + '/Public'));

const port = 5000;
app.listen(port, () => {
  console.log(`The Server is running on port ${port}`);
});