<!-- 54fdb1f5-d1c7-44a2-825d-20e5c8427d1e 16671c1c-6114-467f-b2a5-156ad0ef10c2 -->
# Upgrade Visual Premium con Imágenes Reales

## Archivos a modificar

1. [src/components/home/HeroSection.tsx](src/components/home/HeroSection.tsx) - Hero con carrusel animado
2. [src/pages/Algarrobo.tsx](src/pages/Algarrobo.tsx) - Atractivos + Actividades Premium  
3. [src/data/properties.ts](src/data/properties.ts) - Imágenes del Penthouse San Alfonso

---

## 1. Hero Premium con Carrusel Animado

### Concepto: Slideshow automático estilo Miami Luxury Real Estate

**Imágenes del carrusel:**

- San Alfonso del Mar (laguna cristalina)
- Playa de Algarrobo
- Vista panorámica costa

**Características:**

- Transición suave entre imágenes (fade o slide)
- Intervalo de 5 segundos
- Indicadores de posición elegantes (líneas, no dots)
- Efecto Ken Burns sutil (zoom lento)
- Overlay degradado premium
```
┌─────────────────────────────────────────────┐
│  [IMAGEN 1] ──fade──▶ [IMAGEN 2] ──fade──▶  │
│                                             │
│     Propiedades de Lujo e Inversión         │
│     en la Costa de Algarrobo                │
│                                             │
│     [ WhatsApp ]  [ Ver Propiedades ]       │
│                                             │
│            ━━━ ─── ───                      │ ← indicadores
└─────────────────────────────────────────────┘
```


---

## 2. Atractivos de Algarrobo - Imágenes Reales

### Actualizar array `attractions` con URLs proporcionadas:

| Atractivo | Nueva Imagen |

|-----------|--------------|

| Playas Paradisíacas | `dynamic-media-cdn.tripadvisor.com/.../the-beach.jpg` |

| Gastronomía Costera | `algarrobo.cl/.../gastronomia-algarrobo.jpeg` |

| Turismo Familiar | `cms-media.getmyboat.com/.../GetMyBoats_Guides.jpeg` |

| A 1 Hora de Santiago | `istockphoto.com/.../teleferico-cerro-san-cristobal.jpg` |

| Naturaleza y Ecoturismo | `munialgarrobo.cl/.../EttPCLQWYAAzqFn.jpg` |

| Casa Pablo Neruda | `cultura.fundacionneruda.org/.../casas-museo-15.jpeg` |

| Valle de Casablanca | `kingstonvineyards.com/.../CASABLANCA-ESSE-2.jpg` |

---

## 3. Actividades Premium - Imágenes Reales de Yates

### Actualizar array `premiumActivities`:

| Actividad | Nueva Imagen |

|-----------|--------------|

| Club de Yates | `revistamarina.cl/.../thumb__844_406.jpg` |

| Paseos en Lancha | `latercera.com/.../G4H2RIUXK5BEHFCZ7LWMAM7XI4.jpg` |

| Buceo en Quintay | Mantener actual (no hay foto específica) |

---

## 4. Penthouse San Alfonso - Imágenes Reales

### Actualizar en `properties.ts`:

```
heroImage: csam.cl/.../inmueble_banner.jpg
images: [
  csam.cl/.../inmueble_banner.jpg,
  a0.muscache.com/.../ae5bd9ca-17d6-4c9b-9191-4d70a02fdfce.jpg,
  cl.habcdn.com/.../san-alfonso-del-mar_52560.jpg
]
```

---

## Resultado esperado

- Hero impactante con slideshow de imágenes reales de Algarrobo
- Secciones de atractivos con fotografías locales auténticas
- Estilo visual coherente: Miami Premium, High Class, Boutique
- Animaciones sutiles que refuercen la sensación de lujo

### To-dos

- [ ] Agregar campo image al array premiumActivities con URLs de Unsplash
- [ ] Rediseñar tarjetas con imagen de fondo, overlay y texto superpuesto
- [ ] Crear hero con carrusel animado de imágenes (San Alfonso, playa, costa)
- [ ] Actualizar 7 imágenes de atractivos de Algarrobo con fotos reales
- [ ] Actualizar imágenes de Club de Yates y Paseos en Lancha
- [ ] Actualizar imágenes del Penthouse con fotos reales de San Alfonso del Mar