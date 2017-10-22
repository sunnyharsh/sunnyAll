app2.filter("initcap",()=>{
    return function(str,args,x){
        console.log('Args is ',args);
        console.log('x Args is ',x);
        return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    
    }
});
app2.filter("repeat",()=>{
    return function(str,start,end){
        var result = "";
        for(let i = parseInt(start); i<=parseInt(end);i++){
            result += str +" ";
        }
        return result;
    
    }
});