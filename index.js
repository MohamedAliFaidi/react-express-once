const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helmet= require("helmet")



const app = express();


app.use(helmet())
app.use(helmet.hidePoweredBy())
app.use(helmet.frameguard({action: 'deny'}))
app.use(helmet.xssFilter())
app.use(helmet.noSniff())
app.use(helmet.ieNoOpen())
app.use(helmet.hsts({maxAge:90*24*60*60 , force: true}))
app.use(helmet.dnsPrefetchControl())
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
    },
  })
);


const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app in 
app.use(express.static(path.join(__dirname, 'view/dist')));



// API routes (if any)
// app.use('/api', require('./routes/api'));

//All other requests are handled by React in 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/dist', 'index.html'));
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
