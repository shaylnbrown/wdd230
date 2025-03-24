const weekList=document.getElementById("weeks");

async function getMembers()
{    
    const response = await fetch("../data/members.json");
    const data = await response.json();
    
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        window.alert(member.name);        
        
    });
}

getMembers();