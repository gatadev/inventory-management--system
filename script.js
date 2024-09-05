let inventory = [];

function addProduct() {
    const productName = document.getElementById('productName').value;
    const productQuantity = document.getElementById('productQuantity').value;

    if (productName === '' || productQuantity === '') {
        alert('Please fill in both fields');
        return;
    }

    const product = {
        name: productName,
        quantity: parseInt(productQuantity),
    };

    inventory.push(product);
    renderInventory();
    clearFields();
}
function renderInventory() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = '';

    inventory.forEach((product, index) => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = product.name;

        const quantityCell = document.createElement('td');
        quantityCell.textContent = product.quantity;

        const actionCell = document.createElement('td');
        actionCell.innerHTML = `
            <button class="edit-btn" onclick="editProduct(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteProduct(${index})">Delete</button>
        `;

        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        row.appendChild(actionCell);

        inventoryList.appendChild(row);
    });
}
function clearFields() {
    document.getElementById('productName').value = '';
    document.getElementById('productQuantity').value = '';
}

function deleteProduct(index) {
    inventory.splice(index, 1);
    renderInventory();
}

function editProduct(index) {
    const product = inventory[index];
    document.getElementById('productName').value = product.name;
    document.getElementById('productQuantity').value = product.quantity;
    deleteProduct(index);
}