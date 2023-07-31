//normal export
getName = () =>{
    return 'Ashikur Rahman';
}
// exports.name=getName;


//Multiple export
getAge = () =>{
    return 25;
}
getGender = () =>{
    return 'Male';
}

module.exports={
    getName,
    getAge,
    getGender
}