const fs= require('fs');
fs.appendFile('demo1.txt', ". I am from Naogaon", (err) => {
    if(err){
        console.log(err);

    }else{
        console.log("Text added successfully");
    }
})