export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <p className="text-gold text-sm tracking-[0.3em] mb-2">DEPUIS 1998</p>
              <div className="w-20 h-0.5 bg-gold"></div>
            </div>
            <h2 className="text-5xl font-serif mb-6 text-neutral-900">
              L&apos;Art de la
              <br />
              Gastronomie Française
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Niché au cœur de Paris, Le Jardin Secret vous invite à découvrir une cuisine 
              d&apos;exception qui célèbre les saveurs authentiques de la gastronomie française. 
              Chaque assiette est une œuvre d&apos;art, méticuleusement préparée avec des 
              ingrédients de saison soigneusement sélectionnés.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Notre chef étoilé et son équipe vous proposent une expérience culinaire 
              unique dans un cadre intimiste et élégant. De l&apos;amuse-bouche au dessert, 
              laissez-vous transporter par un voyage gastronomique inoubliable.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="border-r border-neutral-200">
                <p className="text-4xl font-serif text-gold mb-2">⭐⭐</p>
                <p className="text-sm text-gray-600">Michelin</p>
              </div>
              <div className="border-r border-neutral-200">
                <p className="text-4xl font-serif text-gold mb-2">26</p>
                <p className="text-sm text-gray-600">Années</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-gold mb-2">50+</p>
                <p className="text-sm text-gray-600">Spécialités</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-sm shadow-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold/10 -z-10"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 border border-gold/20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}