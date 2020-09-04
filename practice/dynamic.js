// anonomous function

// (function(){

//  })

// XMLHttpRequest(AJAX call)
 
function getJSON(file,callback){
 var xhr=new XMLHttpRequest();
 xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange = function(){
     if (xhr.readyState =="4" && xhr.status ===200) {
          callback(xhr.responseText);
     }
    }
   xhr.send(); 
}

// calling the function
getJSON("data.json",function(text) {
 var d = JSON.parse(text);
 console.log(d);
 basic_details(d.details);
})

var main=document.querySelector(".parent-div");

function basic_details(SDC) {
 var n = document.createElement("h1");
 n.textContent=SDC.name;
 main.appendChild(n);
}
