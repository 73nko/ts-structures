import { ItemCodes } from "./Item";
import { Rule, IRule } from "./Rule";

const defaultPricingRules = {
  VOUCHER: [{ discount: "2x1" }],
  TSHIRT: [{ discount: "bulk3" }]
};

export interface IRules {
  getRule(code: ItemCodes): IRule;
}

export class Rules implements IRules {
  private rules: WeakMap<any, any>;

  constructor(pricingRules: object = defaultPricingRules) {
    this.rules = new WeakMap();
    Object.entries(pricingRules).map(([product, rules]) => {
      rules.set(product, rules);
    });
  }

  public getRule(code: ItemCodes) {
    return this.rules.has(code) ? this.rules.get(code) : null;
  }

  private createRules(rules: object[]): IRule {
    return new Rule(rules);
  }
}
