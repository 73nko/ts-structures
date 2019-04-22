import { Item, IItem, ItemCodes } from "./Item";
import { Rules, IRules } from "./Rules";
interface ICheckout {
  scan(item: string): void;
  total(): string;
}

const products = [
  {
    code: "VOUCHER",
    name: "Cabify Voucher",
    price: 5
  },
  {
    code: "TSHIRT",
    name: "Cabify T-Shirt",
    price: 20
  },
  {
    code: "MUG",
    name: "Cabify Coffee Mug",
    price: 7.5
  }
];

class Checkout implements ICheckout {
  private ListOfItems: IItem[];
  private pricingRules: IRules;

  constructor(pricingRules: any = {}) {
    this.ListOfItems = this.setItems(products);
    this.pricingRules = new Rules(pricingRules);
  }

  protected setItems(products: any[] = []): IItem[] {
    return products.map(p => {
      const discountRule = this.pricingRules.getRule(p.code);
      return new Item(p.code, p.name, p.price, discountRule);
    });
  }

  // Implement total
  // implement Scan

  // see how to handle rules
}
