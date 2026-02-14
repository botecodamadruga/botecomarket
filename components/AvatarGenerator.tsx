
import React, { useState, useEffect, useRef } from 'react';

interface AvatarGeneratorProps {
  onBack: () => void;
  onNotify: (msg: string, type: 'success' | 'error') => void;
}

const HOTELS = [
  { value: 'com.br', label: 'Brasil/Portugal (.COM.BR)' },
  { value: 'es', label: 'Espanha (.ES)' },
  { value: 'com', label: 'Internacional (.COM)' },
  { value: 'de', label: 'Alemanha (.DE)' },
  { value: 'fr', label: 'França (.FR)' },
  { value: 'it', label: 'Itália (.IT)' },
  { value: 'nl', label: 'Holanda (.NL)' },
  { value: 'com.tr', label: 'Turquia (.COM.TR)' },
];

const EXPRESSOES = [
  { value: 'std', label: 'Normal' },
  { value: 'spk', label: 'Falando' },
  { value: 'sml', label: 'Sorrindo' },
  { value: 'srp', label: 'Surpreso' },
  { value: 'agr', label: 'Nervoso' },
  { value: 'sad', label: 'Triste' },
  { value: 'lol', label: 'Sem Rosto' },
];

const ACOES = [
  { value: 'std', label: 'Normal' },
  { value: 'wlk', label: 'Andando' },
  { value: 'wlk,wav', label: 'Andando/Acenando' },
  { value: 'sit', label: 'Sentado' },
  { value: 'sit,wav', label: 'Sentado/Acenando' },
  { value: 'lay', label: 'Deitado' },
  { value: 'wav', label: 'Acenando' },
];

const FORMATOS = [
  { value: 'png', label: 'PNG (Estático)' },
  { value: 'gif', label: 'GIF (Animado)' },
];

const HABBO_OBJECTS = [
  { value: '', label: 'Nenhum' },
  { value: '0', label: 'Nada (Invisível)' },
  { value: '1', label: 'Água da Torneira' },
  { value: '2', label: 'Cenoura' },
  { value: '3', label: 'Sorvete de Baunilha' },
  { value: '5', label: 'Refrigerante 711' },
  { value: '6', label: 'Café' },
  { value: '9', label: 'Poção do Amor' },
  { value: '33', label: 'Calippo' },
  { value: '42', label: 'Saquê' },
  { value: '43', label: 'Refrigerante de Cereja' },
  { value: '44', label: 'Suco de Limão' },
  { value: '45', label: 'Drink de Coco' },
  { value: '46', label: 'Peixe' },
  { value: '47', label: 'Champanhe' },
  { value: '48', label: 'Refrigerante de Laranja' },
  { value: '50', label: 'Pêra' },
  { value: '51', label: 'Pêssego Suculento' },
  { value: '52', label: 'Laranja' },
  { value: '53', label: 'Fatia de Queijo' },
  { value: '54', label: 'Suco de Laranja' },
  { value: '55', label: 'Habbo Refri Geladinho' },
  { value: '56', label: 'Energético Astrobar' },
  { value: '57', label: 'Goma de Mascar Amarela' },
  { value: '58', label: 'Goma de Mascar Verde' },
  { value: '59', label: 'Goma de Mascar Vermelha' },
  { value: '60', label: 'Pirulito' },
  { value: '61', label: 'Pote de Iogurte Manchado' },
  { value: '62', label: 'Garrafa de Suco de Bolhas' },
  { value: '63', label: 'Salgadinho Grefusa' },
  { value: '64', label: 'Salgadinho Cheetos' },
  { value: '65', label: 'Xícara de Café Expresso' },
  { value: '66', label: 'Tigela de Cereais' },
  { value: '67', label: 'Garrafa de Pepsi' },
  { value: '68', label: 'Sangue fresco' },
  { value: '69', label: 'Saco de Moedas' },
  { value: '70', label: 'Castanhas' },
  { value: '71', label: 'Suco de Laranja' },
  { value: '72', label: 'Água Envenenada' },
  { value: '73', label: 'Saco de Pipocas' },
  { value: '74', label: 'Tinta Spray' },
  { value: '75', label: 'Milkshake de Banana' },
  { value: '76', label: 'Rosa' },
  { value: '77', label: 'Rosa Negra' },
  { value: '78', label: 'Girassol' },
  { value: '79', label: 'Livro Vermelho' },
  { value: '80', label: 'Livro Azul' },
  { value: '81', label: 'Livro Verde' },
  { value: '82', label: 'Flor de Presente' },
  { value: '83', label: 'Margarida Azul' },
  { value: '84', label: 'Margarida Amarela' },
  { value: '85', label: 'Margarida Rosa' },
  { value: '87', label: 'Prancheta' },
  { value: '89', label: 'Comprimidos' },
  { value: '90', label: 'Seringa' },
  { value: '91', label: 'Bolsa de Resíduos' },
  { value: '92', label: 'Chiclete Azul' },
  { value: '93', label: 'Chiclete Rosa' },
  { value: '94', label: 'Chiclete Verde' },
  { value: '95', label: 'Flor Bolly' },
  { value: '97', label: 'Jacinto Vermelho' },
  { value: '98', label: 'Jacinto Azul' },
  { value: '99', label: 'Poinsétia' },
  { value: '100', label: 'Panetone' },
  { value: '101', label: 'Bengala Doce' },
  { value: '102', label: 'Presente' },
  { value: '103', label: 'Vela Vermelha' },
  { value: '105', label: 'Coxa de frango' },
  { value: '106', label: 'Torrada' },
  { value: '107', label: 'Tigela de Cereal' },
  { value: '108', label: 'Bexiga Bege' },
  { value: '109', label: 'Suco de Pêssego e Maçã' },
  { value: '110', label: 'HiPad' },
  { value: '111', label: 'Tocha Habbolímpica' },
  { value: '112', label: 'Major Tom' },
  { value: '113', label: 'OVNI' },
  { value: '114', label: 'Alienígena' },
  { value: '115', label: 'Osso' },
  { value: '116', label: 'Pato de Borracha Viscoso' },
  { value: '117', label: 'Cobra' },
  { value: '118', label: 'Graveto' },
  { value: '119', label: 'Mão Decepada' },
  { value: '120', label: 'Coração Animal' },
  { value: '121', label: 'Lula' },
  { value: '122', label: 'Bat-Cocô' },
  { value: '123', label: 'Verme' },
  { value: '124', label: 'Rato Morto' },
  { value: '125', label: 'Dentadura' },
  { value: '126', label: 'Eggnog' },
  { value: '127', label: 'Cálice Medieval' },
  { value: '128', label: 'Sorvete de Morango' },
  { value: '129', label: 'Sorvete de Menta' },
  { value: '130', label: 'Sorvete de Chocolate' },
  { value: '131', label: 'Creme Clearasil' },
  { value: '132', label: 'Algodão Doce Rosa' },
  { value: '133', label: 'Algodão Doce Azul' },
  { value: '134', label: 'Cachorro-quente' },
  { value: '135', label: 'Pelouro' },
  { value: '136', label: 'Luneta' },
  { value: '137', label: 'Maçã Suculenta' },
  { value: '138', label: 'Bandeira Preta' },
  { value: '139', label: 'Biscoito de Gengibre' },
  { value: '140', label: 'Marreta' },
  { value: '141', label: 'Ovo de Páscoa' },
  { value: '142', label: 'Pincel' },
  { value: '143', label: 'Bandeira Branca' },
  { value: '144', label: 'Americano' },
  { value: '145', label: 'Frappuccino' },
  { value: '146', label: 'Pato' },
  { value: '147', label: 'Bexiga Laranja' },
  { value: '148', label: 'Bexiga Verde' },
  { value: '149', label: 'Bexiga Azul' },
  { value: '150', label: 'Bexiga Rosa' },
  { value: '151', label: 'Lampião' },
  { value: '152', label: 'Caneca com Água' },
  { value: '153', label: 'Rum' },
  { value: '154', label: 'Papel Higiênico' },
  { value: '155', label: 'Cravo-de-tunes' },
  { value: '156', label: 'Caveira de Doces Rosa' },
  { value: '157', label: 'Caveira de Doces Verde' },
  { value: '158', label: 'Caveira de Doces Azul' },
  { value: '159', label: 'Cupcake' },
  { value: '160', label: 'Champanhe Rosé' },
  { value: '161', label: 'Boneca Emília' },
  { value: '162', label: 'Ursinho' },
  { value: '163', label: 'Soldadinho' },
  { value: '164', label: 'Chá Oriental' },
  { value: '165', label: 'Revista de Mangá' },
  { value: '166', label: 'Revista em Quadrinhos' },
  { value: '167', label: 'Livro Amarelo' },
  { value: '168', label: 'Goma de Mascar Azul' },
  { value: '169', label: 'Goma de Mascar Vermelho' },
  { value: '170', label: 'Goma de Mascar Rosa' },
  { value: '171', label: 'Goma de Mascar Verde' },
  { value: '172', label: 'HiPad Dourado' },
  { value: '173', label: 'Bússola' },
  { value: '174', label: 'Ovo Dino' },
  { value: '175', label: 'Alossauro Verde' },
  { value: '176', label: 'Tricerátopo Amarelo' },
  { value: '177', label: 'Saurolofo Roxo' },
  { value: '178', label: 'Fatia de Bolo' },
  { value: '179', label: 'Croissant' },
  { value: '180', label: 'Tomate' },
  { value: '181', label: 'Beringela' },
  { value: '182', label: 'Repolho' },
  { value: '183', label: 'Suco Borbulhante' },
  { value: '184', label: 'Toalha Spa Verde' },
  { value: '185', label: 'Energético' },
  { value: '186', label: 'Banana' },
  { value: '187', label: 'Abacate' },
  { value: '188', label: 'Uvas' },
  { value: '189', label: 'Vitamina' },
  { value: '190', label: 'Suco de Vegetais' },
  { value: '191', label: 'Haltere' },
  { value: '192', label: 'Hambúrguer' },
  { value: '193', label: 'Carta' },
  { value: '194', label: 'Carangueijo' },
  { value: '196', label: 'Pimenta Malagueta' },
  { value: '197', label: 'Vitamina Cítrica' },
  { value: '198', label: 'Vitamina Detox' },
  { value: '199', label: 'Vitamina Framboesa' },
  { value: '200', label: 'Limão' },
  { value: '201', label: 'Cookie' },
  { value: '202', label: 'Ramune Rosa' },
  { value: '203', label: 'Ramune Azul' },
  { value: '204', label: 'Besouro Lucano' },
  { value: '205', label: 'Besouro Rinoceronte' },
  { value: '206', label: 'Raspadinha de Mirtilo' },
  { value: '207', label: 'Raspadinha de Morango' },
  { value: '208', label: 'Espetinho de Takoyaki' },
  { value: '209', label: 'Caldo Forte' },
  { value: '210', label: 'Chá Bobba Crepúsculo' },
  { value: '211', label: 'Chá Bobba Verde' },
  { value: '212', label: 'Chá Bobba Pink' },
  { value: '213', label: 'Sorvete de Casquinha' },
  { value: '214', label: 'Sorvete de Carvão' },
  { value: '215', label: 'Regador' },
  { value: '216', label: 'Bandeira do Orgulho' },
  { value: '217', label: 'Abóbora de Arrepiar' },
  { value: '218', label: 'Iogurte' },
  { value: '219', label: 'Queijo' },
  { value: '220', label: 'Pão' },
  { value: '221', label: 'Camarão' },
  { value: '222', label: 'Brócolis' },
  { value: '223', label: 'Melancia' },
  { value: '224', label: 'Sacola de Compras' },
  { value: '225', label: 'Donut' },
  { value: '226', label: 'Linguiças' },
  { value: '227', label: 'DVD Ação' },
  { value: '228', label: 'DVD Terror' },
  { value: '229', label: 'Caderno' },
  { value: '230', label: 'Lápis' },
  { value: '231', label: 'Picolé' },
  { value: '232', label: 'Saco de Salgadinhos' },
  { value: '233', label: 'Saco de Salgadinhos' },
  { value: '234', label: 'Bebida Glacial' },
  { value: '235', label: 'Vara de Pescar 3' },
  { value: '236', label: 'Vara de Pescar 2' },
  { value: '237', label: 'Vara de Pescar 1' },
  { value: '238', label: 'Banana com Chocolate' },
  { value: '239', label: 'Morango com Chocolate' },
  { value: '240', label: 'Bandeira Dourada' },
  { value: '241', label: 'Espada' },
  { value: '242', label: 'Coração' },
  { value: '244', label: 'Celular' },
  { value: '245', label: 'Café Barista' },
  { value: '246', label: 'Garrafa de Fanta' },
  { value: '247', label: 'Lupa' },
  { value: '248', label: 'Café com Chantilly' },
  { value: '249', label: 'Vasinho com Muda' },
  { value: '250', label: 'Dalgona com Estrela' },
  { value: '251', label: 'Dalgona com Círculo' },
  { value: '252', label: 'Dalgona com Quadrado' },
  { value: '253', label: 'Robozinho' },
  { value: '254', label: 'Ursinho Teddy' },
  { value: '255', label: 'Pato Férias' },
  { value: '256', label: 'Bola de Futebol' },
  { value: '257', label: 'Taco do Diálogo' },
  { value: '258', label: 'Bola de Tênis' },
  { value: '259', label: 'Torrada Hello Kitty' },
  { value: '260', label: 'H-Phone' },
  { value: '261', label: 'Microfone DR Sports' },
  { value: '262', label: 'Poção Kryptomon Rosa' },
  { value: '263', label: 'Refrigerante Bear' },
  { value: '267', label: 'Suco de Pêra' },
  { value: '271', label: 'Sorvete Arco-Íris' },
  { value: '272', label: 'football' },
  { value: '273', label: 'Palitinho de Marshmallow' },
  { value: '274', label: 'Cupcake' },
  { value: '275', label: 'Astral Bow' },
  { value: '276', label: 'Virvontavitsa' },
  { value: '278', label: 'Sorvetinho de Baunilha' },
  { value: '281', label: 'Batata' },
  { value: '284', label: 'Coxinha' },
  { value: '286', label: 'Chocolate Quente' },
  { value: '288', label: 'Pato Rosa' },
  { value: '289', label: 'Faca' },
  { value: '290', label: 'Bolo Pato' },
  { value: '291', label: 'Milkshake de Banana' },
  { value: '292', label: 'Frappucino Banana Deluxe' },
  { value: '667', label: 'Suco de Bolhas de 1978' },
];

const AvatarGenerator: React.FC<AvatarGeneratorProps> = ({ onBack, onNotify }) => {
  const [user, setUser] = useState('BotecoDaMadruga');
  const [rosto, setRosto] = useState('std');
  const [acao, setAcao] = useState('std');
  const [objeto, setObjeto] = useState('');
  const [isDrinking, setIsDrinking] = useState(false);
  const [tamanho, setTamanho] = useState('l');
  const [hotel, setHotel] = useState('com.br');
  const [formato, setFormato] = useState('png');
  const [isHeadOnly, setIsHeadOnly] = useState(false);
  const [direction, setDirection] = useState(2);
  const [headDirection, setHeadDirection] = useState(2);
  const [avatarUrl, setAvatarUrl] = useState('');
  
  // Estados para dropdowns customizados
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let actionParam = acao;
    if (objeto !== '') {
      const type = isDrinking ? 'drk' : 'crr';
      actionParam = `${acao},${type}=${objeto}`;
    }
    const headOnlyParam = isHeadOnly ? '1' : '0';
    const url = `https://www.habbo.${hotel}/habbo-imaging/avatarimage?&user=${user}&action=${actionParam}&direction=${direction}&head_direction=${headDirection}&img_format=${formato}&gesture=${rosto}&headonly=${headOnlyParam}&size=${tamanho}`;
    setAvatarUrl(url);
  }, [user, rosto, acao, objeto, isDrinking, tamanho, hotel, formato, isHeadOnly, direction, headDirection]);

  // Fechar dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownKeyDown = (
    e: React.KeyboardEvent, 
    options: { value: string, label: string }[], 
    currentValue: string, 
    setter: (val: string) => void,
    menuId: string
  ) => {
    if (activeMenu !== menuId) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
        const idx = options.findIndex(o => o.value === currentValue);
        setFocusedIndex(idx >= 0 ? idx : 0);
        setActiveMenu(menuId);
        e.preventDefault();
      }
      return;
    }

    let nextIndex = focusedIndex;
    switch (e.key) {
      case 'ArrowDown':
        nextIndex = focusedIndex < options.length - 1 ? focusedIndex + 1 : 0;
        setFocusedIndex(nextIndex);
        setter(options[nextIndex].value);
        e.preventDefault();
        break;
      case 'ArrowUp':
        nextIndex = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
        setFocusedIndex(nextIndex);
        setter(options[nextIndex].value);
        e.preventDefault();
        break;
      case 'Enter':
        setActiveMenu(null);
        e.preventDefault();
        break;
      case 'Escape':
        setActiveMenu(null);
        e.preventDefault();
        break;
    }
  };

  const rotate = (type: 'head' | 'body', way: 'l' | 'r') => {
    if (type === 'head') {
      setHeadDirection(prev => way === 'l' ? (prev < 7 ? prev + 1 : 0) : (prev > 0 ? prev - 1 : 7));
    } else {
      setDirection(prev => way === 'l' ? (prev < 7 ? prev + 1 : 0) : (prev > 0 ? prev - 1 : 7));
    }
  };

  const renderDropdown = (
    label: string, 
    id: string, 
    options: { value: string, label: string }[], 
    currentValue: string, 
    setter: (v: string) => void
  ) => {
    const isOpen = activeMenu === id;
    const selectedLabel = options.find(o => o.value === currentValue)?.label || 'Selecionar...';

    return (
      <div className="space-y-2 relative">
        <label className="text-xs font-bold text-gray-500 uppercase">{label}</label>
        <button 
          type="button"
          onClick={() => {
            if (!isOpen) {
              const idx = options.findIndex(o => o.value === currentValue);
              setFocusedIndex(idx >= 0 ? idx : 0);
            }
            setActiveMenu(isOpen ? null : id);
          }}
          onKeyDown={(e) => handleDropdownKeyDown(e, options, currentValue, setter, id)}
          className="w-full bg-[#191919] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white text-left flex justify-between items-center hover:border-brand/50 transition-colors focus:ring-1 focus:ring-brand/50"
        >
          <span className="truncate">{selectedLabel}</span>
          <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
        </button>

        {isOpen && (
          <div className="absolute z-[100] top-full left-0 w-full mt-2 bg-[#101010] border border-[#1E1E1E] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="max-h-60 overflow-y-auto custom-scrollbar p-1">
              {options.map((obj, index) => (
                <button
                  key={`${id}-${obj.value}-${index}`}
                  type="button"
                  onClick={() => {
                    setter(obj.value);
                    setActiveMenu(null);
                  }}
                  onMouseEnter={() => setFocusedIndex(index)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    currentValue === obj.value 
                    ? 'bg-brand/20 text-brand font-bold' 
                    : focusedIndex === index
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {obj.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="animate-in fade-in duration-500" ref={containerRef}>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-white">Gerador de Avatar</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Esquerda: Configurações */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-2xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Usuário */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Habbo Nome</label>
              <input 
                type="text" 
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Ex: Bromarks"
                className="w-full bg-[#191919] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white focus:border-brand transition-colors"
              />
            </div>

            {/* Hotel Custom */}
            {renderDropdown('Hotel', 'hotel', HOTELS, hotel, setHotel)}

            {/* Expressão Custom */}
            {renderDropdown('Expressão', 'rosto', EXPRESSOES, rosto, setRosto)}

            {/* Ação Custom */}
            {renderDropdown('Ação', 'acao', ACOES, acao, setAcao)}

            {/* Objeto Custom */}
            {renderDropdown('Objeto', 'objeto', HABBO_OBJECTS, objeto, setObjeto)}

            {/* Bebendo/Comendo */}
            {objeto !== '' && (
              <div className="flex items-center gap-3 h-full pt-6">
                <input 
                  type="checkbox" 
                  checked={isDrinking}
                  onChange={(e) => setIsDrinking(e.target.checked)}
                  className="w-5 h-5 rounded border-[#1E1E1E] bg-[#191919] text-brand focus:ring-brand cursor-pointer"
                />
                <label className="text-sm text-gray-400 cursor-pointer">Bebendo/Comendo</label>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            {/* Tamanho */}
            <div className="space-y-4">
              <label className="text-xs font-bold text-gray-500 uppercase">Tamanho</label>
              <div className="flex gap-4">
                {[
                  { id: 's', label: 'Pequeno' },
                  { id: 'b', label: 'Médio' },
                  { id: 'l', label: 'Grande' }
                ].map(t => (
                  <label key={t.id} className="flex flex-col items-center gap-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="size" 
                      value={t.id}
                      checked={tamanho === t.id}
                      onChange={(e) => setTamanho(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all ${
                      tamanho === t.id ? 'border-brand bg-brand/20 text-brand' : 'border-[#1E1E1E] text-gray-600 group-hover:border-gray-500'
                    }`}>
                      <span className="font-bold">{t.id.toUpperCase()}</span>
                    </div>
                    <span className="text-[10px] text-gray-500 uppercase font-bold">{t.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Formato Custom */}
            {renderDropdown('Formato', 'formato', FORMATOS, formato, setFormato)}
          </div>

          {/* URL Output */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Link da Imagem</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                readOnly 
                value={avatarUrl}
                className="flex-1 bg-[#050505] border border-[#1E1E1E] rounded-xl px-4 py-2 text-[10px] font-mono text-brand focus:outline-none"
              />
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(avatarUrl);
                  onNotify('Link do avatar copiado!', 'success');
                }}
                className="px-4 py-2 bg-brand/10 text-brand border border-brand/20 rounded-xl hover:bg-brand hover:text-white transition-all"
              >
                <i className="fa-solid fa-copy"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Direita: Preview e Controles */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center relative min-h-[350px]">
            <div className="relative cursor-default">
              <img 
                src={avatarUrl} 
                alt="Habbo Avatar Preview" 
                className="max-h-[220px] object-contain" 
                style={{ imageRendering: 'pixelated' }}
              />
            </div>

            {/* Badge de Head Only */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <input 
                type="checkbox" 
                id="head_only"
                checked={isHeadOnly}
                onChange={(e) => setIsHeadOnly(e.target.checked)}
                className="w-5 h-5 rounded border-[#1E1E1E] bg-[#191919] text-brand focus:ring-brand"
              />
              <label htmlFor="head_only" className="text-xs font-bold text-gray-500 uppercase cursor-pointer">Só Cabeça</label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Girar Cabeça */}
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center gap-3">
              <span className="text-[10px] font-bold text-gray-500 uppercase">Cabeça</span>
              <div className="flex gap-4">
                <button 
                  onClick={() => rotate('head', 'l')}
                  className="w-10 h-10 rounded-lg bg-[#191919] border border-[#1E1E1E] hover:border-brand text-gray-400 hover:text-brand transition-all"
                >
                  <i className="fa-solid fa-arrow-rotate-left"></i>
                </button>
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className="fa-solid fa-user-gear text-brand opacity-50"></i>
                </div>
                <button 
                  onClick={() => rotate('head', 'r')}
                  className="w-10 h-10 rounded-lg bg-[#191919] border border-[#1E1E1E] hover:border-brand text-gray-400 hover:text-brand transition-all"
                >
                  <i className="fa-solid fa-arrow-rotate-right"></i>
                </button>
              </div>
            </div>

            {/* Girar Corpo */}
            <div className="glass-panel p-4 rounded-xl flex flex-col items-center gap-3">
              <span className="text-[10px] font-bold text-gray-500 uppercase">Corpo</span>
              <div className="flex gap-4">
                <button 
                  onClick={() => rotate('body', 'l')}
                  className="w-10 h-10 rounded-lg bg-[#191919] border border-[#1E1E1E] hover:border-brand text-gray-400 hover:text-brand transition-all"
                >
                  <i className="fa-solid fa-arrow-rotate-left"></i>
                </button>
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className="fa-solid fa-person text-brand opacity-50"></i>
                </div>
                <button 
                  onClick={() => rotate('body', 'r')}
                  className="w-10 h-10 rounded-lg bg-[#191919] border border-[#1E1E1E] hover:border-brand text-gray-400 hover:text-brand transition-all"
                >
                  <i className="fa-solid fa-arrow-rotate-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Botão Baixar Avatar - SEM ZOOM */}
          <a 
            href={avatarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-brand rounded-xl text-center font-bold text-white shadow-lg shadow-brand/20 hover:bg-[#967642] transition-all flex items-center justify-center gap-3"
          >
            <i className="fa-solid fa-download"></i>
            Baixar Avatar
          </a>
        </div>
      </div>
    </div>
  );
};

export default AvatarGenerator;
