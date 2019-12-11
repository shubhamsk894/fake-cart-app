import React, { useState } from "react";
import Item from "./components/item";
import ItemList from "./components/item-list";
import Nav from "./components/nav";
import Modal from "./components/modal";
import faker from "faker";

import { Cart, CartItem } from "./components/cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const [modal, setModal] = useState(false);
  const [sum, setSum] = useState(0);

  const toggle = () => setModal(!modal);

  const additemHandler = item => e => {
    setCartItems([...cartItems, item]);

    console.log(item);
    console.log(cartItems);
  };

  const deleteHandler = key => e => {
    cartItems.splice(0, 1);
    setCartItems([...cartItems]);
  };
  const navHandler = text => e => {
    if (text === "Cart") {
      setModal(true);
    }
  };

  const items = [
    { src: faker.image.business(), title: "Burger", price: "25 Rs " },
    { src: faker.image.business(), title: "Pizza", price: "599 Rs " },
    { src: faker.image.food(), title: "Pasta", price: "299 Rs " },
    { src: faker.image.food(), title: "Noodles", price: "251 Rs " },
    { src: faker.image.food(), title: "Momos", price: "499 Rs " }
  ];

  const navButtons = ["Home", "Cart"];

  return (
    <div className="App">
      {navButtons.map(name => {
        return <Nav name={name} handler={navHandler(name)} />;
      })}

      <ItemList>
        {items.map((item, key) => {
          return <Item item={item} key={key} handler={additemHandler(item)} />;
        })}
      </ItemList>
      <Modal
        isOpen={modal}
        toggle={toggle}
        header="Your Cart Items"
        footer={sum}
      >
        {cartItems.length !== 0 ? (
          <Cart>
            {cartItems.map((item, key) => {
              return (
                <CartItem
                  items={item}
                  key={key}
                  deleteHandler={deleteHandler(key)}
                />
              );
            })}
          </Cart>
        ) : (
          <div className="text-muted"> Your cart is empty !</div>
        )}
      </Modal>
    </div>
  );
};

export default App;
