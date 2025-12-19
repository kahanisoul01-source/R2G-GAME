
export enum Rarity {
  COMMON = 'COMMON',
  UNCOMMON = 'UNCOMMON',
  RARE = 'RARE',
  EPIC = 'EPIC',
  LEGENDARY = 'LEGENDARY',
  MYTHIC = 'MYTHIC'
}

export interface FortniteItem {
  id: string;
  name: string;
  rarity: Rarity;
  image: string;
  price?: number;
}

export interface Case {
  id: string;
  name: string;
  price: number;
  image: string;
  items: FortniteItem[];
  tag?: string;
}

export interface Drop {
  id: string;
  user: string;
  item: FortniteItem;
  timestamp: number;
}
