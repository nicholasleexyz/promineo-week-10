const tableBody = document.getElementById('item-table-body');

function createItemRow() {
	const itemName = document.getElementById('item-name').value;
	const itemType = document.getElementById('item-type').value;
	const itemPrice = document.getElementById('item-price').value;
	const itemDescription = document.getElementById('item-description').value;
	const itemWeight = document.getElementById('item-weight').value;

	const item = {
		name: itemName.trim(),
		type: itemType.trim(),
		price: itemPrice.trim(),
		description: itemDescription.trim(),
		weight: itemWeight.trim()};

	for (const key in item) {
		if (key === '' || item[key] === '') {
			console.log(key + ': ' + item[key]);
			return;
		}
	}

	const row = document.createElement('tr');
	// eslint-disable-next-line guard-for-in
	for (const key in item) {
		console.log(key + ': ' + item[key]);
		const element = document.createElement('td');
		const node = document.createTextNode(item[key]);

		element.appendChild(node);
		row.appendChild(element);
	}

	tableBody.appendChild(row);
}

function addItem() {
	createItemRow();
}

const buttonAddItem = document.getElementById('button-add-item');
buttonAddItem.onclick = addItem;
