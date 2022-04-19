const fs = require("fs")
const axios = require("axios")

function cat(path,out){
    fs.readFile(path,'utf8',function(err,data){
        if(err){
            console.log(err);
            process.kill(1)
        } else{
            outputFile(data,out)
        }

    });
}


async function webCat(url,out){
    try{
    let res = await axios.get(url);
    outputFile(res.data,out)
    }
    catch(err){
        console.log(`Error, failed with ${err}`)
        process,kill(1)
    }
}


function outputFile(text,out){
    if (out){
        fs.writeFiler(out,text,'utf8', function(err){
            if (err){
                console.log(err);
                process.kill(1);
            }
        });
        }else{
            console.log(text);
        }
    }




if (path.indexOf("http") == -1){
    cat(path,out);
} else{
    webCat(path,out);
}
