// individual css property

let heading1 = document.getElementById("headingcss")
heading1.style.backgroundColor = "red";

// Css text property

let heading1 = document.getElementById("headingcss")
heading1.style.cssText = (" background-color: pink ; color: red;" )

//adding classnames

let heading1 = document.getElementById("headingcss")
heading1.classList.add("headingbig");

//inner text

let para1 = document.getElementById("paragraph")
console.log(para1.innerText);

//text content

let para1 = document.getElementById("paragraph")
console.log(para1.textContent);

//inner html

let para1 = document.getElementById("paragraph")
console.log(para1.innerHTML);

//onclick 

function redall(){
    console.log("button red clicked!");
}




function yellowall(){
    
    
    console.log("button yellow clicked");
}