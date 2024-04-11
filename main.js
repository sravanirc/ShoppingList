//array of items created
let groceryItems = [];

// This function gets each item with the given id and changes its style to line-through
function setDefaultChecked(item){
    let selected = document.getElementById(item);
    selected.setAttribute("class","checked");
}   

function addItem(){
    let text= document.getElementById("inputItem");
    if(text.value==""){
        alert("Item cannot be empty. Enter item to add to your list.")
    } else{
    groceryItems.push(text.value);
    let newItem= document.createElement("li");                                                                            
    newItem.setAttribute("id",text.value);
    newItem.textContent = text.value;
    newItem.innerHTML += `<span class="delete" id=${text.value} >\u00D7</span>`;
    document.getElementById("groceryList").appendChild(newItem);
    text.value="";
    }
    
}
// This function deletes the selected based on where the click event occurs
function deleteItem(item){
    let str= item.target;
    //console.log(str.id);
    if(str.textContent=='\u00D7'){ // this is to delete only when the X is clicked and nowehere else
        groceryItems.splice(groceryItems.indexOf(str.id),1);
        document.getElementById(str.id).remove();
      }   
}

document.getElementById("groceryList").addEventListener("click",deleteItem);
document.getElementById("addNewItem").addEventListener("click",addItem);
document.getElementById("inputItem").addEventListener("keyup",(event)=>{if(event.key==="Enter"){addItem()}}); //adds item to shoppinglist when enter key is pressed
let spans= document.querySelectorAll(".delete");
spans.forEach((item)=>addEventListener("click",deleteItem));


let list = document.getElementById("groceryList");
list.addEventListener("click", (event)=>{ if(event.target.tagName==='LI'){setDefaultChecked(event.target.id)}});