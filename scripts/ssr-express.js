const express = require('express');
const nextjs = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = nextjs({dev});
const handle = app.getRequestHandler();

(async ()=>{
    try{
        const prepare = await app.prepare();
        const server = express();
        server.get('*',(req,res)=>handle(req,res));
        server.listen(3000,err=>{
                    if(err) {console.log("Got Error on server.listen",err)};
                    console.log('>Ready on localhost');
                })
    }
    catch(err){throw err;}
})();