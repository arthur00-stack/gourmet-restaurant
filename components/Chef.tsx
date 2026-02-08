export default function Chef() {
  return (
    <section id="chef" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-square bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-sm shadow-2xl relative">
              <div className="absolute inset-0 flex items-center justify-center text-8xl">
                👨‍🍳
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="mb-6">
              <p className="text-gold text-sm tracking-[0.3em] mb-2">CHEF EXÉCUTIF</p>
              <div className="w-20 h-0.5 bg-gold"></div>
            </div>
            
            <h2 className="text-5xl font-serif mb-4 text-neutral-900">
              Pierre Dubois
            </h2>
            
            <p className="text-xl text-gold mb-6 font-serif italic">
              &quot;La cuisine est un art qui se partage&quot;
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Formé dans les plus grandes maisons de France, le Chef Pierre Dubois a 
              travaillé aux côtés de maîtres de la gastronomie avant de créer Le Jardin 
              Secret en 1998. Son approche moderne de la cuisine classique française lui 
              a valu deux étoiles Michelin.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              Passionné par les produits locaux et de saison, il collabore étroitement 
              avec des producteurs triés sur le volet pour garantir une qualité 
              exceptionnelle dans chaque assiette. Sa philosophie : sublimer le produit 
              dans sa simplicité.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-3xl">🏆</div>
                <div>
                  <p className="font-semibold text-neutral-900">2 Étoiles Michelin</p>
                  <p className="text-sm text-gray-600">Guide Michelin 2020-2024</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl">📖</div>
                <div>
                  <p className="font-semibold text-neutral-900">Auteur</p>
                  <p className="text-sm text-gray-600">&quot;La Cuisine de Saison&quot; - 2022</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <p className="font-semibold text-neutral-900">Formation</p>
                  <p className="text-sm text-gray-600">Institut Paul Bocuse, Lyon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}