const fs = require('fs');
fs.unlink('demo2.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("successfully Deleted demo2.txt");
    }
})