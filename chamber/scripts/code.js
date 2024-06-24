const today=new Date();
let thisYear=today.getFullYear();
let copyright="©" + thisYear + "\nShay Brown" + "\nWDD 230 - Web Frontend Development I";
document.getElementById("copyright").innerText=copyright;
document.getElementById("lastModified").innerText="Last Modification: " + document.lastModified;

const hamButton = document.getElementById("menu");
const navigation = document.getElementById("navigation");

hamButton.addEventListener('click', () => {  
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
  });  

  darkMode.addEventListener('click', () => {  
    document.getElementById("navigation").classList.toggle('darker');
    document.getElementById("footer").classList.toggle('darker');
    document.getElementById("header").classList.toggle('darkest');
    document.getElementById("main").classList.toggle('dark');
  });