const submitBtn = document.getElementById('submitBtn');

function displayPrice(e) {
    e.preventDefault();
    const itemPrice = document.getElementById('selectMenu').value;
    const quantity = document.getElementById('itemQuantity').value;

    if (quantity > 0) {
        const displayDetails = document.getElementById('display-details');
        let total = itemPrice * quantity;
        displayDetails.innerHTML = `Your total is $${total}`;
    } else {
        alert("400 : Quantity must be positive integer");
    }
}

submitBtn.addEventListener('click', displayPrice);




