export default function Reservation() {
  return (
    <section id="reservation" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="mb-8">
              <p className="text-gold text-sm tracking-[0.3em] mb-2">RÉSERVATION</p>
              <div className="w-20 h-0.5 bg-gold"></div>
            </div>
            
            <h2 className="text-5xl font-serif mb-8">
              Réservez Votre Table
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="text-3xl text-gold">📍</div>
                <div>
                  <h3 className="font-semibold mb-1">Adresse</h3>
                  <p className="text-gray-400">
                    45 Rue de la Paix
                    <br />
                    75002 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl text-gold">🕐</div>
                <div>
                  <h3 className="font-semibold mb-1">Horaires</h3>
                  <p className="text-gray-400">
                    Déjeuner : 12h - 14h30
                    <br />
                    Dîner : 19h - 22h30
                    <br />
                    Fermé dimanche & lundi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl text-gold">📞</div>
                <div>
                  <h3 className="font-semibold mb-1">Contact</h3>
                  <p className="text-gray-400">
                    Tél : +33 1 42 96 10 40
                    <br />
                    Email : contact@lejardinsecret.fr
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gold/10 border border-gold/20 p-6 rounded-sm">
              <p className="text-sm text-gray-300 leading-relaxed">
                💡 <strong>Bon à savoir :</strong> Nous recommandons de réserver au moins 
                2 semaines à l&apos;avance, particulièrement pour les dîners du week-end. 
                Une tenue correcte est exigée.
              </p>
            </div>
          </div>

          <div className="bg-neutral-800 p-10 rounded-sm border border-neutral-700">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Prénom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition text-white rounded-sm"
                    placeholder="Jean"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition text-white rounded-sm"
                    placeholder="Dupont"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition text-white rounded-sm"
                  placeholder="jean.dupont@exemple.fr"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition text-white rounded-sm"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition text-white rounded-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Heure
                  </label>
                  <select className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition text-white rounded-sm">
                    <option>12h00</option>
                    <option>12h30</option>
                    <option>13h00</option>
                    <option>13h30</option>
                    <option>19h00</option>
                    <option>19h30</option>
                    <option>20h00</option>
                    <option>20h30</option>
                    <option>21h00</option>
                    <option>21h30</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Nombre de personnes
                </label>
                <select className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition text-white rounded-sm">
                  <option>1 personne</option>
                  <option>2 personnes</option>
                  <option>3 personnes</option>
                  <option>4 personnes</option>
                  <option>5 personnes</option>
                  <option>6 personnes</option>
                  <option>Plus de 6 personnes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Demandes spéciales
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition text-white resize-none rounded-sm"
                  placeholder="Allergies, occasions spéciales, préférences..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-neutral-900 px-8 py-4 font-semibold tracking-wider hover:bg-darkGold transition-all transform hover:scale-105 rounded-sm"
              >
                CONFIRMER LA RÉSERVATION
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}