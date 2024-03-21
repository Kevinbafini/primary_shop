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

function updateActiveSize() {
    document.querySelectorAll('.size-button').forEach(button => {
        button.classList.remove('active');
    });

    this.classList.add('active');
    window.selectedSize = this.getAttribute('data-size');
}


function addToBag() {
    const bagQuantity = document.querySelector('.bag-quantity');
    const bagItems = document.querySelector('.bag-items');

    if (!window.selectedSize) {
        alert("Por favor, selecione um tamanho antes de adicionar à sacola.");
        return;
    }

    const sizeText = `Tamanho: ${window.selectedSize}`;

    const emptyMessage = bagItems.querySelector('.empty-bag-message');
    if (emptyMessage) {
        bagItems.removeChild(emptyMessage);
    }

    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
        <img src="./images/camisa.png" alt="Camiseta">
        <div>
            <strong>Camiseta Preta Tradicional ${sizeText}</strong>
            <span>R$49,90</span>
        </div>
        <h3>1</h3>
    `;
    bagItems.appendChild(newItem);

    let quantity = parseInt(bagQuantity.textContent) || 0;
    bagQuantity.textContent = quantity + 1;

    toggleBagItems();

    clearActiveSizes();

    window.selectedSize = null;
}
    
const addToBagButton = document.querySelector('.button');
addToBagButton.addEventListener('click', addToBag);

document.querySelectorAll('.size-button').forEach(button => {
    button.addEventListener('click', updateActiveSize);
});

