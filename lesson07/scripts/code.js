const today=new Date();
let thisYear=today.getFullYear();
let copyright="©" + thisYear + "\nShay Brown" + "\nWD 230 - Lazy Loading";
document.getElementById("copyright").innerText=copyright;
document.getElementById("lastModified").innerText="Last Modification: " + document.lastModified;