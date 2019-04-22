import { Rules } from "./Rules";

export interface IRule {
  getDiscount(quantity: number, price: number): number;
}

export class Rule implements IRule {
  private rules: object[];
  constructor(rules: object[]) {
    this.rules = rules;
  }

  public getDiscount(): number {
    return this.rules.length;
  }
}
