export const categories: Category[] = [
  { id: 'robes', slug: 'robes', name: 'الفساتين', description: 'فساتين أنيقة ومناسبة للمناسبات اليومية', accent: 'bg-amber-100 text-amber-800' },
  { id: 'jupes', slug: 'jupes', name: 'الجينز', description: 'جواكيت وملابس عصرية للارتداء اليومي', accent: 'bg-stone-100 text-stone-700' },
  { id: 'tops', slug: 'tops', name: 'الأعلى', description: 'قمصان وبلوزات بموديلات عصرية', accent: 'bg-rose-100 text-rose-700' },
  { id: 'accessories', slug: 'accessories', name: 'الإكسسوارات', description: 'حقائب وملحقات تكمّل الستايل', accent: 'bg-orange-100 text-orange-700' }
];

export const products: Product[] = [
  {
    id: 'prod-1',
    slug: 'fustan-montreal',
    name: 'فساتين مونتريال',
    category: 'robes',
    price: 8500,
    compareAtPrice: 9800,
    colors: ['بيج', 'بني', 'أسود'],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 12,
    images: ['https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80'],
    featured: true,
    description: 'فساتين أنيقة مناسبة للاستخدام اليومي أو المناسبات الراقية.',
    material: 'قطن + بولو',
    isNew: true
  },
  {
    id: 'prod-2',
    slug: 'blazer-safaa',
    name: 'جاكيت سافا',
    category: 'jupes',
    price: 9600,
    compareAtPrice: 11200,
    colors: ['كريم', 'بني داكن'],
    sizes: ['S', 'M', 'L'],
    stock: 8,
    images: ['https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80'],
    featured: true,
    description: 'جاكيت أنيق يضيف لمسة احترافية ومطمئنة للستايل.',
    material: 'خيط قوي',
    isNew: true
  },
  {
    id: 'prod-3',
    slug: 'blouse-sahara',
    name: 'بلوزة صحرا',
    category: 'tops',
    price: 5600,
    compareAtPrice: 6600,
    colors: ['أبيض', 'ملكي', 'رمادي'],
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 15,
    images: ['https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80'],
    featured: true,
    description: 'بلوزة خفيفة مع تفاصيل عصرية وتناسب الطقس المعتدل.',
    material: 'قطن ناعم',
    isNew: false
  },
  {
    id: 'prod-4',
    slug: 'bag-lina',
    name: 'حقيبة لينا',
    category: 'accessories',
    price: 4300,
    compareAtPrice: 5200,
    colors: ['بني', 'أسود'],
    sizes: ['مقاس قياسي'],
    stock: 6,
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80'],
    featured: false,
    description: 'حقيبة عملية وعصرية تناسب الزي اليومي والرحلات.',
    material: 'جلد صناعي',
    isNew: true
  }
];

export const deliveryZones = [
  { wilaya: 'سطيف', commune: 'سطيف', price: 700, method: 'delivery' },
  { wilaya: 'سطيف', commune: 'عين أرنب', price: 1000, method: 'delivery' },
  { wilaya: 'سطيف', commune: 'برحال', price: 1200, method: 'delivery' },
  { wilaya: 'سطيف', commune: 'بني خلاد', price: 1400, method: 'delivery' },
  { wilaya: ' الجزائر العاصمة ', commune: 'الجزائر العاصمة', price: 2200, method: 'delivery' },
  { wilaya: 'وهران', commune: 'وهران', price: 2500, method: 'delivery' },
  { wilaya: 'تبسة', commune: 'تبسة', price: 2000, method: 'delivery' },
  { wilaya: 'الطارف', commune: 'الطارف', price: 2600, method: 'delivery' },
  { wilaya: 'سكيكدة', commune: 'سكيكدة', price: 2100, method: 'delivery' },
  { wilaya: 'باتنة', commune: 'باتنة', price: 1500, method: 'delivery' }
] as const;

export const wilayas = ['سطيف', 'الجزائر العاصمة', 'وهران', 'تبسة', 'الطارف', 'سكيكدة', 'باتنة'];
