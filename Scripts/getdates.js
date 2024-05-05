const today=new Date();
let thisYear=today.getFullYear();
let copyright="©" + thisYear + "\nShay Brown" + "\nMissouri, United States";
document.getElementById("copyright").innerText=copyright;
document.getElementById("lastModified").innerText="Last Modification: " + document.lastModified;