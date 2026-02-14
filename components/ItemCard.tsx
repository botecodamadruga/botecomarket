
import React, { useState } from 'react';
import { ShopItem, ItemCategory } from '../types';

interface ItemCardProps {
  item: ShopItem;
  onNotify: (msg: string, type: 'success' | 'error') => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onNotify }) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Formata o comando conforme solicitado: /comprar categoria:Nome codigo:id
  const command = `/comprar categoria:${item.category} codigo:${item.id}`;

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Lendário': return 'text-yellow-400 border-yellow-400 bg-yellow-400/10';
      case 'Épico': return 'text-purple-400 border-purple-400 bg-purple-400/10';
      case 'Raro': return 'text-blue-400 border-blue-400 bg-blue-400/10';
      default: return 'text-gray-400 border-gray-400 bg-gray-400/10';
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    onNotify(`Comando copiado!`, 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="glass-panel rounded-lg overflow-hidden group flex flex-col h-full relative border border-[#1E1E1E] hover:border-[#826538]/50 transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagem do Item (Backgrounds e Molduras) */}
      {(item.category === ItemCategory.BACKGROUND || item.category === ItemCategory.FRAME) && item.imageUrl && (
        <div className="h-32 overflow-hidden relative">
          <img 
            src={item.imageUrl} 
            alt={item.name} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${item.hoverImageUrl && isHovered ? 'opacity-0' : 'opacity-100'}`}
          />
          {item.hoverImageUrl && (
            <img 
              src={item.hoverImageUrl} 
              alt={`${item.name} hover`} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />
          )}
        </div>
      )}

      {/* Seção de Badges - Zoom aplicado EXCLUSIVAMENTE na tag img/i */}
      {item.category === ItemCategory.BADGE && (
        <div className="h-32 flex items-center justify-center bg-slate-800/10 overflow-hidden relative">
          <div className="p-3 flex items-center justify-center">
            {item.imageUrl ? (
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="w-16 h-16 object-contain relative z-10 transition-transform duration-300 group-hover:scale-125"
              />
            ) : (
              <i className={`${item.icon} text-5xl text-brand relative z-10 transition-transform duration-300 group-hover:scale-125`}></i>
            )}
          </div>
        </div>
      )}

      {/* Seção de Cargos com reflexo no pill */}
      {item.category === ItemCategory.ROLE && (
        <div className="h-32 flex items-center justify-center bg-gradient-to-br from-[#826538]/10 to-transparent">
          <div className="px-4 py-2 rounded-full border-2 border-[#826538]/50 bg-[#826538]/10 text-brand font-bold animate-shine">
            {item.name}
          </div>
        </div>
      )}

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-white group-hover:text-brand transition-colors duration-300">{item.name}</h3>
          <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${getRarityColor(item.rarity)}`}>
            {item.rarity}
          </span>
        </div>
        
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{item.description}</p>
        
        <div className="mt-auto pt-4 flex flex-col gap-3 border-t border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-yellow-400 font-bold">
              <i className="fa-solid fa-coins"></i>
              <span>{item.price.toLocaleString()}</span>
            </div>
            <span className="text-[10px] text-gray-500 font-medium italic">Copie o comando</span>
          </div>

          <div className="flex items-center gap-2 bg-[#191919] rounded-lg p-2 border border-[#1E1E1E]">
            <code className="flex-1 text-[10px] text-brand font-mono truncate" title={command}>
              {command}
            </code>
            <button 
              onClick={handleCopy}
              className={`p-1.5 rounded-md flex-shrink-0 transition-colors ${
                copied ? 'bg-green-500/20 text-green-400' : 'bg-[#826538]/10 text-brand hover:bg-[#826538] hover:text-white'
              }`}
              title="Copiar comando completo"
            >
              <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
