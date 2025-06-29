
import React from 'react';
import Navigation from '../components/Navigation';
import AnimalGallery from '../components/AnimalGallery';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Star, Users, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=1920&h=1080&fit=crop)'
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-shadow">
            Mundo Animal
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubre la magia del reino animal y encuentra tu compañero perfecto. 
            Cada animal tiene una historia que contar y un corazón que compartir.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/adopcion"
              className="gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Heart className="w-5 h-5" />
              <span>Adoptar Ahora</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-200">
              Explorar Animales
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos más que un refugio, somos una familia comprometida con el bienestar animal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow animate-slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
                Cuidado Excepcional
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nuestros animales reciben atención veterinaria de primera clase y todo el amor que merecen.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
                Proceso Transparente
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Te acompañamos en cada paso del proceso de adopción para asegurar la mejor compatibilidad.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
                Soporte Continuo
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ofrecemos apoyo y consejos incluso después de la adopción para garantizar una vida feliz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animal Gallery */}
      <AnimalGallery />

      {/* CTA Section */}
      <section className="py-16 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para cambiar una vida?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Miles de animales esperan encontrar su hogar para siempre. 
              Tu amor puede ser la diferencia que están buscando.
            </p>
            
            <Link
              to="/adopcion"
              className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Heart className="w-5 h-5" />
              <span>Comenzar Adopción</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
            <span className="font-playfair text-2xl font-bold">Mundo Animal</span>
          </div>
          <p className="text-gray-400">
            © 2024 Mundo Animal. Conectando corazones, creando familias.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
