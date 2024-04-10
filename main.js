//array of items created
let groceryItems = [];


//this function creates an element for each item in the list and gives it id of itemtext. 

function displayItems(){
let list= document.getElementById("groceryList");
  list.innerHTML="";
  if(groceryItems.length==0){
    document.getElementById("groceryList").addEventListener("click",deleteItem); // this is to initialise the evenlistener for deletItems/ 
  }
  groceryItems.forEach((item)=>{
  let eachItem = document.createElement("li");                                                                            
  eachItem.setAttribute("id",item);
  eachItem.textContent = item;
  eachItem.innerHTML += `<span class="delete" id=${item} >\u00D7</span>`;
  list.appendChild(eachItem);
  });
  //deleteItem();

}

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
    console.log(str.id);
    if(str.textContent=='\u00D7'){ // this is to delete only when the X is clicked and nowehere else
        groceryItems.splice(groceryItems.indexOf(str.id),1);
        displayItems();
        }   
}

displayItems();
let butt = document.getElementById("addNewItem");
butt.addEventListener("click",addItem);
document.getElementById("inputItem").addEventListener("keyup",(event)=>{if(event.key==="Enter"){addItem()}}); //adds item to shoppinglist when enter key is pressed
let spans= document.querySelectorAll(".delete");
console.log(spans);
spans.forEach((item)=>addEventListener("click",deleteItem));
// setDefaultChecked(groceryItems[0]);
// setDefaultChecked(groceryItems[1]);

let list = document.getElementById("groceryList");
list.addEventListener("click", (event)=>{ if(event.target.tagName==='LI'){setDefaultChecked(event.target.id)}});