var fs=require('fs');

fs.readFile('./assets/srcFile.txt','utf8',function(err,data){
    if(err)throw err;
    console.log(data);
});
fs.writeFile('./assets/dstFile.txt','Hello world',function(err){
    if(err){console.log(err);
    }else
    console.log('Write operation complete.');
});
console.log('main done');