import './App.css';
import {useState} from "react";

const ITEMSPRICE: itemNameAndPrice[] = [
  {name: 'Hamburger', price: 80},
  {name: 'Cheeseburger', price: 90},
  {name: 'Fries', price: 45},
  {name: 'Coffee', price: 70},
  {name: 'Tea', price: 50},
  {name: 'Cola', price: 40},

];

function App() {

  const initialItems = () => {
    return [
      {name: 'Hamburger', count: 0},
      {name: 'Cheeseburger', count: 0},
      {name: 'Fries', count: 0},
      {name: 'Coffee', count: 0},
      {name: 'Tea', count: 0},
      {name: 'Cola', count: 0}
    ]
  };

  const [itemsCount, setItems] = useState<itemNameAndCount[]>(initialItems);

  let ind:number = 0;

  const addOrder = (index: number) => {
    ind = index;
    const ordersCopy = [...itemsCount];
    ordersCopy[index].count += 1;
    setItems(ordersCopy);
  };

  const totalPirce = (index:number) => {
      return  itemsCount[index].count * ITEMSPRICE[index].price
  };
  console.log(ind)
  return (
    <div className="App">

      <div className="block ordersBlock">
        <span className="title">Order Details :</span>
        {
          itemsCount.map((item, index) => {
            if (item.count !== 0) {
              return (
                <div>
                  <p>{item.name} <span>x {item.count}</span> <span>{ITEMSPRICE[index].price} KGS</span></p>
                </div>
              );
            }
          })
        }

        <p className="total">Total price: {totalPirce(ind)}</p>

        <div className="btn">
          <button className="btn btn-primary" onClick={() => setItems(initialItems())}>Delete orders</button>
        </div>

      </div>

      <div className="block addItemsBlock">
        <span className="title">Add items:</span>
        <div className="items">
          {ITEMSPRICE.map((item, index) => (
            <div className="item" onClick={() => addOrder(index)}>
              <h3>{item.name}</h3>
              <p><b>Price:</b> {item.price} KGS</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default App;
