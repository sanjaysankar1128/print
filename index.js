let cars=["audi","alto","benz","swift","ambassador"]

for(let i = 0;i < cars.length;i++){
     first=cars[i].slice(0,1);
    last=cars[i].slice(-1);

    if(first ==="a"){
        document.getElementById("demo").innerHTML += cars[i] + "<br>";
    }
    

}