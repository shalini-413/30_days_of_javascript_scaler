function getExtension(file){

    // get file extension
    const ext = file.split('.').pop();
    return ext;
}

// passing the filename
const output1 = getExtension('challenge.js');
console.log(output1);