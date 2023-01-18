import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Warrior extends Archetypes {
  private _energyType: EnergyType;
  private static _archetypesInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._archetypesInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._archetypesInstances;
  }

  get energyType() { return this._energyType; }
}