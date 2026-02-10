
export enum ViewState {
  PROFILE_SELECTION = 'PROFILE_SELECTION',
  PIN_ENTRY = 'PIN_ENTRY',
  WELCOME = 'WELCOME',
  SPECIAL_CARDS = 'SPECIAL_CARDS'
}

export interface Profile {
  id: string;
  name: string;
  icon: string;
  color: string;
  isLocked: boolean;
  avatarUrl?: string;
  cards?: SpecialCard[];
}

export interface SpecialCard {
  id: string;
  type: 'illustration' | 'photo';
  title?: string;
  message?: string;
  author?: string;
  recipient?: string;
  series: string;
  imageUrl: string;
  bgColor?: string;
}
