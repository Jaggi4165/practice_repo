function getJSON(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
  }
 })
 })
}

//calling the function

getJSON("./task.json").then(d=>{
 console.log(d)
 basic_details(d.details);

})
//****************************************************************   1st person details   ************************



var title=document.querySelector(".profile1_title1");

var heading = document.createElement("h1");
heading.textContent="My Resume";
heading.setAttribute("id","profile1_title1")
title.appendChild(heading);



var main=document.querySelector(".row");





function basic_details(SDC) {
// start the dynamic page content....

//************* 1st div *****************
var card1=document.createElement("div");
card1.setAttribute("class","col-sm-6");
card1.setAttribute("id","card1");


var img = document.createElement("img");
img.src=SDC.photo;
 card1.appendChild(img);

 var heading1 = document.createElement("h1");
heading1.textContent=SDC.name; 
heading1.setAttribute("id","heading1");
card1.appendChild(heading1);

 var age1 = document.createElement("h3");
age1.textContent="My age is : "+SDC.age;
age1.setAttribute("id","heading1");
card1.appendChild(age1);


var father1 = document.createElement("h3");
father1.textContent="Father name : "+SDC.fathername;
father1.setAttribute("id","heading1");
card1.appendChild(father1);
var mother1 = document.createElement("h3");
mother1.textContent="Mother name : "+SDC.mothername;
mother1.setAttribute("id","heading1");
card1.appendChild(mother1);



var edu_details_title=document.createElement("h6");
edu_details_title.textContent="EDUCATIONAL DETAILS : ";
edu_details_title.setAttribute("id","edu_details");
card1.appendChild(edu_details_title);

var para=document.createElement("h6");
para.setAttribute("id","para");
para.textContent="SSC : "+SDC.SSC;
card1.appendChild(para);
var para1=document.createElement("h6");
para1.setAttribute("id","para");
para1.textContent="INTER : "+SDC.INTER;
card1.appendChild(para1);
var para2=document.createElement("h6");
para2.setAttribute("id","para");
para2.textContent="DEGREE : "+SDC.DEGREE;
card1.appendChild(para2);
var para3=document.createElement("h6");
para3.setAttribute("id","para");
para3.textContent="MCA : "+SDC.MCA;
card1.appendChild(para3);

 main.appendChild(card1);

 var hline=document.createElement("hr");
card1.appendChild(hline);

//************* 2nd div *****************
var right=document.createElement("div");
right.setAttribute("class","col-sm-6");
right.setAttribute("id","card2");

var known_languages = document.createElement("h6");
known_languages.textContent="KNOWN LANGUAGES : ";
known_languages.setAttribute("id","known_languages");
right.appendChild(known_languages);
var ul=document.createElement("ul");
 for (var i = 0; i < SDC.language.length; i++) {
    var li=document.createElement("li");
    li.textContent=SDC.language[i];
    ul.appendChild(li)  
 }
 right.appendChild(ul);


var hobbies1 = document.createElement("h6");
hobbies1.textContent="HOBBIES : ";
hobbies1.setAttribute("id","hobbies1")
right.appendChild(hobbies1);
// document.createElement("hr");

var ul=document.createElement("ul");
 for (var i = 0; i < SDC.hobbies.length; i++) {
    var li=document.createElement("li");
    li.textContent=SDC.hobbies[i];
    ul.appendChild(li)  
 }

 right.appendChild(ul);

 var course1 = document.createElement("h6");
course1.textContent="PROGRAMMING SKILLS : ";
course1.setAttribute("id","course1")
right.appendChild(course1);
// document.createElement("hr");

var ul=document.createElement("ul");
 for (var i = 0; i < SDC.courses.length; i++) {
    var li=document.createElement("li");
    li.textContent=SDC.courses[i];
    ul.appendChild(li)  
 }

 right.appendChild(ul);






// var ssc=document.createElement("p");
// ssc.textContent="SSC : "+SDC.education_details[SSC];
// right.appendChild(ssc);


 main.appendChild(right);

}

