// //jodi all function access korte chai
const s1=require('./student');
console.log(s1.getName());
console.log(s1.getAge());
console.log(s1.getGender());


//single function import
const{getAge}=require('./student');
console.log(getAge());
