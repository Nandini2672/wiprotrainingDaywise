enum HttpStatusCode {
    OK = 200,
    NOTFOUND = 404,
    ACCESSDENIED = 403,
    INTERNALERROR = 500
}


console.log(HttpStatusCode.OK);
console.log(HttpStatusCode.NOTFOUND); 


console.log(HttpStatusCode[200]); 
console.log(HttpStatusCode[500]); 
