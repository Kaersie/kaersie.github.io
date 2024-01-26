function susername(x,cname){
    var x=prompt("请输入您的名字");
    if(x==null || x=="" ){
        window.alert("名字不能为空");
    }
    else{
        window.document.getElementById("username").textContent=x+"，您好！";
        

    } 
}