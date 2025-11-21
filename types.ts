
export interface Meal {
  name: string;
  description: string;
  calories: number;
  protein: string;
  carbs: string;
  fats: string;
}

// Tipos auxiliares simples para uso futuro se necessário
export interface UserProfile {
  age: string;
  weight: string;
  height: string;
  goal: 'lose_weight' | 'maintain' | 'gain_muscle';
  dietaryRestrictions: string;
}
