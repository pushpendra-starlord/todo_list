window.onload = () => {
    let form1 = document.querySelector('#addForm');
    let items = document.querySelector('#items');
    let submit = document.querySelector('#submit');

    form1.addEventListener('submit', addItem);
    items.addEventListener('click', removeItem);
}

function addItem(e){
    e.preventDefault();
    
    let newItem = document.querySelector('#item').value;

    if( newItem.trim() == "" || newItem.trim() == null){
        return false;
    }else{
        document.querySelector('#item').value == "";
    }

    let li = document.createElement('li');
    li.className = 'list-group-item';

    let deleteButton = document.createElement('button');
    deleteButton.className = "btn-danger btn btn-sm float-right"
    deleteButton.appendChild(document.createTextNode("Delete"));

    let editButton = document.createElement('button');
    editButton.className = "btn-success btn btn-sm float-right"
    editButton.appendChild(document.createTextNode('Edit'));

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    items.appendChild(li);

}

function removeItem(){

}

function toggleButton(ref, btnId){
    document.querySelector(`#${btnId}`).disabled = false; 
}