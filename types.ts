export type Mood = 'happy' | 'tired' | 'thinking';

export interface Attribute {
  label: string;
  value: number; // 0 to 100
}

export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}