var getul = document.getElementById("ul")

function addtodo(){
    
    var getinp = document.getElementById("inp")
    var createli = document.createElement("li")
    var litext = document.createTextNode(getinp.value)
    getul.appendChild(createli)
    createli.appendChild(litext)
    getinp.value = ''
    createli.style.color = "white"
    createli.style.padding = "5px 10px 5px 10px"
    createli.style.fontSize ="large"
    
    var dellbtn = document.createElement("button")
    var delltext = document.createTextNode("DELL")
    dellbtn.appendChild(delltext)
    createli.appendChild(dellbtn)
    dellbtn.setAttribute('onclick','Dellbtn(this)')
    dellbtn.style.backgroundColor = "rgb(172, 16, 5)" 
    dellbtn.style.color = "white" 
    dellbtn.style.borderRadius = "10px"
    dellbtn.style.padding = "8px 15px 8px 15px"
    dellbtn.style.margin = "10px"
    dellbtn.style.border = "none"
    dellbtn.style.fontSize ="200"

    


    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("Edit")
    editbtn.appendChild(edittext)
    createli.appendChild(editbtn)
    editbtn.setAttribute('onclick','Edit(this)')
    editbtn.style.backgroundColor = "green" 
    editbtn.style.color = "white" 
    editbtn.style.borderRadius = "10px"
    editbtn.style.padding = "8px 15px 8px 15px"
    editbtn.style.border = "none"
    editbtn.style.fontSize ="200"

}

function Dellbtn(e){
    e.parentNode.remove()
}

function DEllall(){
    getul.innerHTML = ""
}

function Edit(a){
    var pc = prompt("Enter updated value" , a.parentNode.firstChild.textContent)
    a.parentNode.firstChild.textContent = pc
}