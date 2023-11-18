const { remote } = require('electron');
const fs = require('fs');
const path = require('path');

window.addEventListener('DOMContentLoaded', () => {
  const data = {
    product_id: 654321,
    title: 'Product A',
    price: '15000.00',
    sku: '1307A 0101000',
  };
  function createJSONFile() {
    const jsonData = JSON.stringify(data);
    fs.writeFileSync('./data.json', jsonData);
  }
  const jsonData = fs.readFileSync('./data.json', 'utf8');
  const productData = JSON.parse(jsonData);

  function insertProductRows(numRows) {
    const tableBody = document.getElementById('product-table-body');

    for (let i = 0; i < numRows; i++) {
      const newRow = tableBody.insertRow();

      // Add the first column
      const cell1 = newRow.insertCell();
      cell1.textContent = `${productData.product_id}`;
      cell1.style.border = '3px solid #ccc';

      // Add the second column
      const cell2 = newRow.insertCell();
      cell2.textContent = `${productData.title}`;
      cell2.style.border = '3px solid #ccc';

      // Add the third column
      const cell3 = newRow.insertCell();
      cell3.textContent = `${productData.price}`;
      cell3.style.border = '3px solid #ccc';

      // Add the fourth column
      const cell4 = newRow.insertCell();
      cell4.textContent = `${productData.sku}`;
      cell4.style.border = '3px solid #ccc';
    }
  }
  insertProductRows(1);
})