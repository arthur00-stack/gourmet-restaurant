export default function Gallery() {
  const images = [
    { title: 'Salle Principale', gradient: 'from-amber-200 to-amber-400' },
    { title: 'Plat Signature', gradient: 'from-rose-200 to-rose-400' },
    { title: 'Bar à Vins', gradient: 'from-purple-200 to-purple-400' },
    { title: 'Cuisine Ouverte', gradient: 'from-blue-200 to-blue-400' },
    { title: 'Terrasse d\'Été', gradient: 'from-green-200 to-green-400' },
    { title: 'Salon Privé', gradient: 'from-orange-200 to-orange-400' },
  ]

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] mb-4">GALERIE</p>
          <h2 className="text-5xl font-serif mb-4 text-neutral-900">Nos Espaces</h2>
          <div className="w-24 h-0.5 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-sm shadow-lg cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient} transition-transform duration-500 group-hover:scale-110`}></div>
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-serif text-center px-4 transform transition-all duration-300 group-hover:scale-110">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}