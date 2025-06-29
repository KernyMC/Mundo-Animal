
import React from 'react';
import Navigation from '../components/Navigation';
import AdoptionForm from '../components/AdoptionForm';
import { Heart, Shield, Home, Users } from 'lucide-react';

const AdoptionPage = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Amor Incondicional",
      description: "Recibe el amor más puro y sincero que solo una mascota puede darte."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Protección y Compañía",
      description: "Un compañero fiel que te acompañará en todos los momentos de tu vida."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Hogar Completo",
      description: "Completa tu hogar con la alegría y vitalidad que aporta una mascota."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Responsabilidad Compartida",
      description: "Aprende sobre el cuidado responsable y el compromiso con otro ser vivo."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-6 text-shadow">
              Adopta con Amor
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dale una segunda oportunidad a un animal que necesita un hogar. 
              La adopción no solo cambia su vida, también transformará la tuya.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Animales adoptados</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-600">Familias satisfechas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Soporte post-adopción</div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="max-w-4xl mx-auto">
            <AdoptionForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdoptionPage;
