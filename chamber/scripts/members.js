const mainElement=document.getElementById("members");
async function getMembers()
{    
    const response = await fetch("../chamber/data/members.json");
    const data = await response.json();    
    displaySections(data.members);
}

const displaySections = (members) => {
    members.forEach((member) => {
        let memberSection = document.createElement("section");
        memberSection.classList.add("memberSection");

        let memberAttribute = document.createElement("img");
        memberAttribute.src = member.image;
        memberAttribute.classList.add("memberThumb");
        memberSection.appendChild(memberAttribute);

        memberAttribute = document.createElement("h3");
        memberAttribute.textContent = member.name;
        memberSection.appendChild(memberAttribute);

        memberAttribute = document.createElement("h3");
        memberAttribute.textContent = member.membership + " Membership";
        memberSection.appendChild(memberAttribute);

        memberAttribute = document.createElement("h3");
        memberAttribute.textContent = "Joined on " + member.joined;
        memberSection.appendChild(memberAttribute);

        memberAttribute = document.createElement("h3");
        memberAttribute.textContent = member.address;
        memberSection.appendChild(memberAttribute);

        memberAttribute = document.createElement("h3");
        memberAttribute.textContent = member.phone;
        memberSection.appendChild(memberAttribute);

        memberAttribute = document.createElement("a");
        memberAttribute.textContent = member.URL;
        memberAttribute.url = member.URL;
        memberSection.appendChild(memberAttribute);


        mainElement.appendChild(memberSection);
    });

}

getMembers();