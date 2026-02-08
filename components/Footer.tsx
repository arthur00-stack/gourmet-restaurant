export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif text-gold mb-4">Le Jardin Secret</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Une expérience gastronomique d&apos;exception au cœur de Paris. 
              Deux étoiles Michelin depuis 2020.
            </p>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="text-gold hover:text-darkGold transition">📘</a>
              <a href="#" className="text-gold hover:text-darkGold transition">📷</a>
              <a href="#" className="text-gold hover:text-darkGold transition">🐦</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#menu" className="hover:text-white transition">Notre Menu</a></li>
              <li><a href="#chef" className="hover:text-white transition">Le Chef</a></li>
              <li><a href="#reservation" className="hover:text-white transition">Réserver</a></li>
              <li><a href="#" className="hover:text-white transition">Événements Privés</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Informations</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-white transition">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition">CGV</a></li>
              <li><a href="#" className="hover:text-white transition">Presse</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-500">
            <div>
              <p>&copy; 2024 Le Jardin Secret. Tous droits réservés.</p>
            </div>
            <div className="md:text-right">
              <p>45 Rue de la Paix, 75002 Paris | +33 1 42 96 10 40</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}