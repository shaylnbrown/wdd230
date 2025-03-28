const weekList=document.getElementById("weeks");

async function getLinks()
{    
    const response = await fetch("/data/links.json");
    const data = await response.json();
    
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let item = document.createElement("li");
        let start = document.createElement("h3");
        start.textContent=week.week+":";        
        item.appendChild(start);  
        let first=true;      
        week.links.forEach((link) => {    
            let gap = document.createElement("h3"); 
            gap.textContent="|";
            if (!first) item.appendChild(gap);
            first=false;        
            let where = document.createElement("a");
            where.href=link.url;
            where.textContent=link.title;
            item.appendChild(where);
            first=false;
        });
        weekList.appendChild(item);
    });
}

getLinks();