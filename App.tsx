
import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import ItemCard from './components/ItemCard';
import AvatarGenerator from './components/AvatarGenerator';
import { ItemCategory } from './types';
import { SHOP_ITEMS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<'shop' | 'avatar'>('shop');
  const [activeCategory, setActiveCategory] = useState<ItemCategory | 'Todos'>('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState<{msg: string, type: 'success' | 'error'} | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);

  const DISCORD_LINK = "https://discord.gg/4Ss2pk9CU2";

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const showNotification = (msg: string, type: 'success' | 'error') => {
    setNotification({ msg, type });
  };

  const handleCopyInvite = () => {
    navigator.clipboard.writeText(DISCORD_LINK);
    setLinkCopied(true);
    showNotification("Link do convite copiado!", 'success');
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const filteredItems = useMemo(() => {
    return SHOP_ITEMS.filter(item => {
      const matchesCategory = activeCategory === 'Todos' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const handleCategoryChange = (e: React.MouseEvent<HTMLButtonElement>, cat: ItemCategory | 'Todos') => {
    setActiveCategory(cat);
    (e.currentTarget as HTMLButtonElement).blur();
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 flex flex-col">
      <Navbar />
      
      {/* Hero Section - Apenas visível na Loja */}
      {view === 'shop' && (
        <header className="relative py-16 px-6 overflow-hidden flex-shrink-0 text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#826538]/10 to-transparent pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Boteco Market
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
              Explore nossa coleção exclusiva. Adquira itens únicos copiando o código e usando no servidor do Discord!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="glass-panel px-6 py-3 rounded-2xl flex items-center gap-3">
                <i className="fa-brands fa-discord text-brand"></i>
                <span className="text-sm font-medium">Disponíveis em nosso servidor</span>
              </div>
              <div className="glass-panel px-6 py-3 rounded-2xl flex items-center gap-3">
                <i className="fa-solid fa-bolt text-yellow-400"></i>
                <span className="text-sm font-medium">Coleções Exclusivas</span>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <main className={`max-w-7xl mx-auto w-full px-6 pb-20 flex-1 flex flex-col md:flex-row gap-8 ${view === 'avatar' ? 'pt-10' : ''}`}>
        
        {/* Sidebar Controls */}
        <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-6">
          <div className="sticky top-28 space-y-4">
            
            {/* Botão de Trocar para Avatar/Loja - SEM ZOOM */}
            <button 
              onClick={() => setView(view === 'shop' ? 'avatar' : 'shop')}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${
                view === 'avatar' 
                ? 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10' 
                : 'bg-brand text-white shadow-lg shadow-brand/20 hover:bg-[#967642]'
              }`}
            >
              {view === 'shop' ? (
                <>
                  <i className="fa-solid fa-user-astronaut"></i>
                  Gerar Avatar
                </>
              ) : (
                <>
                  <i className="fa-solid fa-store"></i>
                  Voltar para Loja
                </>
              )}
            </button>

            {/* Filters Card - Apenas na Loja */}
            {view === 'shop' && (
              <div className="glass-panel p-5 rounded-lg border border-[#1E1E1E]">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-sliders text-brand"></i> Filtros
                </h3>
                
                <div className="mb-6">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Buscar</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Nome do item..."
                      className="w-full bg-[#191919] border border-[#1E1E1E] rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-0 focus:border-[#826538] transition-colors"
                    />
                    <i className="fa-solid fa-magnifying-glass absolute right-3 top-2.5 text-gray-500 text-xs"></i>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Categoria</label>
                  {['Todos', ...Object.values(ItemCategory)].map(cat => (
                    <button
                      key={cat}
                      onClick={(e) => handleCategoryChange(e, cat as any)}
                      className={`category-btn w-full text-left px-4 py-2 rounded-xl text-sm outline-none ring-0 focus:outline-none focus:ring-0 select-none ${
                        activeCategory === cat 
                        ? 'bg-[#826538]/20 text-brand border border-[#826538]/30 font-semibold cursor-default' 
                        : 'text-gray-400 border border-transparent hover:bg-white/5 hover:text-white active:scale-[0.98]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Discord Invite Card */}
            <div className="p-5 rounded-lg border border-[#1E1E1E] bg-[#101010]">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-white">
                <i className="fa-brands fa-discord text-brand"></i> Nosso Servidor
              </h3>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Entre em nossa comunidade para comprar itens e participar de eventos exclusivos!
              </p>
              
              <div className="flex items-center gap-2 bg-[#191919] rounded-lg p-2 border border-[#1E1E1E]">
                <code className="flex-1 text-[10px] text-gray-500 font-mono truncate">
                  discord.gg/4Ss2pk9CU2
                </code>
                <button 
                  onClick={handleCopyInvite}
                  className={`p-1.5 rounded-md transition-all ${
                    linkCopied ? 'bg-green-500/20 text-green-400' : 'bg-[#826538]/10 text-brand hover:bg-[#826538] hover:text-white'
                  }`}
                  title="Copiar convite"
                >
                  <i className={`fa-solid ${linkCopied ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
              
              <a 
                href={DISCORD_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-3 block text-center py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-bold transition-colors uppercase tracking-wider animate-shine"
              >
                Entrar agora
              </a>
            </div>
          </div>
        </aside>

        {/* Dynamic Area */}
        <section className="flex-1 min-h-[600px]">
          {view === 'shop' ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  Loja: <span className="text-brand">{activeCategory}</span>
                  <span className="text-xs font-normal text-gray-500 ml-2">({filteredItems.length} itens)</span>
                </h3>
              </div>

              <div className="relative">
                {filteredItems.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 content-start">
                    {filteredItems.map(item => (
                      <ItemCard 
                        key={item.id} 
                        item={item} 
                        onNotify={showNotification}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 glass-panel rounded-lg w-full">
                    <i className="fa-solid fa-ghost text-5xl text-slate-800 mb-4"></i>
                    <p className="text-gray-500">Nenhum item encontrado nesta categoria.</p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <AvatarGenerator onBack={() => setView('shop')} onNotify={showNotification} />
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-900 bg-[#050505] mt-auto flex-shrink-0">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center text-gray-500 text-sm text-center">
          <div className="flex items-center gap-2">
            <span>© 2026 Boteco da Madruga. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>

      {/* Notification Toast */}
      {notification && (
        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 border ${
          notification.type === 'success' 
          ? 'bg-green-600 text-white border-green-500' 
          : 'bg-red-500 text-white border-red-400'
        }`}>
          <i className={`fa-solid ${notification.type === 'success' ? 'fa-circle-check' : 'fa-circle-xmark'}`}></i>
          <span className="font-bold text-sm">{notification.msg}</span>
        </div>
      )}
    </div>
  );
};

export default App;
