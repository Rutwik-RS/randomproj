const tinput = document.getElementById("taskin");
const tform = document.getElementById("taskForm");  
const tlist = document.getElementById("taskList");
const submit = document.getElementById("submit");
const butt = document.querySelectorAll(".filter");
const count = document.getElementById("count");
const addbtn = document.getElementById("add");
let tasks =[];
let t=0;
tform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const li = document.createElement("li");
    const span = document.createElement("span");
    const inp = tinput.value.trim();
    const delbtn = document.createElement("button");
    delbtn.addEventListener("click",()=>{
        li.remove();
        t--;
        count.innerText = t+" tasks";
    });
 if(!inp) return;
 else{
 t++;
 count.innerText = t+" tasks";
span.textContent  = inp;
delbtn.textContent = "X";
li.append(span,delbtn);
tlist.appendChild(li);
tinput.value ="";
 }
});
butt.forEach(b=>{
    b.addEventListener("click",()=>{
        const type = b.dataset.filter;
        const items = tlist.querySelectorAll("li");
        items.forEach(it=>{
            if(type == "all")                   
                it.style.display = "flex";
            else if(type == "completed")
            {
                it.style.display = it.classList.contains("completed")?"flex":"none";
            }
            else
            {
                it.style.display = !it.classList.contains("completed")?"flex":"none";
            }
        });
    });
});