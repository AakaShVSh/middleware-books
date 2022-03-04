const take = require("express")
const run = take();

run.use(middleware);

run.get("/books",(req,res) => {
    res.send("Fetching all books");
})

run.get("/books/:HarryPotter",(req,res) => {
    return res.send({bookName:req.name});
})

function middleware(req,res,next){
    if(req.path==="/books"){
        req.role = "fatching all books";
    }
    else if(req.path === "/books/:HarryPotter"){
        req.name = "HarryPotter";
    }
    next();
}

run.listen(5000,() => {
    console.log("running on 5000 portal")
})