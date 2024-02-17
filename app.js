const itemList = document.getElementById('item-list');
const addBtn = document.getElementById('add-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');

let items = [];

function addItem(event) {
  event.preventDefault();
  const newItem = document.getElementById('new-item').value;
  if (newItem === '') return;
  items.push(newItem);
  renderItems();
  document.getElementById('new-item').value = '';
}

function deleteItem(index) {
  items.splice(index, 1);
  renderItems();
}

function deleteAllItems() {
  items = [];
  renderItems();
}

function renderItems() {
  itemList.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteItem(index));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
  });
  deleteAllBtn.disabled = items.length === 0;
}

addBtn.addEventListener('click', addItem);
deleteAllBtn.addEventListener('click', deleteAllItems);
