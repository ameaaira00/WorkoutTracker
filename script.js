let goal = 91; // required day to create a habit
let counter;
let fileName = "./data.json"

function onLoad() {
    updateDate();
    checkData();
}

function checkData(){
    //fetch local file. Should run on a simple server HTTP or HTTPS 

    /*To run a server:
    1. install Node.js. FOllow https://phoenixnap.com/kb/install-node-js-npm-on-windows
    2. Run server https://www.youtube.com/watch?v=pWh-hWVx1Kk
    2a. Install JSON Server `npm install -g json-server`
    2b. Create json file as database
    2c. Start JSON server `json-server --watch fileName.json`
   3. npx create-react-app crud-front
    */


    let jsonData;

    fetch(fileName)
        .then(res => res.json())
        .then(data => {
        jsonData = data;
        })   
        .then(() => {

            counter = Object.keys(jsonData["data"]).length
            console.log(counter);
            let count=1
            let interval = setInterval(()=>{
                if (count<counter+1) {
                    document.getElementById("Counter").innerHTML= count
                    count++
                }
                else{
                    clearInterval(interval)
                }
            },60)
        });    
}


function updateDate(){
    document.getElementById("inputDate").valueAsDate = new Date();
}


function logWorkout(){
    let date =  document.getElementById("inputDate").value;
    let note =  document.getElementById("inputNote").value;
    let jsonBtn = document.getElementById("Button")
    console.log(date);
    console.log(note);
    console.log(counter)

    // Defining new data to be added    
    let newData = {}

    newData[counter] = {
        "Date":date,
        "Note":note
    }

    fetch(fileName,{
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newData),
    })
    // $.ajax({
    //     method: "POST",
    //     url: fileName,
    //     data: newData,
    //     success: (posRes) => {
    //         console.log(posRes)
    //     },
    //     error: (errRes) => {
    //         console.log(errRes)
    //     }
    // })
    // Storing the JSON format data in myObject
}

