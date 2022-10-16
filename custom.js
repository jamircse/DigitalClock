hourUrl=document.querySelector(".hourdata");
minuteUrl=document.querySelector(".minutedata");
secondUrl=document.querySelector(".seconddata");
ampmurl=document.querySelector("#ampm");


var digitalclock=()=>{
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    let ampm=h>=12?'PM':'AM';

    h=h<10?'0'+h:h>12?h-12:h;
    m=m<10?'0'+m:m;
    s=s<10?'0'+s:s;
    
    hourUrl.innerText=h;
    minuteUrl.innerText=m;
    secondUrl.innerText=s;
    ampmurl.innerText=ampm;
    setTimeout(()=>{
        digitalclock();
    },1000);

}


digitalclock();