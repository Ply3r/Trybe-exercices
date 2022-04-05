class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name
  }
}

class Item {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }
}

class Order {
  private Client: Client;
  private Itens: Item[];
  private paymentOption: string;
  private desc: number;

  constructor(client: Client, Itens: Item[], paymentOption: string, desc?: number) {
    this.Client = client;
    this.Itens = Itens
    this.paymentOption = paymentOption
    this.desc = desc || 0;
  }

  get totalPrice() {
    const price = this.Itens.reduce((acc, curr) => acc + curr.price, 0);

    return `Total: R$ ${price.toFixed(2)}`
  }

  get discontedPrice() {
    const price = this.Itens.reduce((acc, curr) => acc + curr.price, 0);
    const disconted = price - (price * this.desc)

    return `Total: R$ ${disconted.toFixed(2)}`
  }
}

const Leandro = new Client('Leandro');
const Batata = new Item('Batata', 5);
const Sorvete = new Item('Sorvete', 25);

const pedido = new Order(Leandro, [Batata, Sorvete], 'débito', 0.5);

console.log(pedido.totalPrice)
console.log(pedido.discontedPrice)

