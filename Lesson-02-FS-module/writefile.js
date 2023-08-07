const fs= require('fs');
fs.writeFile('demo1.txt', 'My name is Ashikur Rahman', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('success');
    }
})
//jodi same nam er file age thekei thake tahole eta over write korbe .....
//age ja chilo seta dlt hoe new data boshbe..add korte chaile appendFile use korte hobe