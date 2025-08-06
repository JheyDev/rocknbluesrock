// Mock API Data
const mockProducts = [
    // Cafés Quentes Clássicos
    {
        id: 1,
        name: "Blues Brother",
        description: "Um blend encorpado com notas de chocolate amargo e caramelo. Perfeito para quem gosta de sabores intensos.",
        price: 29.90,
        category: "quentes",
        image: "src/img/products/blues-brother.png",
        ingredients: [
            "Grãos de café arábica 100%",
            "Torrefação média-escura",
            "Notas de chocolate amargo",
            "Toque de caramelo natural",
            "Água filtrada"
        ]
    },
    {
        id: 2,
        name: "Rock Star Espresso",
        description: "Espresso premium com corpo intenso e crema dourada. Para quem precisa de energia para arrasar no palco.",
        price: 35.90,
        category: "espresso",
        image: "src/img/products/rock-star-espresso.png",
        ingredients: [
            "Blend especial de grãos arábica",
            "Torrefação italiana escura",
            "Extração sob pressão 9 bar",
            "Crema natural dourada",
            "Água purificada"
        ]
    },
    {
        id: 3,
        name: "Jazz Smooth",
        description: "Um café suave e aromático, ideal para momentos de contemplação e apreciação musical.",
        price: 32.50,
        category: "quentes",
        image: "src/img/products/jazz-smooth.png",
        ingredients: [
            "Grãos arábica colombianos",
            "Torrefação média clara",
            "Notas florais e cítricas",
            "Acidez equilibrada",
            "Água mineral"
        ]
    },
    {
        id: 4,
        name: "Heavy Metal Blend",
        description: "O mais forte da casa! Torrado escuro com notas defumadas e amargor acentuado.",
        price: 38.90,
        category: "quentes",
        image: "src/img/products/heavy-metal-blend.png",
        ingredients: [
            "Blend robusta e arábica (70/30)",
            "Torrefação francesa extra-escura",
            "Notas defumadas intensas",
            "Alto teor de cafeína",
            "Água filtrada"
        ]
    },
    {
        id: 5,
        name: "Acoustic Soul",
        description: "Café especial de origem única, com notas frutadas e acidez equilibrada.",
        price: 42.90,
        category: "gourmet",
        image: "src/img/products/acoustic-soul.png",
        ingredients: [
            "Grãos arábica etíopes Yirgacheffe",
            "Processo lavado",
            "Notas de frutas vermelhas",
            "Acidez brilhante",
            "Água de nascente"
        ]
    },
    {
        id: 6,
        name: "Electric Espresso",
        description: "Espresso com blend especial, corpo médio e finalização marcante.",
        price: 33.90,
        category: "espresso",
        image: "src/img/products/electric-espresso.png",
        ingredients: [
            "Blend arábica brasileiro e guatemalteco",
            "Torrefação média-escura",
            "Extração 25-30 segundos",
            "Corpo médio encorpado",
            "Água tratada"
        ]
    },
    {
        id: 7,
        name: "Country Morning",
        description: "Blend matinal suave, perfeito para começar o dia com tranquilidade.",
        price: 27.90,
        category: "quentes",
        image: "src/img/products/country-morning.png",
        ingredients: [
            "Grãos arábica suaves",
            "Torrefação média clara",
            "Notas de mel e baunilha",
            "Baixa acidez",
            "Água purificada"
        ]
    },
    {
        id: 8,
        name: "Punk Rock Shot",
        description: "Espresso concentrado e intenso. Para os momentos que pedem atitude.",
        price: 31.50,
        category: "espresso",
        image: "src/img/products/punk-rock-shot.png",
        ingredients: [
            "Blend robusta intenso",
            "Torrefação escura italiana",
            "Shot duplo concentrado",
            "Crema espessa",
            "Água mineral"
        ]
    },
    {
        id: 9,
        name: "Golden Oldies",
        description: "Café especial envelhecido, com sabor único e notas amadeiradas.",
        price: 49.90,
        category: "gourmet",
        image: "src/img/products/golden-oldies.png",
        ingredients: [
            "Grãos arábica envelhecidos 3 anos",
            "Processo de envelhecimento em barris",
            "Notas amadeiradas e especiarias",
            "Corpo complexo",
            "Água de fonte"
        ]
    },
    
    // Cafés Gelados
    {
        id: 10,
        name: "Ice Blues",
        description: "Cold brew gelado com notas de chocolate e baunilha. Refrescante e intenso.",
        price: 24.90,
        category: "gelados",
        image: "src/img/products/ice-blues.png",
        ingredients: [
            "Cold brew 12 horas",
            "Grãos arábica torrefação média",
            "Extrato de baunilha natural",
            "Calda de chocolate artesanal",
            "Gelo filtrado",
            "Água gelada"
        ]
    },
    {
        id: 11,
        name: "Frozen Rock",
        description: "Frappé com espresso duplo, leite cremoso e calda de caramelo.",
        price: 28.90,
        category: "gelados",
        image: "src/img/products/frozen-rock.png",
        ingredients: [
            "Espresso duplo gelado",
            "Leite integral vaporizado",
            "Calda de caramelo salgado",
            "Gelo triturado",
            "Chantilly natural",
            "Pitada de sal marinho"
        ]
    },
    {
        id: 12,
        name: "Summer Jazz",
        description: "Café gelado com leite de coco e toque de canela. Suave e tropical.",
        price: 26.50,
        category: "gelados",
        image: "src/img/products/summer-jazz.png",
        ingredients: [
            "Café filtrado gelado",
            "Leite de coco cremoso",
            "Canela em pó Ceylon",
            "Açúcar de coco",
            "Gelo de coco",
            "Raspas de coco fresco"
        ]
    },
    {
        id: 13,
        name: "Arctic Metal",
        description: "Cold brew extra forte com cubos de gelo de café. Para os corajosos.",
        price: 32.90,
        category: "gelados",
        image: "src/img/products/arctic-metal.png",
        ingredients: [
            "Cold brew concentrado 18 horas",
            "Blend robusta extra forte",
            "Cubos de gelo de café",
            "Água gelada filtrada",
            "Toque de açúcar mascavo"
        ]
    },
    {
        id: 14,
        name: "Smooth Operator",
        description: "Iced latte cremoso com calda de baunilha e chantilly.",
        price: 29.90,
        category: "gelados",
        image: "src/img/products/smooth-operator.png",
        ingredients: [
            "Espresso gelado duplo",
            "Leite integral cremoso",
            "Calda de baunilha Madagascar",
            "Chantilly batido na hora",
            "Gelo filtrado",
            "Açúcar cristal"
        ]
    },
    
    // Cafés com Whisky
    {
        id: 15,
        name: "Jack Daniel's Blues",
        description: "Café quente com whisky Jack Daniel's, açúcar mascavo e canela.",
        price: 45.90,
        category: "whisky",
        image: "src/img/products/jack-daniels-blues.png",
        ingredients: [
            "Café espresso quente",
            "Whisky Jack Daniel's Tennessee (30ml)",
            "Açúcar mascavo orgânico",
            "Canela em pau moída",
            "Chantilly levemente adoçado",
            "Pitada de noz-moscada"
        ]
    },
    {
        id: 16,
        name: "Jameson Rock",
        description: "Espresso com whisky irlandês Jameson, creme de leite e mel.",
        price: 48.90,
        category: "whisky",
        image: "src/img/products/jameson-rock.png",
        ingredients: [
            "Espresso duplo quente",
            "Whisky irlandês Jameson (35ml)",
            "Creme de leite fresco",
            "Mel de eucalipto",
            "Manteiga irlandesa",
            "Café irlandês tradicional"
        ]
    },
    {
        id: 17,
        name: "Bourbon Street",
        description: "Café com bourbon americano, xarope de maple e noz-moscada.",
        price: 52.90,
        category: "whisky",
        image: "src/img/products/bourbon-street.png",
        ingredients: [
            "Café filtrado forte",
            "Bourbon americano premium (40ml)",
            "Xarope de maple puro",
            "Noz-moscada ralada na hora",
            "Creme batido",
            "Açúcar demerara"
        ]
    },
    {
        id: 18,
        name: "Scottish Highlands",
        description: "Blend especial com whisky escocês single malt e toque de mel.",
        price: 65.90,
        category: "whisky",
        image: "src/img/products/scottish-highlands.png",
        ingredients: [
            "Café escocês premium",
            "Whisky single malt 12 anos (45ml)",
            "Mel de urze escocês",
            "Creme duplo escocês",
            "Aveia tostada",
            "Pitada de sal das Highlands"
        ]
    },
    {
        id: 19,
        name: "Tennessee Walker",
        description: "Café com whisky Tennessee, calda de caramelo e chantilly.",
        price: 47.90,
        category: "whisky",
        image: "src/img/products/tennessee-walker.png",
        ingredients: [
            "Café americano forte",
            "Whisky Tennessee (30ml)",
            "Calda de caramelo caseira",
            "Chantilly natural",
            "Açúcar mascavo",
            "Essência de baunilha"
        ]
    },
    
    // Cafés Gourmet Premium
    {
        id: 20,
        name: "Kopi Luwak Royale",
        description: "O café mais exclusivo do mundo! Grãos selecionados por civetas, sabor único e inigualável.",
        price: 189.90,
        category: "gourmet",
        image: "src/img/products/kopi-luwak-royale.png",
        ingredients: [
            "Grãos Kopi Luwak autênticos",
            "Processados por civetas selvagens",
            "Origem: Sumatra, Indonésia",
            "Torrefação artesanal leve",
            "Água de nascente vulcânica",
            "Servido em porcelana fina"
        ]
    },
    {
        id: 21,
        name: "Blue Mountain Symphony",
        description: "Café jamaicano Blue Mountain, considerado um dos melhores do mundo.",
        price: 89.90,
        category: "gourmet",
        image: "src/img/products/blue-mountain-symphony.png",
        ingredients: [
            "Grãos Blue Mountain jamaicanos",
            "Altitude 2000m+ cultivo",
            "Processo lavado tradicional",
            "Torrefação média artesanal",
            "Água das montanhas jamaicanas",
            "Certificação de origem"
        ]
    },
    {
        id: 22,
        name: "Hawaiian Kona Melody",
        description: "Café Kona do Havaí, cultivado em solo vulcânico com sabor suave e aromático.",
        price: 79.90,
        category: "gourmet",
        image: "src/img/products/hawaiian-kona-melody.png",
        ingredients: [
            "Grãos Kona 100% puros",
            "Solo vulcânico do Havaí",
            "Processo honey natural",
            "Torrefação média clara",
            "Água vulcânica filtrada",
            "Notas de macadâmia"
        ]
    },
    {
        id: 23,
        name: "Ethiopian Yirgacheffe",
        description: "Café etíope com notas florais e cítricas, berço do café mundial.",
        price: 67.90,
        category: "gourmet",
        image: "src/img/products/ethiopian-yirgacheffe.png",
        ingredients: [
            "Grãos Yirgacheffe etíopes",
            "Variedade heirloom ancestral",
            "Processo lavado tradicional",
            "Torrefação clara artesanal",
            "Água de fonte etíope",
            "Notas de bergamota e jasmim"
        ]
    },
    {
        id: 24,
        name: "Panama Geisha Elite",
        description: "Variedade Geisha do Panamá, café de competição com perfil floral único.",
        price: 125.90,
        category: "gourmet",
        image: "src/img/products/panama-geisha-elite.png",
        ingredients: [
            "Variedade Geisha panamenha",
            "Fazenda Esmeralda premium",
            "Processo natural especial",
            "Torrefação de competição",
            "Água de montanha filtrada",
            "Perfil floral complexo"
        ]
    },
    {
        id: 25,
        name: "Colombian Supremo",
        description: "Café colombiano premium, grãos grandes com corpo equilibrado e acidez suave.",
        price: 54.90,
        category: "gourmet",
        image: "src/img/products/colombian-supremo.png",
        ingredients: [
            "Grãos Supremo colombianos",
            "Região de Huila premium",
            "Processo lavado clássico",
            "Torrefação média balanceada",
            "Água dos Andes colombianos",
            "Notas de caramelo e chocolate"
        ]
    },
    
    // Cafés Especiais da Casa
    {
        id: 26,
        name: "Mocha Rock'n Roll",
        description: "Espresso com chocolate belga, leite vaporizado e marshmallows torrados.",
        price: 34.90,
        category: "especiais",
        image: "src/img/products/mocha-rock-n-roll.png",
        ingredients: [
            "Espresso duplo premium",
            "Chocolate belga 70% cacau",
            "Leite integral vaporizado",
            "Marshmallows artesanais",
            "Cacau em pó polvilhado",
            "Chantilly batido na hora"
        ]
    },
    {
        id: 27,
        name: "Caramel Blues",
        description: "Latte com calda de caramelo salgado, chantilly e pitada de flor de sal.",
        price: 31.90,
        category: "especiais",
        image: "src/img/products/caramel-blues.png",
        ingredients: [
            "Espresso latte cremoso",
            "Calda de caramelo salgado",
            "Leite integral texturizado",
            "Chantilly natural",
            "Flor de sal francesa",
            "Açúcar mascavo caramelizado"
        ]
    },
    {
        id: 28,
        name: "Vanilla Jazz",
        description: "Cappuccino com baunilha Madagascar, canela e arte latte personalizada.",
        price: 29.90,
        category: "especiais",
        image: "src/img/products/vanilla-jazz.png",
        ingredients: [
            "Espresso cappuccino base",
            "Extrato baunilha Madagascar",
            "Leite vaporizado cremoso",
            "Canela Ceylon em pó",
            "Arte latte personalizada",
            "Açúcar de baunilha"
        ]
    },
    {
        id: 29,
        name: "Spiced Metal",
        description: "Café com especiarias orientais: cardamomo, cravo, canela e pimenta rosa.",
        price: 36.90,
        category: "especiais",
        image: "src/img/products/spiced-metal.png",
        ingredients: [
            "Café filtrado especial",
            "Cardamomo verde moído",
            "Cravo-da-índia inteiro",
            "Canela em pau",
            "Pimenta rosa em grãos",
            "Mel de flores silvestres"
        ]
    },
    {
        id: 30,
        name: "Honey Acoustic",
        description: "Flat white com mel orgânico, leite de amêndoas e toque de lavanda.",
        price: 33.90,
        category: "especiais",
        image: "src/img/products/honey-acoustic.png",
        ingredients: [
            "Espresso flat white",
            "Mel orgânico de abelhas",
            "Leite de amêndoas cremoso",
            "Essência de lavanda",
            "Amêndoas laminadas",
            "Pólen de abelha"
        ]
    },
    
    // Cafés Veganos
    {
        id: 31,
        name: "Oat Milk Blues",
        description: "Latte com leite de aveia cremoso, sem lactose e 100% vegano.",
        price: 27.90,
        category: "veganos",
        image: "src/img/products/oat-milk-blues.png",
        ingredients: [
            "Espresso orgânico certificado",
            "Leite de aveia barista",
            "Açúcar de coco orgânico",
            "Extrato de baunilha vegano",
            "Aveia em flocos tostada",
            "100% plant-based"
        ]
    },
    {
        id: 32,
        name: "Coconut Rock",
        description: "Cappuccino com leite de coco, açúcar de coco e raspas de coco torrado.",
        price: 29.90,
        category: "veganos",
        image: "src/img/products/coconut-rock.png",
        ingredients: [
            "Espresso cappuccino vegano",
            "Leite de coco integral",
            "Açúcar de coco natural",
            "Coco ralado torrado",
            "Óleo de coco extra virgem",
            "Certificação vegana"
        ]
    },
    {
        id: 33,
        name: "Almond Jazz",
        description: "Flat white com leite de amêndoas, xarope de agave e canela.",
        price: 28.90,
        category: "veganos",
        image: "src/img/products/almond-jazz.png",
        ingredients: [
            "Espresso flat white vegano",
            "Leite de amêndoas natural",
            "Xarope de agave orgânico",
            "Canela em pó Ceylon",
            "Amêndoas cruas laminadas",
            "Livre de lactose"
        ]
    },
    
    // Cafés Descafeinados
    {
        id: 34,
        name: "Decaf Smooth",
        description: "Café descafeinado suave, processo Swiss Water, sabor preservado.",
        price: 25.90,
        category: "descafeinados",
        image: "src/img/products/decaf-smooth.png",
        ingredients: [
            "Grãos descafeinados Swiss Water",
            "Processo sem químicos",
            "Torrefação média preservada",
            "99,9% livre de cafeína",
            "Água purificada",
            "Sabor original mantido"
        ]
    },
    {
        id: 35,
        name: "Evening Blues",
        description: "Blend descafeinado para a noite, notas de chocolate e baunilha.",
        price: 27.90,
        category: "descafeinados",
        image: "src/img/products/evening-blues.png",
        ingredients: [
            "Blend descafeinado premium",
            "Processo CO2 natural",
            "Notas de chocolate meio amargo",
            "Essência de baunilha",
            "Torrefação noturna especial",
            "Ideal para a noite"
        ]
    }
];

// Global State
let products = [...mockProducts];
let filteredProducts = [...products];
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartToggle = document.getElementById('cartToggle');
const cartClose = document.getElementById('cartClose');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const modalClose = document.getElementById('modalClose');
const checkoutForm = document.getElementById('checkoutForm');
const loadingOverlay = document.getElementById('loadingOverlay');
const successMessage = document.getElementById('successMessage');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');

// Product Modal Elements
const productModal = document.getElementById('productModal');
const productModalClose = document.getElementById('productModalClose');
const modalProductName = document.getElementById('modalProductName');
const modalProductImage = document.getElementById('modalProductImage');
const modalProductDescription = document.getElementById('modalProductDescription');
const modalProductPrice = document.getElementById('modalProductPrice');
const modalIngredientsList = document.getElementById('modalIngredientsList');
const modalAddToCart = document.getElementById('modalAddToCart');

// Current product for modal
let currentModalProduct = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    showLoading();
    setTimeout(() => {
        hideLoading();
        renderProducts();
        updateCartDisplay();
    }, 1500);
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    cartToggle.addEventListener('click', toggleCart);
    cartClose.addEventListener('click', closeCart);
    checkoutBtn.addEventListener('click', openCheckoutModal);
    modalClose.addEventListener('click', closeCheckoutModal);
    checkoutForm.addEventListener('submit', handleCheckout);
    categoryFilter.addEventListener('change', applyFilters);
    sortFilter.addEventListener('change', applyFilters);
    productModalClose.addEventListener('click', closeProductModal);
    modalAddToCart.addEventListener('click', addCurrentModalProductToCart);

    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        if (!cartSidebar.contains(e.target) && !cartToggle.contains(e.target)) {
            closeCart();
        }
    });

    // Close modal when clicking outside
    checkoutModal.addEventListener('click', function(e) {
        if (e.target === checkoutModal) {
            closeCheckoutModal();
        }
    });

    // Close product modal when clicking outside
    productModal.addEventListener('click', function(e) {
        if (e.target === productModal) {
            closeProductModal();
        }
    });
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Render Functions
function renderProducts() {
    productsGrid.innerHTML = ''; // Clear existing products
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    card.onclick = () => openProductModal(product);

    const isPremium = product.category === 'gourmet' || product.price > 100;
    if (isPremium) {
        card.setAttribute('data-premium', 'true');
    }

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                Adicionar
            </button>
        </div>
    `;
    return card;
}

function updateCartDisplay() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="removeFromCart(${item.id})">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="addToCart(${item.id})">+</button>
            </div>
        `;
        cartItems.appendChild(cartItemElement);
    });
    cartTotal.textContent = total.toFixed(2).replace('.', ',');
    cartCount.textContent = cart.length;
}

// Cart Functions
function toggleCart() {
    cartSidebar.classList.toggle('open');
}

function closeCart() {
    cartSidebar.classList.remove('open');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartDisplay();
}

function removeFromCart(productId) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        if (cartItem.quantity > 1) {
            cartItem.quantity--;
        } else {
            cart = cart.filter(item => item.id !== productId);
        }
    }
    updateCartDisplay();
}

// Filter and Sort Functions
function applyFilters() {
    const category = categoryFilter.value;
    const sort = sortFilter.value;
    
    // Filter
    filteredProducts = products.filter(product => {
        return category === 'all' || product.category === category;
    });

    // Sort
    if (sort === 'name') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    renderProducts();
}

// Checkout Modal Functions
function openCheckoutModal() {
    closeCart();
    checkoutModal.style.display = 'flex';
}

function closeCheckoutModal() {
    checkoutModal.style.display = 'none';
    checkoutForm.reset();
}

function handleCheckout(e) {
    e.preventDefault();
    showLoading();
    setTimeout(() => {
        hideLoading();
        showSuccessMessage();
        cart = [];
        updateCartDisplay();
        closeCheckoutModal();
    }, 2000);
}

// Product Modal Functions
function openProductModal(product) {
    currentModalProduct = product;
    modalProductName.textContent = product.name;
    modalProductDescription.textContent = product.description;
    modalProductPrice.textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
    modalProductImage.src = product.image;
    modalProductImage.alt = product.name;
    modalIngredientsList.innerHTML = '';
    product.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        modalIngredientsList.appendChild(li);
    });
    productModal.style.display = 'flex';
}

function closeProductModal() {
    productModal.style.display = 'none';
    currentModalProduct = null;
}

function addCurrentModalProductToCart() {
    if (currentModalProduct) {
        addToCart(currentModalProduct.id);
        closeProductModal();
    }
}

// Utility Functions
function showLoading() {
    loadingOverlay.classList.add('active');
}

function hideLoading() {
    loadingOverlay.classList.remove('active');
}

function showSuccessMessage() {
    successMessage.classList.add('active');
    setTimeout(() => {
        successMessage.classList.remove('active');
    }, 3000);
}