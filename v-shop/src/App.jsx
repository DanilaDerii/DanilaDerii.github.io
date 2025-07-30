import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import DataTable from "./components/DataTable";
import { TotalPriceContext } from "./context/TotalPriceContext";
import accessoryData from "./accessory.json";

function App() {
  // form setup
  const { register, handleSubmit } = useForm();

  // master list (in a ref so we don't trigger renders on push/splice)
  const selectedItemsRef = useRef([
    { id: 1, name: "Mouse", price: 10, quantity: 2 },
    { id: 2, name: "Keyboard", price: 20, quantity: 1 },
  ]);

  // what actually gets passed to DataTable
  const [filteredSelectedItems, setFilteredSelectedItems] = useState(
    selectedItemsRef.current
  );

  // total price state for the context
  const [totalPrice, setTotalPrice] = useState(0);

  // add a new order
  const onSubmit = (data) => {
    const productId = parseInt(data.product, 10);
    const product = accessoryData.find(a => a.id === productId);
    const order = { ...product, quantity: Number(data.quantity) };

    selectedItemsRef.current.push(order);
    setFilteredSelectedItems([...selectedItemsRef.current]);
  };

  // filter/search handler
  const search = (keyword) => {
    setFilteredSelectedItems(
      selectedItemsRef.current.filter(item =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  // delete handler
  const deleteItemByIndex = (index) => {
    selectedItemsRef.current.splice(index, 1);
    setFilteredSelectedItems([...selectedItemsRef.current]);
  };

  return (
    <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
      <div style={{ padding: "1rem" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Product:{" "}
            <select {...register("product")}>
              {accessoryData.map((acc) => (
                <option key={acc.id} value={acc.id}>
                  {acc.name} — ${acc.price}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Quantity:{" "}
            <input
              type="number"
              {...register("quantity")}
              style={{ width: "4rem", textAlign: "right" }}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>

        <DataTable
          data={filteredSelectedItems}
          onSearch={search}
          onDelete={deleteItemByIndex}
        />

        <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
          Total Price: ${totalPrice.toFixed(2)}
        </div>
      </div>
    </TotalPriceContext.Provider>
  );
}

export default App;
