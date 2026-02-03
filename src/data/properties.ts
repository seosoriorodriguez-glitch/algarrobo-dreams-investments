export interface Property {
  id: string;
  slug: string;
  title: string;
  category: 'casa' | 'penthouse' | 'parcela';
  categoryLabel: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  images: string[];
  benefits: string[];
  idealFor: string[];
  specs: {
    dormitorios?: number;
    banos?: number;
    superficie?: string;
    terreno?: string;
    estacionamientos?: number;
    antiguedad?: string;
    orientacion?: string;
  };
}

export const properties: Property[] = [
  {
    id: '1',
    slug: 'casa-frente-al-mar',
    title: 'Casa de Lujo Frente al Mar',
    category: 'casa',
    categoryLabel: 'Casa de Lujo',
    location: 'Algarrobo Norte',
    shortDescription: 'Espectacular casa con acceso directo a la playa y vistas panorámicas al océano Pacífico.',
    fullDescription: 'Una residencia excepcional que define el lujo costero en Algarrobo. Esta casa única ofrece acceso privado a la playa, amplios espacios de vida con vistas ininterrumpidas al mar, y acabados de primera calidad en cada detalle. Ideal para quienes buscan una segunda vivienda de ensueño o una inversión premium en la costa central de Chile.',
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    ],
    benefits: [
      'Acceso privado directo a la playa',
      'Vistas panorámicas 180° al océano',
      'Diseño arquitectónico contemporáneo',
      'Piscina infinita con vista al mar',
    ],
    idealFor: ['Segunda vivienda de lujo', 'Inversión premium', 'Arriendo por temporada'],
    specs: {
      dormitorios: 5,
      banos: 4,
      superficie: '380 m²',
      terreno: '800 m²',
      estacionamientos: 3,
      antiguedad: '5 años',
      orientacion: 'Norte-Poniente',
    },
  },
  {
    id: '2',
    slug: 'penthouse-vista-panoramica',
    title: 'Penthouse con Vista Panorámica',
    category: 'penthouse',
    categoryLabel: 'Penthouse',
    location: 'Centro de Algarrobo',
    shortDescription: 'Exclusivo penthouse en edificio premium con terraza privada y vista 360° a la bahía.',
    fullDescription: 'Ubicado en el corazón de Algarrobo, este penthouse representa la cumbre del lujo urbano costero. Con más de 200 m² de terraza privada, vistas 360° que abarcan desde la bahía hasta la cordillera, y amenidades de primer nivel, es la opción perfecta para quienes buscan comodidad, seguridad y el mejor estilo de vida frente al mar.',
    heroImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop',
    ],
    benefits: [
      'Terraza privada de 200 m²',
      'Vista 360° bahía y cordillera',
      'Edificio con seguridad 24/7',
      'Estacionamiento doble cubierto',
    ],
    idealFor: ['Inversión con arriendo', 'Segunda vivienda urbana', 'Retiro premium'],
    specs: {
      dormitorios: 3,
      banos: 3,
      superficie: '180 m²',
      estacionamientos: 2,
      antiguedad: '3 años',
      orientacion: 'Norte',
    },
  },
  {
    id: '3',
    slug: 'parcela-desarrollo',
    title: 'Parcela con Potencial de Desarrollo',
    category: 'parcela',
    categoryLabel: 'Parcela',
    location: 'Algarrobo Alto',
    shortDescription: 'Terreno privilegiado de 5.000 m² con vista al mar, ideal para proyecto inmobiliario o casa de ensueño.',
    fullDescription: 'Una oportunidad única de inversión en la zona más exclusiva de Algarrobo Alto. Esta parcela de 5.000 m² ofrece vistas espectaculares al océano Pacífico, excelente orientación, y cuenta con factibilidad de servicios básicos. Perfecta para desarrollar un proyecto inmobiliario boutique o construir la casa de sus sueños en un entorno natural privilegiado.',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    ],
    benefits: [
      'Vista privilegiada al océano Pacífico',
      'Factibilidad de agua y luz',
      'Camino pavimentado de acceso',
      'Zonificación para desarrollo',
    ],
    idealFor: ['Desarrollo inmobiliario', 'Construcción personalizada', 'Inversión a largo plazo'],
    specs: {
      terreno: '5.000 m²',
      orientacion: 'Nor-Poniente',
    },
  },
];

export const getPropertyBySlug = (slug: string): Property | undefined => {
  return properties.find((p) => p.slug === slug);
};
