function toggleBagItems() {
    const bagItems = document.querySelector('.bag-items');
    const items = bagItems.querySelectorAll('.item');
    const isEmptyMessagePresent = !!bagItems.querySelector('.empty-bag-message');
    let selectedSize = null;

    if (items.length === 0 && !isEmptyMessagePresent) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'Sua sacola está vazia.';
        emptyMessage.classList.add('empty-bag-message'); 
        bagItems.appendChild(emptyMessage);
    }

    bagItems.style.display = bagItems.style.display === 'block' ? 'none' : 'block';
}

function addToBag() {
    const bagQuantity = document.querySelector('.bag-quantity');
    const bagItems = document.querySelector('.bag-items');

    const emptyMessage = bagItems.querySelector('.empty-bag-message');
    if (emptyMessage) {
        bagItems.removeChild(emptyMessage);
    }

    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
        <img src="./images/camiseta.png" alt="Camiseta">
        <div>
            <strong>Camiseta</strong>
            <span>R$79,90</span>
        </div>
        <h3>1</h3>
    `;
    bagItems.appendChild(newItem);

    let quantity = parseInt(bagQuantity.textContent) || 0;
    bagQuantity.textContent = quantity + 1;

    toggleBagItems();
}
    

const addToBagButton = document.querySelector('.button');
addToBagButton.addEventListener('click', addToBag);


