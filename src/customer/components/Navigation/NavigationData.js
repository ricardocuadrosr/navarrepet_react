export const navigation = {
    categories: [
      {
        id: 'products',
        name: 'Productos',
        featured: [
          {
            name: '',
            id: '#',
            imageSrc: 'https://i.pinimg.com/564x/f0/30/53/f030535d212f74e864759f0249210c4c.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: '',
            id: '#',
            imageSrc: 'https://img.freepik.com/fotos-premium/feliz-joven-trabajador-explotacion-ganadera-cuclillas-mientras-sostiene-monton-heno-fresco-frente-vacas-lecheras-trabajo_274679-6275.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'felino',
            name: 'Felino',
            items: [
              // { name: 'Comida seca', id: 'dry_food' },
              // { name: 'Comida', id: 'food' },
              { name: 'Comida Seca', id: 'feline_dry_food' },
              { name: 'Snack', id: 'feline_snacks' },
              { name: 'Comida Humeda', id: 'feline_wet_food' },
              // { name: 'Jackets', id: '#' },
              // { name: 'Activewear', id: '#' },
              
            ],
          },
          {
            id: 'canino',
            name: 'Canino',
            items: [
              { name: 'Comida Seca', id: 'canine_dry_food' },
              { name: 'Golosina Dental', id: 'canine_dental' },
              { name: 'Golosina Jerky', id: 'canine_jerky' },
              // { name: 'Golosina Treats', id: 'canine_treats' },
              // { name: 'Hats', id: '#' },
              // { name: 'Belts', id: '#' },
            ],
          },
          {
            id: 'ave',
            name: 'Ave',
            items: [
              { name: 'Comida para Loro', id: 'bird_parrot_food' },
              { name: 'Comida para Perico', id: 'bird_parakeet_food' },
              { name: 'Comida para Canario', id: 'bird_canary_food' },
              { name: 'Comida para Pinzón', id: 'bird_finch_food' },
              { name: 'Golosina', id: 'bird_snacks' },
              { name: 'Juguete', id: 'bird_toys' },
            ],
          },
          {
            id: 'porcino',
            name: 'Porcino',
            items: [
              { name: 'Comida', id: 'porcine_pellets' },
              { name: 'Accesorios Domesticos', id: 'porcine_beds' },
              { name: 'Accesorios de Aseo', id: 'porcine_grooming' },
            ],
          },
          {
            id: 'bovino',
            name: 'Bovino',
            items: [
              { name: 'Comida en granos', id: 'bovino_grains' },
              { name: 'Sustituto de Leche', id: 'bovino_milk_replacer' },
              { name: 'Suplementos', id: 'bovino_supplement' },
              { name: 'Bloques', id: 'bovino_block' },
              { name: 'Collares', id: 'bovino_collars' },
              { name: 'Mantas', id: 'bovino_blankets' },
              { name: 'Accesorios de Aseo', id: 'bovino_grooming' },
            ],
          },
          {
            id: 'ovino',
            name: 'Ovino',
            items: [
              { name: 'Comida en granos', id: 'ovino_grains' },
              { name: 'Comida natural', id: 'ovino_natural' },
              { name: 'Comida horneada', id: 'ovino_baked' },
              { name: 'Bloques', id: 'ovino_block' },
              { name: 'Golosinas', id: 'ovino_snacks' },
              { name: 'Collares', id: 'ovino_collars' },
              { name: 'Mantas', id: 'ovino_blankets' },
              { name: 'Accesorios de Aseo', id: 'ovino_grooming' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }