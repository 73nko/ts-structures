import { IRule } from "./Rule";
export interface IItem {
  getTotalPrice(): number;
}
export enum ItemCodes {
  VOUCHER = "VOUCHER",
  TSHIRT = "TSHIRT",
  MUG = "MUG"
}
export class Item implements IItem {
  private code: ItemCodes;
  private name: string;
  private price: number;
  private quantity: number;
  private discountRules: IRule;

  constructor(
    code: ItemCodes,
    name: string,
    price: string,
    discountRules: IRule
  ) {
    this.code = code;
    this.name = name;
    this.price = this.setPrice(price);
    this.quantity = 0;
    this.discountRules = discountRules;
  }

  protected setPrice(price: string): number {
    return 100 * parseFloat(price.replace(/[^\d.]/g, ""));
  }

  public getTotalPrice(): number {
    return (
      this.discountRules.getDiscount(this.quantity, this.price) * this.quantity
    );
  }
}
