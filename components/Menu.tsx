export default function Menu() {
  const menuItems = {
    entrees: [
      {
        name: 'Foie Gras de Canard',
        description: 'Chutney de figues et pain toasté',
        price: '28€',
      },
      {
        name: 'Saint-Jacques Poêlées',
        description: 'Purée de céleri et émulsion de truffe',
        price: '32€',
      },
      {
        name: 'Carpaccio de Bœuf',
        description: 'Roquette, parmesan et huile de truffe',
        price: '24€',
      },
    ],
    plats: [
      {
        name: 'Homard Bleu Breton',
        description: 'Risotto crémeux et bisque corsée',
        price: '58€',
      },
      {
        name: 'Côte de Bœuf Wagyu',
        description: 'Légumes de saison et jus au poivre',
        price: '65€',
      },
      {
        name: 'Bar de Ligne',
        description: 'Fenouil braisé et sauce beurre blanc',
        price: '48€',
      },
    ],
    desserts: [
      {
        name: 'Soufflé au Grand Marnier',
        description: 'Crème anglaise vanille',
        price: '18€',
      },
      {
        name: 'Tarte Tatin',
        description: 'Glace vanille de Madagascar',
        price: '16€',
      },
      {
        name: 'Fondant au Chocolat',
        description: 'Cœur coulant et glace pistache',
        price: '16€',
      },
    ],
  }

  return (
    <section id="menu" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] mb-4">NOTRE CARTE</p>
          <h2 className="text-5xl font-serif mb-4">Menu Dégustation</h2>
          <div className="w-24 h-0.5 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif text-gold mb-8 text-center">Entrées</h3>
            <div className="space-y-8">
              {menuItems.entrees.map((item, index) => (
                <div key={index} className="pb-6 border-b border-neutral-800">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-lg">{item.name}</h4>
                    <span className="text-gold font-semibold">{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-gold mb-8 text-center">Plats</h3>
            <div className="space-y-8">
              {menuItems.plats.map((item, index) => (
                <div key={index} className="pb-6 border-b border-neutral-800">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-lg">{item.name}</h4>
                    <span className="text-gold font-semibold">{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-gold mb-8 text-center">Desserts</h3>
            <div className="space-y-8">
              {menuItems.desserts.map((item, index) => (
                <div key={index} className="pb-6 border-b border-neutral-800">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-serif text-lg">{item.name}</h4>
                    <span className="text-gold font-semibold">{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Menu dégustation 7 plats : 145€ | Accord mets & vins : +65€</p>
          <a
            href="#reservation"
            className="inline-block border-2 border-gold text-gold px-10 py-4 font-semibold tracking-wider hover:bg-gold hover:text-neutral-900 transition-all"
          >
            RÉSERVER MAINTENANT
          </a>
        </div>
      </div>
    </section>
  )
}