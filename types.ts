
export enum ItemCategory {
  BACKGROUND = 'Backgrounds',
  FRAME = 'Molduras',
  BADGE = 'Badges',
  ROLE = 'Cargos'
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ItemCategory;
  imageUrl?: string;
  hoverImageUrl?: string;
  icon?: string;
  rarity: 'Comum' | 'Raro' | 'Épico' | 'Lendário';
}

export interface User {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  balance: number;
  inventory: string[]; // item IDs
}
