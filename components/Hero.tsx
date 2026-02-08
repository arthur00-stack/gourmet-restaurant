export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=')] opacity-30"></div>
      
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-serif text-gold">Le Jardin Secret</h1>
        <div className="flex gap-8 text-sm tracking-wider">
          <a href="#menu" className="hover:text-gold transition">MENU</a>
          <a href="#chef" className="hover:text-gold transition">CHEF</a>
          <a href="#reservation" className="hover:text-gold transition">RÉSERVER</a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 -mt-20">
        <div className="mb-8">
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-gold text-sm tracking-[0.3em] mb-4">GASTRONOMIE FRANÇAISE</p>
        </div>
        
        <h2 className="text-6xl md:text-8xl font-serif mb-6 tracking-tight">
          Une Expérience
          <br />
          <span className="text-gold">Inoubliable</span>
        </h2>
        
        <p className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
          Découvrez une cuisine raffinée où chaque plat raconte une histoire
        </p>

        <div className="flex gap-6">
          <a
            href="#reservation"
            className="bg-gold text-neutral-900 px-10 py-4 font-semibold tracking-wider hover:bg-darkGold transition-all transform hover:scale-105"
          >
            RÉSERVER UNE TABLE
          </a>
          <a
            href="#menu"
            className="border-2 border-gold text-gold px-10 py-4 font-semibold tracking-wider hover:bg-gold hover:text-neutral-900 transition-all"
          >
            VOIR LE MENU
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}