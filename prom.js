

var request= require("request")
function restcall(){

    var options={
        method: 'POST',
            url: 'https://api.dialogflow.com/v1/query',
            qs: { v: '20150910' },
        headers:{
            'cache-control': 'no-cache',
            Authorization: 'Bearer '+'3bcfc76462af43d8bed69e1aeb22ead0',
            'Content-type': 'application/json' 
        },
        body:{
            lang: 'en',
            query: "hello",
            sessionId: '7f4c58e0-babf-41d4-83d7-6e3b8aca0189'
        },
        json:true

    };

    return new Promise((resolve,reject)=>{
        
        request(options,(error,response,body)=>{
            if(error){
                reject(error)
            }else{
                resolve(body)
            }
        });
    });

}

function process1(){
    console.log("executing process1");
}

function process2(){
    setTimeout(console.log("READ FROM DB"),3000)
}


function main(){
    restcall()
    .catch((error)=>{
        console.log("ERROR",error);
    })
    .then((data)=>{
        console.log("PRINTING",data)
    })
    .then(()=>{process1()})    
}

main()

