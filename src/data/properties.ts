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
    slug: 'casa-lujo-piscina-quincho',
    title: 'Casa de Lujo con Piscina, Hot Tub y Quincho',
    category: 'casa',
    categoryLabel: 'Casa de Lujo',
    location: 'Algarrobo Norte',
    shortDescription: 'Espectacular casa con piscina privada, hot tub y quincho completamente equipado, a solo 15 minutos de la playa.',
    fullDescription: 'Una residencia excepcional que define el lujo y el confort en Algarrobo. Esta casa única ofrece amplios espacios de vida con acabados de primera calidad en cada detalle. Disfruta de una piscina privada perfecta para el verano, un relajante hot tub para las noches estrelladas, y un quincho completamente equipado ideal para reuniones familiares y asados. Ubicada a solo 15 minutos de las mejores playas de Algarrobo, combina la tranquilidad residencial con el acceso a la costa. Ideal para quienes buscan una segunda vivienda de ensueño o una inversión premium.',
    heroImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    ],
    benefits: [
      'Piscina privada de agua temperada',
      'Hot tub con capacidad para 6 personas',
      'Quincho completamente equipado',
      'A solo 15 minutos de la playa',
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
    slug: 'penthouse-san-alfonso-del-mar',
    title: 'Penthouse Dúplex en San Alfonso del Mar',
    category: 'penthouse',
    categoryLabel: 'Penthouse',
    location: 'San Alfonso del Mar, Algarrobo',
    shortDescription: 'Exclusivo penthouse de 2 pisos en el icónico condominio San Alfonso del Mar, con jacuzzi privado en terraza y acceso a la laguna cristalina más grande del mundo.',
    fullDescription: 'Una joya inmobiliaria en el reconocido condominio San Alfonso del Mar, hogar de la laguna cristalina más grande del mundo. Este espectacular penthouse dúplex de 2 pisos ofrece el máximo lujo con un jacuzzi privado en la terraza del último piso, donde podrás relajarte contemplando vistas impresionantes. Los interiores de diseño contemporáneo incluyen acabados de primera línea, espacios amplios y luminosos, y una distribución perfecta. El condominio ofrece acceso exclusivo a la famosa laguna navegable, playas artificiales, y amenidades de clase mundial. Una oportunidad única para vivir el sueño costero en su máxima expresión.',
    heroImage: 'https://csam.cl/wp-content/uploads/2021/12/inmueble_banner.jpg',
    images: [
      'https://csam.cl/wp-content/uploads/2021/12/inmueble_banner.jpg',
      'https://a0.muscache.com/im/pictures/ae5bd9ca-17d6-4c9b-9191-4d70a02fdfce.jpg',
      'https://cl.habcdn.com/photos/project/medium/san-alfonso-del-mar_52560.jpg',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
    ],
    benefits: [
      'Jacuzzi privado en terraza del último piso',
      'Penthouse dúplex de 2 niveles',
      'Acceso a laguna cristalina navegable',
      'Condominio San Alfonso del Mar con seguridad 24/7',
    ],
    idealFor: ['Inversión premium', 'Segunda vivienda de lujo', 'Arriendo exclusivo'],
    specs: {
      dormitorios: 4,
      banos: 4,
      superficie: '220 m²',
      estacionamientos: 2,
      antiguedad: '8 años',
      orientacion: 'Norte con vista a la laguna',
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
