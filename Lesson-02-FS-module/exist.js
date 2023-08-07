const fs = require('fs');
fs.exists('demo1.txt', (result)=>{
    if (result){
        console.log("Demo1.txt exists");
    }else{
        console.log("not found");
    }
})