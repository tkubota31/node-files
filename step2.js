const fs = require("fs")
const axios = require("axios")

function cat(path){
    fs.readFile(path,'utf8',function(err,data){
        if(err){
            console.log(err);
            process.kill(1)
        } else{
            console.log(data)
        }

    });
}



async function webCat(url){
    try{
    let res = await axios.get(url);
    console.log(res)
    }
    catch(err){
        console.log(`Error, failed with ${err}`)
        process,kill(1)
    }
}

let path = process.argv[2];
if (path.indexOf("http") == -1){
    cat(path);
} else{
    webCat(path);
}
