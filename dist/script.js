// Navegação

const navBtn = document.querySelector("#nav-btn");
const navLinks = document.querySelector("#nav-links");

navBtn.addEventListener("click", () => {
  if (navLinks.classList.contains("hidden")) {
    navLinks.classList.remove("hidden");
  } else {
    navLinks.classList.add("hidden");
  }
});

// Cards do Cardápio ----------------------------------
const cardContainer = document.querySelector("#card-container");

const comidas = [
  { nome: "Carne de Panela", imagem: "../assets/img/pratos/prato-1.jpg" },
  { nome: "Peixe Frito", imagem: "../assets/img/pratos/prato-2.jpg" },
  { nome: "Fricasse de Frango", imagem: "../assets/img/pratos/prato-3.jpg" },
  { nome: "Feijoada", imagem: "../assets/img/pratos/prato-4.jpg" },
  { nome: "Frango com Cury", imagem: "../assets/img/pratos/prato-5.jpg" },
  { nome: "Sobrecoxa de Frango", imagem: "../assets/img/pratos/prato-6.jpg" },
  { nome: "Rocombole de Carne", imagem: "../assets/img/pratos/prato-7.jpg" },
  { nome: "Strogonoff", imagem: "../assets/img/pratos/prato-8.jpg" },
  { nome: "Frango com Requeijão", imagem: "../assets/img/pratos/prato-9.jpg" },
  {
    nome: "Escondidinho de Abóbora",
    imagem: "../assets/img/pratos/prato-10.jpg",
  },
  {
    nome: "Lagarto ao Molho Madeira",
    imagem: "../assets/img/pratos/prato-11.jpg",
  },
  { nome: "Berinjela Recheada", imagem: "../assets/img/pratos/prato-12.jpg" },
];

comidas.forEach((comida) => {
  console.log("Executando o forEach");
  const card = document.createElement("div");
  card.classList.add(
    "mx-auto",
    "grid",
    "w-60",
    "justify-center",
    "overflow-hidden",
    "rounded-lg",
    "shadow-md",
    "drop-shadow-md"
  );

  const imagem = document.createElement("img");
  imagem.classList.add("w-60", "border-b", "border-clrs-secondary");
  imagem.src = comida.imagem;
  imagem.alt = comida.nome;

  const descricao = document.createElement("div");
  descricao.classList.add(
    "grid",
    "bg-gradient-to-t",
    "from-clrs-secondary",
    "via-clrs-primary",
    "to-clrs-primary",
    "px-4",
    "py-2",
    "text-center",
    "font-della",
    "text-xl",
    "font-semibold",
    "leading-6",
    "text-clrs-accent_dark"
  );

  const nomeComida = document.createElement("p");
  nomeComida.textContent = comida.nome;

  const botaoVerMais = document.createElement("button");
  botaoVerMais.classList.add(
    "mx-auto",
    "mb-1",
    "mt-3",
    "w-fit",
    "rounded-lg",
    "border-2",
    "border-clrs-accent_dark",
    "px-2",
    "py-1",
    "font-quattrocento",
    "text-sm",
    "font-bold",
    "uppercase",
    "shadow-md",
    "duration-200",
    "hover:bg-clrs-accent_light",
    "hover:text-white"
  );
  botaoVerMais.textContent = "Ver Mais";

  descricao.appendChild(nomeComida);
  descricao.appendChild(botaoVerMais);

  card.appendChild(imagem);
  card.appendChild(descricao);

  cardContainer.appendChild(card);
});
