// arquivo App.js, criado pelo create-react-app, modificado
import Order from './Order';
import React from 'react';


class App extends React.Component {
  render() {
    const products = [
      {
        id: 102,
        user: "cena@gmail.com",
        product: "Razer Headphone",
        price: {
          value: 99.99,
          currency: "dollars"
        }
      },
  
      {
        id: 77,
        user: "cena2@gmail.com",
        product: "Monster 500mL",
        price: {
          value: 9.99,
          currency: "dollars"
        }
      }

    ]
    const itens = products.map((e) => (
      <Order order={e} />   
    ))


    return (
      <div className="name">
        <h1>Lista de itens pedidos</h1>
        {itens}
      </div>
    );
  }
}

export default App;
