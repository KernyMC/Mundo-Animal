
import React from 'react';
import { Heart, Info } from 'lucide-react';

interface Animal {
  id: number;
  name: string;
  species: string;
  image: string;
  description: string;
  habitat: string;
  status: string;
}

const AnimalGallery = () => {
  const animals: Animal[] = [
    {
      id: 1,
      name: "León Africano",
      species: "Panthera leo",
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=600&h=400&fit=crop",
      description: "El rey de la sabana africana, conocido por su majestuosa melena y rugido poderoso.",
      habitat: "Sabanas africanas",
      status: "Vulnerable"
    },
    {
      id: 2,
      name: "Gato Doméstico",
      species: "Felis catus",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop",
      description: "Compañero fiel y cariñoso, perfecto para cualquier hogar que busque amor incondicional.",
      habitat: "Hogares urbanos y rurales",
      status: "Domesticado"
    },
    {
      id: 3,
      name: "Ballena Jorobada",
      species: "Megaptera novaeangliae",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=600&h=400&fit=crop",
      description: "Gigante gentil de los océanos, famosa por sus hermosos cantos y acrobacias.",
      habitat: "Océanos templados y polares",
      status: "Preocupación menor"
    },
    {
      id: 4,
      name: "Pingüino",
      species: "Spheniscidae",
      image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=600&h=400&fit=crop",
      description: "Aves elegantes y sociables que han conquistado las regiones más frías del planeta.",
      habitat: "Antártida y regiones subantárticas",
      status: "Diverso según especie"
    },
    {
      id: 5,
      name: "Cabra Montesa",
      species: "Capra pyrenaica",
      image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?w=600&h=400&fit=crop",
      description: "Escaladores expertos de las montañas, símbolos de resistencia y agilidad.",
      habitat: "Montañas y terrenos rocosos",
      status: "Estable"
    },
    {
      id: 6,
      name: "Caballo",
      species: "Equus caballus",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=600&h=400&fit=crop",
      description: "Noble compañero del ser humano, símbolo de libertad, fuerza y elegancia.",
      habitat: "Pastizales y establos",
      status: "Domesticado"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Descubre el Reino Animal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora la diversidad y belleza de las criaturas que comparten nuestro planeta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal, index) => (
            <div
              key={animal.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    animal.status === 'Vulnerable' ? 'bg-red-100 text-red-800' :
                    animal.status === 'Domesticado' ? 'bg-green-100 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {animal.status}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-1">
                      {animal.name}
                    </h3>
                    <p className="text-sm italic text-gray-500">{animal.species}</p>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {animal.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Info className="w-4 h-4 mr-1" />
                    <span>{animal.habitat}</span>
                  </div>
                  <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors text-sm font-medium">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimalGallery;
