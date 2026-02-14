
import { ShopItem, ItemCategory } from './types';

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 'bg-1',
    name: 'Céu Nublado',
    description: 'Um fundo de nuvens suaves em tons de branco e cinza para o seu perfil.',
    price: 500,
    category: ItemCategory.BACKGROUND,
    imageUrl: 'https://i.imgur.com/s6yegR9.png',
    hoverImageUrl: 'https://i.imgur.com/uvcD8JX.png',
    rarity: 'Comum'
  },
  {
    id: 'bg-2',
    name: 'Céu Claro',
    description: 'Um fundo leve e inspirador de céu azul com nuvens brancas para o seu perfil.',
    price: 500,
    category: ItemCategory.BACKGROUND,
    imageUrl: 'https://i.imgur.com/YtAfMC5.png',
    hoverImageUrl: 'https://i.imgur.com/v42bgXM.png',
    rarity: 'Comum'
  },
  {
    id: 'bg-3',
    name: 'Tempestade',
    description: 'Um fundo de céu escuro cortado por raios intensos para o seu perfil.',
    price: 500,
    category: ItemCategory.BACKGROUND,
    imageUrl: 'https://i.imgur.com/fAoSOVr.png',
    hoverImageUrl: 'https://i.imgur.com/HF0LSgz.png',
    rarity: 'Comum'
  },
  {
    id: 'bg-4',
    name: 'Caos Doméstico',
    description: 'Cozinha acesa, planta e terra espalhada.',
    price: 1000,
    category: ItemCategory.BACKGROUND,
    imageUrl: 'https://i.imgur.com/KrcXbFA.png',
    hoverImageUrl: 'https://i.imgur.com/uBHjASB.png',
    rarity: 'Raro'
  },
  {
    id: 'bg-5',
    name: 'Pulso Urbano',
    description: 'A cidade brilha quando o dia se despede.',
    price: 1000,
    category: ItemCategory.BACKGROUND,
    imageUrl: 'https://i.imgur.com/PW8v9hR.png',
    hoverImageUrl: 'https://i.imgur.com/kqyMl1M.png',
    rarity: 'Raro'
  },
  {
    id: 'bg-6',
    name: 'Dias de Verão',
    description: 'Um veleiro elegante cercado por risos e mergulhos.',
    price: 1000,
    category: ItemCategory.BACKGROUND,
    imageUrl: 'https://i.imgur.com/lVWyQ0i.png',
    hoverImageUrl: 'https://i.imgur.com/FmJiEv8.png',
    rarity: 'Raro'
  },
  {
    id: 'bg-7',
    name: 'Noite Pixelada',
    description: 'Uma metrópole azul e cinza sob nuvens suaves e estrelas, iluminada por luzes tranquilas em estilo retrô.',
    price: 1000,
    category: ItemCategory.BACKGROUND,
    imageUrl: 'https://i.imgur.com/aVYEyPc.png',
    hoverImageUrl: 'https://i.imgur.com/pRFVLhc.png',
    rarity: 'Raro'
  },
  {
    id: 'bg-11',
    name: 'Floresta',
    description: 'Um cantinho selvagem pra relaxar e curtir a vibe pixelada.',
    price: 1000,
    category: ItemCategory.BACKGROUND,
    imageUrl: 'https://i.imgur.com/uMtx7II.png',
    hoverImageUrl: 'https://i.imgur.com/Euh0OBH.png',
    rarity: 'Raro'
  },
  {
    id: 'bg-12',
    name: 'Forja do Ferreiro',
    description: 'O calor da forja onde ferro bruto vira poder e proteção.',
    price: 1000,
    category: ItemCategory.BACKGROUND,
    imageUrl: 'https://i.imgur.com/pWVWwqI.png',
    hoverImageUrl: 'https://i.imgur.com/1jHceN2.png',
    rarity: 'Raro'
  },
  {
    id: 'bg-13',
    name: 'Forja do Ferreiro',
    description: 'O calor da forja onde ferro bruto vira poder e proteção.',
    price: 1000,
    category: ItemCategory.BACKGROUND,
    imageUrl: 'https://i.imgur.com/M5lBryn.png',
    hoverImageUrl: 'https://i.imgur.com/HExfARC.png',
    rarity: 'Raro'
  },
  {
    id: 'bg-8',
    name: 'Planeta-W',
    description: 'Uma cidade futurista em pixel art, banhada por tons quentes do entardecer, onde luzes neon e estruturas industriais anunciam um novo lar.',
    price: 1500,
    category: ItemCategory.BACKGROUND,
    imageUrl: 'https://i.imgur.com/TLfDwhp.png',
    hoverImageUrl: 'https://i.imgur.com/pq3oDl7.png',
    rarity: 'Épico'
  },
  {
    id: 'bg-9',
    name: 'Fim de Tarde',
    description: 'Uma rua urbana em tons quentes, onde luzes suaves, fachadas detalhadas e um mistério no céu criam uma cena calma e nostálgica.',
    price: 1500,
    category: ItemCategory.BACKGROUND,
    imageUrl: 'https://i.imgur.com/6r2JdsF.png',
    hoverImageUrl: 'https://i.imgur.com/NfD3MPR.png',
    rarity: 'Épico'
  },
  {
    id: 'bg-10',
    name: 'Última Parada',
    description: 'Uma estação urbana ao entardecer, iluminada por luzes suaves, onde o silêncio e o tempo parecem desacelerar.',
    price: 1500,
    category: ItemCategory.BACKGROUND,
    imageUrl: 'https://i.imgur.com/edR2P0w.png',
    hoverImageUrl: 'https://i.imgur.com/Zx4RMSV.png',
    rarity: 'Épico'
  },
  {
    id: 'frame-1',
    name: 'Tapete Vermelho',
    description: 'Seu avatar em evidência com estilo e status.',
    price: 10000,
    category: ItemCategory.FRAME,
    imageUrl: 'https://i.imgur.com/ZYnGaNH.png',
    hoverImageUrl: 'https://i.imgur.com/Z8MzlXA.png',
    rarity: 'Lendário'
  },
  {
    id: 'badge-25',
    name: 'Lenda do Boxe',
    description: 'Força e coragem dentro do ringue.',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/8fZ8v9h.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-26',
    name: 'Oss!',
    description: 'A verdadeira força está no controle.',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/ASVyvEK.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-27',
    name: 'Good Vibes',
    description: 'Só energia positiva no ar.',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/hAFIPTi.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-28',
    name: 'Wanted',
    description: 'Fora da lei e difícil de pegar.',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/xNutiHm.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-29',
    name: 'Vôlei',
    description: 'Nenhuma bola toca o chão.',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/bcEg3sG.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-30',
    name: 'Basquete',
    description: 'Mestre dos Arremessos.',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/MeDUNn6.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-31',
    name: 'Ligação',
    description: 'Espera.. Outra ligação! Ela disse o quê?',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/IiHd9lc.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-32',
    name: 'Cidade Maravilhosa',
    description: 'O Rio continua lindo...',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/WIbgy3V.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-33',
    name: 'Kevin',
    description: 'Esqueceram de Mim',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/LGOoAAD.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-34',
    name: 'Melhor Amigo',
    description: 'Lealdade e alegria em cada passo.',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/lO1z7hq.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-35',
    name: 'Espírito do Rock',
    description: 'Aumente o volume!',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/KvARfT5.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-36',
    name: 'Fotógrafo',
    description: 'Capturando memórias em cada foto.',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/rUf4rhi.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-37',
    name: 'Parada Obrigatória',
    description: 'Pare, olhe e escute.',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/NtPnS2B.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-38',
    name: 'Beleza em Flor',
    description: 'Delicadeza e cor que alegram qualquer lugar.',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/Zw0KCl8.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-39',
    name: 'Hora do Chopp',
    description: 'Brinde gelado para celebrar os bons momentos.',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/Yuln2ub.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-40',
    name: 'Crocância Perfeita',
    description: 'Irresistível desde a primeira mordida.',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/urZBOPv.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-41',
    name: 'Diva do Boteco',
    description: 'Presença marcante e copo sempre cheio.',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/9I0wDUi.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-42',
    name: 'Brotein',
    description: 'Foco, força e proteína todo dia.',
    price: 2500,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/5vMb9am.png',
    rarity: 'Raro'
  },
  {
    id: 'badge-1',
    name: 'Botafogo',
    description: 'Ninguém cala esse nosso amor.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/V19Ffyl.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-2',
    name: 'Palmeiras',
    description: 'Avanti Palestra!',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/2upcfic.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-3',
    name: 'Flamengo',
    description: 'Uma vez Flamengo, sempre Flamengo.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/T6GjACi.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-4',
    name: 'Vasco da Gama',
    description: 'O Gigante da Colina.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/AHFls3w.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-5',
    name: 'Santos',
    description: 'Nascer, viver e no Santos morrer.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/Savk067.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-6',
    name: 'Fluminense',
    description: 'Sou tricolor de coração.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/9TpF75c.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-7',
    name: 'São Paulo',
    description: 'São Paulo é sentimento.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/tlx0Ifj.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-8',
    name: 'Atlético',
    description: 'Aqui é Galo.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/b857upY.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-9',
    name: 'Athletico Paranaense',
    description: 'Furacão.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/vXFZeOz.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-10',
    name: 'Chapecoense',
    description: 'Vamos, vamos Chape!',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/2FgULxy.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-11',
    name: 'Coritiba',
    description: 'Coritiba, o Verdão do Alto da Glória.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/lOweyfV.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-12',
    name: 'Cruzeiro',
    description: 'Raposa.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/AaNKVw4.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-13',
    name: 'Bahia',
    description: 'Bora Bahia Minha Porra!',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/AOvgWOE.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-14',
    name: 'Vitória',
    description: 'Leão da Barra.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/W1PlKsi.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-15',
    name: 'Grêmio',
    description: 'Imortal Tricolor.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/4msxwQu.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-16',
    name: 'Mirassol',
    description: 'Leão Caipira.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/PuiwXs4.png',
    rarity: 'Épico'
  }, 
  {
    id: 'badge-17',
    name: 'Bragantino',
    description: 'Massa Bruta.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/PlvrRON.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-18',
    name: 'Remo',
    description: 'Leão Azul.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/1CCFYZN.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-19',
    name: 'Corinthians',
    description: 'Vai, Corinthians!',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/Y1op5CY.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-20',
    name: 'Internacional',
    description: 'Colorado.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/KBw6jg7.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-21',
    name: 'Ceará',
    description: 'Vovô.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/cq0bC3u.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-22',
    name: 'Fortaleza',
    description: 'Leão do Pici.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/7pUjZjJ.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-23',
    name: 'Sport',
    description: 'Leão da Ilha.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/5urPC8Y.png',
    rarity: 'Épico'
  },
  {
    id: 'badge-24',
    name: 'Goiás',
    description: 'Verdão.',
    price: 5000,
    category: ItemCategory.BADGE,
    imageUrl: 'https://i.imgur.com/RBQtxoV.png',
    rarity: 'Épico'
  },
  {
    id: 'role-1',
    name: 'Twitch',
    description: 'Destaque-se no servidor com o Cargo Twitch.',
    price: 10000,
    category: ItemCategory.ROLE,
    rarity: 'Épico'
  },
  {
    id: 'role-2',
    name: 'VIP',
    description: 'Tenha um lugar de destaque no servidor.',
    price: 100000,
    category: ItemCategory.ROLE,
    rarity: 'Lendário'
  }
];
