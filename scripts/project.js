function LoadTree()
{
    var ul = document.getElementById("location");
    var li;

    let level=0;
    let count=0;
    while (count<globalTrees.length)
    {
        if (globalTrees[count].type!="M")
        {
            li = document.createElement("li");
            li.textContent=globalTrees[count].description;
            ul.appendChild(li);
        }
        count++;
    }
    window.alert(count);
}

LoadTree();