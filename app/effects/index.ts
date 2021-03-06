import { CategoriesEffects } from './categories.effect';
import { EffectsModule } from '@ngrx/effects';
import { CyclesEffects } from './cycles.effect';

export const EFFECTS = [
  EffectsModule.run(CyclesEffects),
  EffectsModule.run(CategoriesEffects),
];
