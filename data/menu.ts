export interface WinePairing {
  name: string;
  type: string;
  notes: string;
  image: string;
}

export interface Dish {
  id: string;
  slug: string;
  name: string;
  price: number;
  priceFormatted: string;
  category: string;
  categoryName: string;
  categoryType?: 'forno' | 'desfiado' | 'natas' | 'tradicional';
  tag?: string;
  badge?: string;
  subtitle?: string;
  serves: string;
  prepTime: string;
  cut?: string;
  shortDescription: string;
  description: string;
  image?: string;
  cardImage?: string;
  isFeatured?: boolean;
  winePairing?: WinePairing;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  badge?: string;
  badgeColor?: 'tertiary' | 'secondary' | 'primary';
  icon: string;
  description: string;
  countLabel: string;
  featured?: boolean;
  image?: string;
}

export const RESTAURANT_INFO = {
  name: 'TABERNA PORTUCALE',
  subname: 'A Nossa Casa • Tatuapé',
  established: 'Desde 2013',
  tagline: 'Um pedacinho de Portugal no Tatuapé.',
  heroDescription:
    'Receitas de família com autêntico bacalhau da Noruega, azeite extra virgem e hospitalidade portuguesa acolhedora no coração do Tatuapé.',
  address: 'Rua Cantagalo, 856',
  neighborhood: 'Tatuapé, São Paulo - SP',
  parking: 'Estacionamento conveniado BioPark ao lado (Nº 906)',
  openingHours: 'Aberto sex a dom • Almoço e Jantar em família (Hoje até 23h)',
  statusText: 'Hoje até 23h',
  whatsappUrl:
    'https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20uma%20mesa%20na%20Taberna%20Portucale.',
  whatsappPhone: '(11) 99999-9999',
  preparationNotice:
    'Todos os pratos principais servem generosamente de 1 a 2 pessoas. Preparação artesanal feita com calma e dedicação na hora do seu pedido.',
  policyNotice:
    'Os pratos são preparados sob medida na hora do pedido. Não retiramos ou trocamos itens do prato para preservar o equilíbrio e autenticidade da receita secular.',
  estimatedTime: '30 a 45 minutos',
  facadeImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD9je_YFLXTg3dVaj-FXltVrKP6uqPEYvvp3-NZgS-g-B5kQ3OHTcDgzn1ZqYnPVOQDFP38yJtrjn6xM_iyi2W1aem1vjVdGL6NYu7WnAfkId5OoSFmZ4GtgN9wwlIzvupHx-JoiFyiRC29OwDK_8klT6LeHfNBvWtQ_RvSNf-HbtzUM9vF93C2Va8x5EzGRKltihQgU7UmRpXmDsN1T13Fmmtt_6r5iY5RUgmoI6tqC_QJpQvu5Ass',
  avatarImage:
    'https://lh3.googleusercontent.com/aida/AEtjO1UnzD0cVIPc4Wn_M31yKgG6_dJRrcmAGXRfeIO2NxlVIgCGK1CAdVFjlOnHcqEaN44pRKQjerhoj45STeeF51foNYeZ-hZJFpjJDyUHpFovPgZYIUKzJhF8bz-0EKQ62L76JuhxQiavbxYefaBL3xxELVBxEhsrsFJKpHIJT9LHPLigj1Ja1TVDFWArJlwB6pDiiXd22ZY2STV79GS4xkNQxNDjXm37NGcYWlaiR6ENlOtZZjzGvHsoxg',
};

export const CATEGORIES: Category[] = [
  {
    id: 'entradas',
    slug: 'entradas',
    name: 'Entradas',
    badge: 'Típicas',
    badgeColor: 'tertiary',
    icon: 'utensils',
    description:
      'Bolinhos de Bacalhau sequinhos (6 un.), Alheira de Mirandela frita e pão artesanal fresquinho com azeite virgem.',
    countLabel: 'Ver 6 opções',
  },
  {
    id: 'bacalhau',
    slug: 'bacalhau',
    name: 'Bacalhau',
    badge: 'Mais Pedido',
    badgeColor: 'secondary',
    featured: true,
    icon: 'fish',
    description:
      'Lombo nobre da Noruega ao forno, natas, azeite fervente, brócolis frescos e batatas ao murro douradas.',
    countLabel: '10 receitas',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Vbhy2C0IJDkqFk6__mt_PGJv8c_5DaF6olP3oDQ_y9KJFs9b8RcFMVVKkrk2vxhDlpXeoWaDGizsUUKARhcuZQKK2ac7qzdhQcDDPXQVC0K4WMS70Oovg-PNLwc8yETFz6Nq4nLukl0lgefkI1wTErIZeVQGLbcY83NRRLHuS325v_TkMjPxERhxFAz_8r2BrZMbz9R8v9y0wALWML3aE8I2HwErP4VGB7J4YJE',
  },
  {
    id: 'peixes-e-frutos-do-mar',
    slug: 'peixes-e-frutos-do-mar',
    name: 'Peixes e Frutos do Mar',
    icon: 'anchor',
    description:
      'Arroz de Polvo à Malandrinho caldoso, postas douradas, camarões aromáticos e clássicos das vilas costeiras.',
    countLabel: 'Ver 5 opções',
  },
  {
    id: 'carnes',
    slug: 'carnes',
    name: 'Carnes',
    icon: 'flame',
    description:
      'Pratos típicos com cortes selecionados de vitela e porco, guarnecidos com batata portuguesa e temperos rústicos da serra.',
    countLabel: 'Ver 4 opções',
  },
  {
    id: 'sobremesas',
    slug: 'sobremesas',
    name: 'Sobremesas',
    badge: 'Conventuais',
    badgeColor: 'tertiary',
    icon: 'croissant',
    description:
      'Doces conventuais autênticos com gemas ricas, Pastéis de Belém artesanais crocantes e a irresistível Baba de Camelo.',
    countLabel: 'Ver 4 opções',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbE6QYopqxOj0f8MwSBdQQBVZM2B3NwWFuOUULZ3Y79rOxHwYOHhaoa6T1A75Mv3LdMknyUuoGIzuVRZcIUWzk9FkW72khgIZrGSkjh2X0f9a5WO1cyyxKGVw5A4DNtRJXfNcXt3ATQIXqcg3lPssMKAju7HcjY2XNfI8gPlWlSMtuUIc6zjAMa-NUNMXIwITuWWYfgKEgkZWuH-YpicmNwVi5kO-FYxna-Y98dlc',
  },
  {
    id: 'vinhos',
    slug: 'vinhos',
    name: 'Vinhos',
    badge: 'Adega',
    badgeColor: 'primary',
    icon: 'wine',
    description:
      'Rótulos tradicionais de Portugal: tintos encorpados Douro DOC, brancos frescos, Vinhos Verdes e Cálices do Porto.',
    countLabel: 'Ver carta',
  },
];

export const DISHES: Dish[] = [
  // BACALHAU
  {
    id: 'bacalhau-a-lagareiro',
    slug: 'bacalhau-a-lagareiro',
    name: 'Bacalhau à Lagareiro',
    price: 142.5,
    priceFormatted: 'R$ 142,50',
    category: 'bacalhau',
    categoryName: 'Bacalhau',
    categoryType: 'forno',
    tag: 'Destaque da Casa',
    badge: 'Mais Pedido • Receita Tradicional',
    subtitle: 'Receita clássica da Beira Alta portuguesa',
    serves: 'Serve 1 a 2 pessoas',
    prepTime: '35–45 min',
    cut: 'Lombo Gadus morhua',
    shortDescription:
      'No forno, com batatas ao murro douradas, azeite extra virgem abundante, brócolis frescos e amêndoas laminadas tostadas.',
    description:
      'Lombo de bacalhau nobre da Noruega assado lentamente no forno em banho generoso de azeite de oliva extra virgem português, acompanhado de batatas ao murro bem douradas e salpicadas de sal grosso, brócolis frescos cozidos no vapor e amêndoas laminadas levemente tostadas.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAj9PCoa1Pmpg9kFXOjaXBlAvKgyJmlg947AUTsjawOxn3snOs-i64lCeVXRrHdmSPuW-NaIvx9-ydekuMxmYzRYgYBAF99HxVYgmrn4IslEi6Pmo253s9NHu_WHnU7edXHXd2RIU5DM2KCbxj51dYROKz5NpRJ-Skul3tfSa_taFGf9QAwScmlHPlI090L-SIiM66gW3BwRWuaIbbphOM0fYNmumejWO8RuFghys',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD92BlyJXxZLEOE8UbK1joqFiPfuiJpGlsvB0CFkObOFs4COOOq5xA09FhoYiGdA_HHJ2uyNyRDHoGVF7TdGAlK-JKZO_KsZ2X0OwiqZqYRH_U-uixHKFNHRql9ROC6qjDfkqfFuqpH99fJvLuY_rYxSp8CRtK_a0JhS_ME39lDMiSxmxHukRMYdKjADWslYrBIY-bGrOE4IdzCwsl27YneQv58uXolwkNycIL0bes',
    isFeatured: true,
    winePairing: {
      name: 'Vinho Fronteira Douro DOC',
      type: 'Rótulo Branco da Casa',
      notes:
        'Notas minerais, acidez refrescante e fruta branca fresca que cortam com perfeição a untuosidade do azeite português.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB4GvN4jwY80b1ZChPl-GuGihPCQnlnupA8FIiXI_jYPewCkh_jStKPIRHrsVhAUbV2_fpdJKOIo5lt3C3dTdVf4sO_7aclB-nzhKz9U2_Rafprqi3hwXs8khpRgYT9aeHaxhbw5EiLdbpzw-JtJoSo7Rze1j2VJLIS-aqXnHlc5d16SXoqcCJbWEbiE6biDkP1T5PHfmGDBut1hbc_hw7eL2znsxVPFIrVIkXFFsQ',
    },
  },
  {
    id: 'bacalhau-com-presunto',
    slug: 'bacalhau-com-presunto',
    name: 'Bacalhau com Presunto',
    price: 142.5,
    priceFormatted: 'R$ 142,50',
    category: 'bacalhau',
    categoryName: 'Bacalhau',
    categoryType: 'forno',
    tag: 'Especialidade',
    subtitle: 'Fusão nobre de bacalhau e charcutaria ibérica',
    serves: 'Serve 1 a 2 pessoas',
    prepTime: '30–45 min',
    cut: 'Lombo com Presunto Ibérico',
    shortDescription:
      'No forno, lombo nobre com autêntico presunto Ibérico, gratinado com queijo Gold, batatas ao murro, legumes salteados e cebola caramelizada.',
    description:
      'Lombo nobre de bacalhau Gadus morhua ao forno coberto com autêntico presunto Ibérico e crosta gratinada de queijo Gold, guarnecido com batatas ao murro, legumes da estação salteados no azeite e cebola caramelizada.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASPYjAoIMp1u631DTtEjCQ32VXKpu_t8pp0auPURo1WFHat1oaYDFS03E7CZfodlUul3hiEg-9DEFX2oCBEO2O3gG5tUXiHkJiPHWVI-I65EijPsK9ySQ_lypOXIAJMijl4R7p2TUdeG-_1xnnNC5POnbdXdkaYiOp8bK0X1Y5BobFJHot3ggEQPgAZN55ZUmEg38Xat25fDhDrW3z9r6sYRrR4E4FnXWHcRaIuak',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASPYjAoIMp1u631DTtEjCQ32VXKpu_t8pp0auPURo1WFHat1oaYDFS03E7CZfodlUul3hiEg-9DEFX2oCBEO2O3gG5tUXiHkJiPHWVI-I65EijPsK9ySQ_lypOXIAJMijl4R7p2TUdeG-_1xnnNC5POnbdXdkaYiOp8bK0X1Y5BobFJHot3ggEQPgAZN55ZUmEg38Xat25fDhDrW3z9r6sYRrR4E4FnXWHcRaIuak',
    winePairing: {
      name: 'Quinta do Crasto Douro DOC Tinto',
      type: 'Tinto Lusitano Encorpado',
      notes:
        'Taninos estruturados e notas de frutas vermelhas maduras que dialogam com a intensidade do queijo e do presunto Ibérico.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB4GvN4jwY80b1ZChPl-GuGihPCQnlnupA8FIiXI_jYPewCkh_jStKPIRHrsVhAUbV2_fpdJKOIo5lt3C3dTdVf4sO_7aclB-nzhKz9U2_Rafprqi3hwXs8khpRgYT9aeHaxhbw5EiLdbpzw-JtJoSo7Rze1j2VJLIS-aqXnHlc5d16SXoqcCJbWEbiE6biDkP1T5PHfmGDBut1hbc_hw7eL2znsxVPFIrVIkXFFsQ',
    },
  },
  {
    id: 'bacalhau-a-gomes-de-sa',
    slug: 'bacalhau-a-gomes-de-sa',
    name: 'Bacalhau à Gomes de Sá',
    price: 112.5,
    priceFormatted: 'R$ 112,50',
    category: 'bacalhau',
    categoryName: 'Bacalhau',
    categoryType: 'desfiado',
    subtitle: 'Clássico imortal da cidade do Porto',
    serves: 'Serve 1 a 2 pessoas',
    prepTime: '25–35 min',
    cut: 'Lascas nobres Gadus morhua',
    shortDescription:
      'Desfiado em lascas suculentas no azeite com alho e cebola fatiada fina, envolvido em batata cozida, fatias de ovo cozido e azeitonas pretas portuguesas.',
    description:
      'Tradicional receita portuense: lascas nobres de bacalhau amaciadas em leite, refogadas no azeite virgem com alho e cebola fatiada fina, entremeadas com batata cozida no ponto, ovos cozidos e azeitonas pretas.',
    winePairing: {
      name: 'Vinho Verde Muralhas de Monção',
      type: 'Vinho Verde Fresco',
      notes:
        'Leve, refrescante e frutado, acidez cítrica viva que equilibra a textura suave do ovo e das lascas de bacalhau.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB4GvN4jwY80b1ZChPl-GuGihPCQnlnupA8FIiXI_jYPewCkh_jStKPIRHrsVhAUbV2_fpdJKOIo5lt3C3dTdVf4sO_7aclB-nzhKz9U2_Rafprqi3hwXs8khpRgYT9aeHaxhbw5EiLdbpzw-JtJoSo7Rze1j2VJLIS-aqXnHlc5d16SXoqcCJbWEbiE6biDkP1T5PHfmGDBut1hbc_hw7eL2znsxVPFIrVIkXFFsQ',
    },
  },
  {
    id: 'bacalhau-com-natas',
    slug: 'bacalhau-com-natas',
    name: 'Bacalhau com Natas',
    price: 112.5,
    priceFormatted: 'R$ 112,50',
    category: 'bacalhau',
    categoryName: 'Bacalhau',
    categoryType: 'natas',
    tag: 'Reconfortante',
    subtitle: 'Cremoso, aveludado e gratinado ao forno',
    serves: 'Serve 1 a 2 pessoas',
    prepTime: '30–40 min',
    cut: 'Bacalhau desfiado artesanal',
    shortDescription:
      'Desfiado, envolvido em aveludado creme de natas frescas, cubos de batata e queijo derretido gratinado até ficar dourado e borbulhante.',
    description:
      'Lascas tenras de bacalhau envolvidas num cremoso bechamel artesanal enriquecido com natas frescas da fazenda, cubinhos de batata pré-dourados e gratinado ao forno com generosa camada de queijo até dourar.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmWnSv9-em3pf_Vp7E0MaHM_HiiGqZi5lJ0y25wSlNijMm_NBPVc_50IJul4rYEnFDyQz8cDD36koGdY5O_c4WBhDxcezxZf5m12Cf9V4feQafRbvsEqCOSSw1Wa_9BQu4uKdhrf5iks1Np1zKnV_WLpIGtf0yXc5OWc36VHiQ08NenZnXoapmAnxQvR3iljblmcIMcC_sJrLvETLlt6XZgVZ4P1DC4OR2V6Vb1tU',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmWnSv9-em3pf_Vp7E0MaHM_HiiGqZi5lJ0y25wSlNijMm_NBPVc_50IJul4rYEnFDyQz8cDD36koGdY5O_c4WBhDxcezxZf5m12Cf9V4feQafRbvsEqCOSSw1Wa_9BQu4uKdhrf5iks1Np1zKnV_WLpIGtf0yXc5OWc36VHiQ08NenZnXoapmAnxQvR3iljblmcIMcC_sJrLvETLlt6XZgVZ4P1DC4OR2V6Vb1tU',
    winePairing: {
      name: 'Monte Velho Branco Alentejano',
      type: 'Vinho Branco Estruturado',
      notes:
        'Aromas florais e acidez marcante que cortam com excelência a densidade aveludada do molho de natas.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB4GvN4jwY80b1ZChPl-GuGihPCQnlnupA8FIiXI_jYPewCkh_jStKPIRHrsVhAUbV2_fpdJKOIo5lt3C3dTdVf4sO_7aclB-nzhKz9U2_Rafprqi3hwXs8khpRgYT9aeHaxhbw5EiLdbpzw-JtJoSo7Rze1j2VJLIS-aqXnHlc5d16SXoqcCJbWEbiE6biDkP1T5PHfmGDBut1hbc_hw7eL2znsxVPFIrVIkXFFsQ',
    },
  },
  {
    id: 'bacalhau-a-chefe',
    slug: 'bacalhau-a-chefe',
    name: 'Bacalhau à Chefe',
    price: 130.0,
    priceFormatted: 'R$ 130,00',
    category: 'bacalhau',
    categoryName: 'Bacalhau',
    categoryType: 'forno',
    subtitle: 'Autoria exclusiva da Taberna Portucale',
    serves: 'Serve 1 a 2 pessoas',
    prepTime: '35–45 min',
    cut: 'Lombo nobre Gadus morhua',
    shortDescription:
      'No forno, lascas nobres no azeite virgem, cebola fatiada, alho e pimentões coloridos disposto sobre cama de batatas aromatizadas.',
    description:
      'Receita autoral: lascas generosas de lombo nobre assadas com pimentões vermelhos e amarelos tostados, cebola fininha, alho confitado e cama de batatas ao forno temperadas com azeite e ervas.',
    winePairing: {
      name: 'Vinho Fronteira Douro DOC',
      type: 'Rótulo Branco da Casa',
      notes:
        'Frescor mineral que valoriza o dulçor natural dos pimentões assados e a nobreza do bacalhau.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB4GvN4jwY80b1ZChPl-GuGihPCQnlnupA8FIiXI_jYPewCkh_jStKPIRHrsVhAUbV2_fpdJKOIo5lt3C3dTdVf4sO_7aclB-nzhKz9U2_Rafprqi3hwXs8khpRgYT9aeHaxhbw5EiLdbpzw-JtJoSo7Rze1j2VJLIS-aqXnHlc5d16SXoqcCJbWEbiE6biDkP1T5PHfmGDBut1hbc_hw7eL2znsxVPFIrVIkXFFsQ',
    },
  },
  {
    id: 'bacalhau-a-braz',
    slug: 'bacalhau-a-braz',
    name: 'Bacalhau à Braz',
    price: 112.5,
    priceFormatted: 'R$ 112,50',
    category: 'bacalhau',
    categoryName: 'Bacalhau',
    categoryType: 'desfiado',
    subtitle: 'Receita tradicional do Bairro Alto de Lisboa',
    serves: 'Serve 1 a 2 pessoas',
    prepTime: '20–30 min',
    cut: 'Bacalhau desfiado nobre',
    shortDescription:
      'Desfiado e refogado no azeite com cebola e alho, palha fininha crocante e ovos cremosos finalizados com salsa fresca picada.',
    description:
      'Finas lascas de bacalhau desfiado salteadas no azeite extravirgem com cebola translúcida, envolvidas em crocante batata palha artesanal e ovos cremosos lentamente mexidos, decorado com azeitonas pretas.',
    winePairing: {
      name: 'Vinho Verde Muralhas de Monção',
      type: 'Vinho Verde Fresco',
      notes:
        'Cítrico e vibrante, perfeito para limpar o paladar entre cada garfada cremosa.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB4GvN4jwY80b1ZChPl-GuGihPCQnlnupA8FIiXI_jYPewCkh_jStKPIRHrsVhAUbV2_fpdJKOIo5lt3C3dTdVf4sO_7aclB-nzhKz9U2_Rafprqi3hwXs8khpRgYT9aeHaxhbw5EiLdbpzw-JtJoSo7Rze1j2VJLIS-aqXnHlc5d16SXoqcCJbWEbiE6biDkP1T5PHfmGDBut1hbc_hw7eL2znsxVPFIrVIkXFFsQ',
    },
  },

  // ENTRADAS
  {
    id: 'bolinhos-de-bacalhau',
    slug: 'bolinhos-de-bacalhau',
    name: 'Bolinhos de Bacalhau (6 un.)',
    price: 42.0,
    priceFormatted: 'R$ 42,00',
    category: 'entradas',
    categoryName: 'Entradas',
    tag: 'Mais Pedido',
    serves: '1 a 2 pessoas',
    prepTime: '15–20 min',
    shortDescription:
      'Sequinhos por fora, macios e recheados com muito bacalhau Gadus morhua e batatas selecionadas.',
    description:
      'Tradicionalíssimos bolinhos portugueses fritos em óleo limpo em temperatura ideal: crosta finíssima crocante e recheio farto de puro bacalhau da Noruega, batata e salsa fresca picada.',
    isFeatured: true,
  },
  {
    id: 'alheira-de-mirandela',
    slug: 'alheira-de-mirandela',
    name: 'Alheira de Mirandela Frita',
    price: 48.0,
    priceFormatted: 'R$ 48,00',
    category: 'entradas',
    categoryName: 'Entradas',
    serves: '1 a 2 pessoas',
    prepTime: '20 min',
    shortDescription:
      'Embutido tradicional transmontano frito, servido com ovo estrelado e batata portuguesa.',
    description:
      'Famoso enchido típico de Mirandela com carnes de aves e especiarias, envolto em pão de trigo e frito até estalar a pele, servido fumegante com ovo caipira de gema mole.',
  },
  {
    id: 'pao-portugues-artesanal',
    slug: 'pao-portugues-artesanal',
    name: 'Cesto de Pães & Azeite Virgem',
    price: 22.0,
    priceFormatted: 'R$ 22,00',
    category: 'entradas',
    categoryName: 'Entradas',
    serves: '2 pessoas',
    prepTime: '5 min',
    shortDescription:
      'Pão caseiro quentinho com crosta rústica, manteiga aromatizada e azeite português com flor de sal.',
    description:
      'Fornada de pães portugueses artesanais de fermentação natural, acompanhados de manteiga da fazenda, azeitonas marinadas no alho e azeite extra virgem.',
  },

  // SOBREMESAS
  {
    id: 'pasteis-de-nata',
    slug: 'pasteis-de-nata',
    name: 'Pastéis de Nata Artesanais (dupla)',
    price: 24.0,
    priceFormatted: 'R$ 24,00',
    category: 'sobremesas',
    categoryName: 'Sobremesas',
    tag: 'Artesanal',
    badge: 'Conventual • Fornada do Dia',
    serves: '1 a 2 pessoas',
    prepTime: 'Pronto a servir',
    shortDescription:
      'Massa folhada levíssima e estaladiça com recheio cremoso de gemas e leite, polvilhados com canela.',
    description:
      'A joia da doçaria portuguesa: massa folhada ultracrocante enrolada à mão, recheada com clássico creme de ovos e natas levemente tostado no forno a alta temperatura.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbE6QYopqxOj0f8MwSBdQQBVZM2B3NwWFuOUULZ3Y79rOxHwYOHhaoa6T1A75Mv3LdMknyUuoGIzuVRZcIUWzk9FkW72khgIZrGSkjh2X0f9a5WO1cyyxKGVw5A4DNtRJXfNcXt3ATQIXqcg3lPssMKAju7HcjY2XNfI8gPlWlSMtuUIc6zjAMa-NUNMXIwITuWWYfgKEgkZWuH-YpicmNwVi5kO-FYxna-Y98dlc',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDbE6QYopqxOj0f8MwSBdQQBVZM2B3NwWFuOUULZ3Y79rOxHwYOHhaoa6T1A75Mv3LdMknyUuoGIzuVRZcIUWzk9FkW72khgIZrGSkjh2X0f9a5WO1cyyxKGVw5A4DNtRJXfNcXt3ATQIXqcg3lPssMKAju7HcjY2XNfI8gPlWlSMtuUIc6zjAMa-NUNMXIwITuWWYfgKEgkZWuH-YpicmNwVi5kO-FYxna-Y98dlc',
    isFeatured: true,
  },
  {
    id: 'baba-de-camelo',
    slug: 'baba-de-camelo',
    name: 'Baba de Camelo Tradicional',
    price: 22.0,
    priceFormatted: 'R$ 22,00',
    category: 'sobremesas',
    categoryName: 'Sobremesas',
    serves: '1 pessoa',
    prepTime: 'Pronto a servir',
    shortDescription:
      'Mousse aerada de doce de leite português com gemas e amêndoas tostadas por cima.',
    description:
      'Sobremesa típica das tabernas portuguesas: doce de leite cozido com gemas batidas e claras em neve ultraleves, salpicado com amêndoas laminadas crocantes.',
  },

  // PEIXES E FRUTOS DO MAR
  {
    id: 'arroz-de-polvo',
    slug: 'arroz-de-polvo',
    name: 'Arroz de Polvo à Malandrinho',
    price: 138.0,
    priceFormatted: 'R$ 138,00',
    category: 'peixes-e-frutos-do-mar',
    categoryName: 'Peixes e Frutos do Mar',
    tag: 'Fartura',
    serves: 'Serve 1 a 2 pessoas',
    prepTime: '30–40 min',
    shortDescription:
      'Arroz caldoso e perfumado cozido no próprio caldo aromático do polvo, com tentáculos tenros e coentros frescos.',
    description:
      'Típico prato das aldeias de pescadores: arroz carolino cozido no caldo rico de cozimento do polvo, vinho branco, tomates maduros e coentros frescos.',
  },

  // CARNES
  {
    id: 'francesinha-a-moda-do-porto',
    slug: 'francesinha-a-moda-do-porto',
    name: 'Francesinha à Moda do Porto',
    price: 68.0,
    priceFormatted: 'R$ 68,00',
    category: 'carnes',
    categoryName: 'Carnes',
    tag: 'Típico do Porto',
    serves: '1 a 2 pessoas',
    prepTime: '25–35 min',
    shortDescription:
      'Sanduíche robusto com bife de alcatra, linguiça calabresa, presunto, coberto com queijo derretido e molho quente picante especial.',
    description:
      'O prato mais famoso do Porto: pão tostado recheado com carnes nobres, envolvido em queijo derretido borbulhante e imerso num molho cervejeiro secreto picante com batatas fritas à volta.',
  },

  // VINHOS
  {
    id: 'vinho-fronteira-douro-doc',
    slug: 'vinho-fronteira-douro-doc',
    name: 'Vinho Fronteira Douro DOC Branco',
    price: 110.0,
    priceFormatted: 'R$ 110,00',
    category: 'vinhos',
    categoryName: 'Vinhos',
    tag: 'Rótulo da Casa',
    serves: 'Garrafa 750ml (ou taça por R$ 28,00)',
    prepTime: 'Imediato',
    shortDescription:
      'Notas minerais, acidez refrescante e fruta branca fresca que cortam com perfeição o azeite português.',
    description:
      'Produzido na região demarcada do Douro: blend das castas Viosinho, Rabigato e Códega do Larinho. Apresenta cor citrina límpida, aroma mineral elegante e final fresco prolongado.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4GvN4jwY80b1ZChPl-GuGihPCQnlnupA8FIiXI_jYPewCkh_jStKPIRHrsVhAUbV2_fpdJKOIo5lt3C3dTdVf4sO_7aclB-nzhKz9U2_Rafprqi3hwXs8khpRgYT9aeHaxhbw5EiLdbpzw-JtJoSo7Rze1j2VJLIS-aqXnHlc5d16SXoqcCJbWEbiE6biDkP1T5PHfmGDBut1hbc_hw7eL2znsxVPFIrVIkXFFsQ',
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4GvN4jwY80b1ZChPl-GuGihPCQnlnupA8FIiXI_jYPewCkh_jStKPIRHrsVhAUbV2_fpdJKOIo5lt3C3dTdVf4sO_7aclB-nzhKz9U2_Rafprqi3hwXs8khpRgYT9aeHaxhbw5EiLdbpzw-JtJoSo7Rze1j2VJLIS-aqXnHlc5d16SXoqcCJbWEbiE6biDkP1T5PHfmGDBut1hbc_hw7eL2znsxVPFIrVIkXFFsQ',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getDishesByCategory(categorySlug: string): Dish[] {
  return DISHES.filter((d) => d.category === categorySlug);
}

export function getDishBySlug(slug: string): Dish | undefined {
  return DISHES.find((d) => d.slug === slug);
}

export function getFeaturedDishes(): Dish[] {
  return DISHES.filter((d) => d.isFeatured);
}
