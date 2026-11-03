export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
  highlight: string;
  date: string;
  verifiedKiwify: boolean;
  city: string;
}

export interface BonusItem {
  id: string;
  tag: string;
  title: string;
  originalPrice: number;
  description: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'produto' | 'pwa' | 'pagamento' | 'suporte';
}

export interface AppMetric {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtitle: string;
}

export interface ProducerSettings {
  kiwifyCheckoutUrl: string;
  supportWhatsapp: string;
  productName: string;
  pricePix: number;
  priceCard: number;
  installments: number;
}
