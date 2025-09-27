export type Locale = 'en' | 'tr';

export interface MacroTargets {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface UserGoal {
  goalType: 'lose' | 'maintain' | 'gain';
  targetCalories: number;
  macroRatio: MacroTargets;
  startAt: string;
  endAt?: string;
}

export interface ApiResponse<T> {
  data: T;
  meta?: Record<string, unknown>;
}

export interface DiaryEntryInput {
  date: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  foodId?: string;
  recipeId?: string;
  quickCalories?: number;
  quantity: number;
  unit: string;
  notes?: string;
}
