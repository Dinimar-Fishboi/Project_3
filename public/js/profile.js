// const inputText = document.querySelector('#txt');
// const myButtons = document.querySelector('.btn-list');
// const list = document.querySelector('.container ul');

// myButtons.addEventListener('click',(e)=>{
  
//     if(inputText.value != ""){
//          e.preventDefault();

//         const myLi = document.createElement('li');
//         myLi.innerHTML = inputText.value;
//         list.appendChild(myLi);
//         var btn = document.createElement("BUTTON");
//         btn.innerHTML = "Put";
//         myLi.appendChild(btn);
//         var btn2 = document.createElement("BUTTON");
//         btn2.innerHTML = "Delete";
//         myLi.appendChild(btn2);
//     }

//     btn2.onclick = function(evt){
//         evt.target.parentElement.remove();
//     }

//     btn.onclick = function (evt) {
//      window.location.href = "put.html";
//     }

//     inputText.value="";
// })

// getting the variables to post new content.

async function addNewItem(event){
    event.preventDefault();

    const title = document.querySelector('#txt').value.trim();
    const description = document.querySelector('#lname').value.trim();
    const category_id = document.getElementById('category').value;

    // const e = document.getElementById("dropdown");
    // const category_id = e.options[e.selectedIndex].text;
    console.log(category_id); 

    if (title && description && category_id) {
        const response = await fetch('/api/items', {
            method: 'POST',
            body: JSON.stringify({ title, description, category_id }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            console.log(response);
            document.location.replace('/userProfile');
        } else {
            console.log(response.statusText);
        }
        } else {
            console.log("missing components, unable to POST")
        }
};

// Update an existing item
async function updateItem(event){
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const category_id = document.getElementById('category').value; 
    const itemId = document.querySelector('#mainContainer').dataset.item;
    console.log(`itemid ${itemId}`);

    if (title && description && category_id) {
        const response = await fetch(`/api/items/${itemId}`, {
            method: 'PATCH',
            body: JSON.stringify({ title, description, category_id }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            console.log(response);
            document.location.replace('/userProfile');
        } else {
            console.log(response.statusText);
        }
        } else {
            console.log("Unable to update your item.");
        }
};

// Delete an existing item
async function deleteItem(event){
    event.preventDefault();
    const itemId = document.querySelector('#mainContainer').dataset.item;
    console.log(`itemid ${itemId}`);

    if (itemId) {
        const response = await fetch(`/api/items/${itemId}`, {
            method: 'DELETE',
            // body: JSON.stringify({ title, description, category_id }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            console.log(response);
            document.location.replace('/userProfile');
        } else {
            console.log(response.statusText);
        }
        } else {
            console.log("Unable to delete your item.");
        }

}




document.getElementById('updateBtn').addEventListener('click',updateItem);
document.getElementById('delItemBtn').addEventListener('click',deleteItem);

