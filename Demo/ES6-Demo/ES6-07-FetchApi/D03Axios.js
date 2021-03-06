const axios = require("axios"); //external library  https://github.com/axios/axios
let httpsProxyAgent = require('https-proxy-agent');

var agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');


const mockDataUrl="https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
const echoPostUrl="https://postman-echo.com/post";

var config = {
       httpsAgent: agent
}


//1) Get request (inspect) response 

/*
    axios.get(mockDataUrl,config)
    .then((response) => {
     console.log(response.data);
       //console.log(response.status);
    //console.log(response.statusText);
       //console.log(response.headers);
       //console.log(response.config);
    }).catch((exception)=>{
        console.log(exception);
    });
*/  

//2) POST request (inspect) response

    const options = {
        headers: {"Content-Type": "application/json","Accept": "application/json" },
        httpsAgent: agent
    };
    var data = {firstName: "Stefano", lastName:"Fiorenza"};

    axios.post(echoPostUrl, data, options)
    .then((response) => {
        console.log("response from echo server");
        console.log(response.config);
    }).catch((exception)=>{
        console.log(exception);
    });


//3) axios.all  Handler is called only when ALL response have been received
// execute simultaneous requests 
/*
axios.all([
    axios.get('https://api.github.com/users/mapbox'),
    axios.get('https://api.github.com/users/phantomjs')
  ])
  .then(responseArr => {
    //this will be executed only when all requests are complete
    console.log('Date created: ', responseArr[0].data.created_at);
    console.log('Date created: ', responseArr[1].data.created_at);
  });
  */