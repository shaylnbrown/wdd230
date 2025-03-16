let now=new Date();
document.getElementById("copyright").innerText = "©" + now.getFullYear() + " " + document.getElementById("copyright").innerText;
document.getElementById("lastModified").innerText += document.lastModified;
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

  let visitCount = Date(window.localStorage.getItem("lastVisit")) || Date.now();

  const joinButton = document.getElementById("joinButton");
  joinButton.addEventListener('click', () => {  
    document.location.href="thankyou.html";
  });  

  const formLoaded=document.getElementById("formLoaded");
  formLoaded.textContent=Date.now();