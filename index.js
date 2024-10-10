const http=require("http")

const serveur=http.createServer((req,res)=>{
    
    if(req.url==="/"){
        
    res.end("hhfhfhf")
    return
    }
    res.end("kkkkkkkkdd")
})

serveur.listen(65535)

const _=require("lodash")
const arr=[1,[2]]
console.log(_.flattenDeep(arr))