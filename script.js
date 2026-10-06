/* =========================================
   CASA DO FRANGO
   SCRIPT.JS
========================================= */


/* =========================================
   CARDÁPIO
========================================= */

const menuItems = [

    /* PETISCOS */

    {
        name: "Fritas com queijo e bacon",
        price: 30,
        category: "petiscos",
        description: "Batata frita com bacon em cubos e muçarela gratinada."
    },

    {
        name: "Bolinho de bacalhau",
        price: 25,
        category: "petiscos",
        description: "6 unidades."
    },

    {
        name: "Bolinho de aipim com carne moída",
        price: 18,
        category: "petiscos",
        description: "6 unidades."
    },

    {
        name: "Dadinhos de queijo coalho",
        price: 25,
        category: "petiscos",
        description: "Acompanhados de molho de goiabada picante."
    },

    {
        name: "Pipoquinha de frango",
        price: 20,
        category: "petiscos",
        description: "Cubinhos de frango frito com molho rosé."
    },

    {
        name: "Mini pastel",
        price: 20,
        category: "petiscos",
        description: "10 unidades. Consulte os sabores com o garçom."
    },

    {
        name: "Queijo coalho grelhado",
        price: 23,
        category: "petiscos",
        description: "2 unidades."
    },

    {
        name: "Pão de alho na brasa",
        price: 8,
        category: "petiscos",
        description: "2 unidades."
    },

    {
        name: "Linguiça na brasa",
        price: 7,
        category: "petiscos",
        description: "1 unidade."
    },

    {
        name: "Pão de alho com 2 linguiças",
        price: 18,
        category: "petiscos",
        description: "Pão de alho acompanhado de 2 linguiças na brasa."
    },

    {
        name: "Adicione queijo ao petisco",
        price: 9,
        category: "petiscos",
        description: "Muçarela gratinada."
    },

    {
        name: "Picanha aperitivo",
        price: 135,
        category: "petiscos",
        description: "Picanha fatiada, molho à campanha e farofa."
    },

    {
        name: "Contra-filé com fritas",
        price: 109,
        category: "petiscos",
        description: "Iscas de miolo de alcatra acebolado com fritas ou aipim."
    },

    {
        name: "Contra-filé aperitivo",
        price: 99,
        category: "petiscos",
        description: "Contra-filé ao alho fatiado, molho à campanha e farofa."
    },

    {
        name: "Carne seca com aipim",
        price: 79,
        category: "petiscos",
        description: "Carne seca desfiada e acebolada com aipim frito."
    },

    {
        name: "Frango a passarinho",
        price: 59,
        category: "petiscos",
        description: "Frango frito com alho torrado."
    },

    {
        name: "Filé de frango com fritas",
        price: 49,
        category: "petiscos",
        description: "Iscas de peito acebolado com fritas ou aipim."
    },

    {
        name: "Gurjão de frango",
        price: 39,
        category: "petiscos",
        description: "Tirinhas empanadas com molho rosé."
    },

    {
        name: "Gurjão de peixe",
        price: 49,
        category: "petiscos",
        description: "Iscas de peixe empanadas com molho rosé."
    },


    /* CLÁSSICOS */

    {
        name: "Filé de Coxa na Brasa",
        price: 38,
        category: "classicos",
        description: "Filé de coxa preparado na brasa."
    },

    {
        name: "Filé de Frango Grelhado",
        price: 35,
        category: "classicos",
        description: "Filé de frango grelhado."
    },

    {
        name: "Frango Milanesa",
        price: 37,
        category: "classicos",
        description: "Frango empanado e crocante."
    },

    {
        name: "Contra-Filé Acebolado",
        price: 49,
        category: "classicos",
        description: "Contra-filé acebolado."
    },

    {
        name: "Linguiça na Brasa",
        price: 35,
        category: "classicos",
        description: "Linguiça preparada na brasa."
    },

    {
        name: "Picanha ao Alho",
        price: 69,
        category: "classicos",
        description: "Picanha preparada com alho."
    },

    {
        name: "Contra-Filé ao Alho",
        price: 49,
        category: "classicos",
        description: "Contra-filé preparado com alho."
    },

    {
        name: "Filé de Peixe ao Molho de Camarão",
        price: 48,
        category: "classicos",
        description: "Filé de peixe acompanhado de molho de camarão."
    },

    {
        name: "Parmegiana de Frango",
        price: 42,
        category: "classicos",
        description: "Frango à parmegiana."
    },

    {
        name: "Costela Suína ou Copa Lombo",
        price: 45,
        category: "classicos",
        description: "Costela suína ou copa lombo."
    },

    {
        name: "Omelete",
        price: 26,
        category: "classicos",
        description: "Omelete da casa."
    },


    /* KITS */

    {
        name: "Kit Frango Tradicional — Inteiro",
        price: 112,
        category: "kits",
        description: "Frango assado, farofa de bacon, arroz branco e acompanhamento."
    },

    {
        name: "Kit Frango Tradicional — Meio",
        price: 68,
        category: "kits",
        description: "Meio frango assado, farofa de bacon, arroz branco e acompanhamento."
    },

    {
        name: "Frango Premium — Inteiro",
        price: 135,
        category: "kits",
        description: "Monte seu kit escolhendo arroz, farofa, complemento e acompanhamento."
    },

    {
        name: "Frango Premium — Meio",
        price: 89,
        category: "kits",
        description: "Monte seu kit escolhendo arroz, farofa, complemento e acompanhamento."
    },

    {
        name: "Kit Galeto Tradicional",
        price: 68,
        category: "kits",
        description: "Galeto assado, farofa de bacon, arroz branco e acompanhamento."
    },

    {
        name: "Picanha Mista",
        price: 228,
        category: "kits",
        description: "450g de picanha + 450g de filé de coxa + 2 linguiças de churrasco."
    },

    {
        name: "Picanha com Queijo",
        price: 199,
        category: "kits",
        description: "450g de picanha, alho torrado, muçarela e tomilho."
    },

    {
        name: "Picanha ao Alho",
        price: 180,
        category: "kits",
        description: "450g de picanha in natura com alho torrado."
    },

    {
        name: "Churrasco Misto",
        price: 195,
        category: "kits",
        description: "450g de contra-filé + 450g de filé de coxa + 2 linguiças."
    },

    {
        name: "Contra-filé ao alho",
        price: 139,
        category: "kits",
        description: "450g de contra-filé in natura."
    },

    {
        name: "Filé de coxa desossado",
        price: 98,
        category: "kits",
        description: "600g assado na brasa."
    },

    {
        name: "Costela suína ou copa lombo",
        price: 130,
        category: "kits",
        description: "600g. Disponível apenas aos fins de semana."
    },


    /* SALADAS */

    {
        name: "Salpicão de Frango — Grande",
        price: 37,
        category: "saladas",
        description: "Salpicão de frango."
    },

    {
        name: "Salpicão de Frango — Pequeno",
        price: 22,
        category: "saladas",
        description: "Salpicão de frango."
    },

    {
        name: "Salada de Maionese — Grande",
        price: 27,
        category: "saladas",
        description: "Salada de maionese."
    },

    {
        name: "Salada de Maionese — Pequena",
        price: 16,
        category: "saladas",
        description: "Salada de maionese."
    },

    {
        name: "Caesar Salad",
        price: 27,
        category: "saladas",
        description: "Salada Caesar."
    },

    {
        name: "Salada Mista",
        price: 35,
        category: "saladas",
        description: "Salada mista da casa."
    },

    {
        name: "Salada de Palmito",
        price: 38,
        category: "saladas",
        description: "Salada com palmito."
    },

    {
        name: "Salada Verde",
        price: 14,
        category: "saladas",
        description: "Salada verde."
    },

    {
        name: "Salada de Legumes Cozidos",
        price: 21,
        category: "saladas",
        description: "Legumes cozidos."
    },


    /* ACOMPANHAMENTOS */

    {
        name: "Batata Frita",
        price: 21,
        category: "acompanhamentos",
        description: "Porção de batata frita."
    },

    {
        name: "Aipim Frito",
        price: 21,
        category: "acompanhamentos",
        description: "Porção de aipim frito."
    },

    {
        name: "Arroz Branco",
        price: 12,
        category: "acompanhamentos",
        description: "Porção de arroz branco."
    },

    {
        name: "Arroz com Brócolis",
        price: 13,
        category: "acompanhamentos",
        description: "Arroz com brócolis."
    },

    {
        name: "Arroz Maluco",
        price: 13,
        category: "acompanhamentos",
        description: "Arroz maluco da casa."
    },

    {
        name: "Arroz Integral",
        price: 13,
        category: "acompanhamentos",
        description: "Arroz integral."
    },

    {
        name: "Purê",
        price: 16,
        category: "acompanhamentos",
        description: "Porção de purê."
    },

    {
        name: "Feijão Preto",
        price: 9,
        category: "acompanhamentos",
        description: "Feijão preto caseiro."
    },

    {
        name: "Farofa de Ovos",
        price: 17,
        category: "acompanhamentos",
        description: "Farofa de ovos."
    },

    {
        name: "Farofa de Bacon",
        price: 4,
        category: "acompanhamentos",
        description: "Farofa de bacon."
    },

    {
        name: "Molho à Campanha",
        price: 11,
        category: "acompanhamentos",
        description: "Molho à campanha."
    },

    {
        name: "Molho Barbecue",
        price: 7,
        category: "acompanhamentos",
        description: "Molho barbecue."
    },

    {
        name: "Linguiça na Brasa",
        price: 7,
        category: "acompanhamentos",
        description: "1 unidade."
    },

    {
        name: "Frango Assado com Farofa",
        price: 50,
        category: "acompanhamentos",
        description: "Frango assado acompanhado de farofa."
    },

    {
        name: "Meio Frango Assado com Farofa",
        price: 35,
        category: "acompanhamentos",
        description: "Meio frango assado acompanhado de farofa."
    },


    /* SOBREMESAS */

    {
        name: "Brownie da Casa",
        price: 33,
        category: "sobremesas",
        description: "Brownie especial da Casa do Frango."
    },

    {
        name: "Petit Gâteau",
        price: 33,
        category: "sobremesas",
        description: "Petit gâteau."
    },

    {
        name: "Pavê Crocante",
        price: 25,
        category: "sobremesas",
        description: "Pavê crocante."
    },

    {
        name: "Pavê da Casa",
        price: 22,
        category: "sobremesas",
        description: "Pavê especial da casa."
    },

    {
        name: "Taça de Sorvete",
        price: 18,
        category: "sobremesas",
        description: "Taça de sorvete."
    },

    {
        name: "Mousse",
        price: 11,
        category: "sobremesas",
        description: "Mousse."
    },

    {
        name: "Pudim de Leite",
        price: 9,
        category: "sobremesas",
        description: "Pudim de leite."
    }

];


/* =========================================
   MOSTRAR CARDÁPIO
========================================= */

const menuGrid = document.getElementById("menuGrid");

function formatPrice(price) {

    return price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


function renderMenu(category = "todos") {

    if (!menuGrid) {
        return;
    }

    const filteredItems =
        category === "todos"
            ? menuItems
            : menuItems.filter(
                item => item.category === category
            );


    menuGrid.innerHTML = filteredItems.map(item => {

        return `

            <article class="menu-card">

                <div class="menu-card-top">

                    <h3>
                        ${item.name}
                    </h3>

                    <span class="menu-price">
                        ${formatPrice(item.price)}
                    </span>

                </div>

                <p>
                    ${item.description}
                </p>

                <span class="menu-category">
                    ${categoryName(item.category)}
                </span>

            </article>

        `;

    }).join("");

}


function categoryName(category) {

    const names = {

        petiscos: "Petisco",

        classicos: "Clássico",

        kits: "Kit",

        saladas: "Salada",

        acompanhamentos: "Acompanhamento",

        sobremesas: "Sobremesa"

    };

    return names[category] || category;

}


/* =========================================
   FILTROS
========================================= */

const filters =
    document.querySelectorAll(".filter");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item => {
            item.classList.remove("active");
        });

        filter.classList.add("active");

        const category =
            filter.dataset.category;

        renderMenu(category);

    });

});


/* =========================================
   MENU MOBILE
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("show");

    });


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("show");

        });

    });

}


/* =========================================
   INICIALIZAÇÃO
========================================= */

renderMenu("todos");
