import React, { useState, useRef, useEffect, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import { TotalPriceContext } from "../context/TotalPriceContext";

const DataTable = ({ data, onSearch, onDelete }) => {
  const [filteredData, setFilteredData] = useState(data);
  const sRef = useRef();
  const { setTotalPrice } = useContext(TotalPriceContext);

  // reset local filter whenever parent data changes
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  // recalc total after each render of filteredData
  useEffect(() => {
    const total = filteredData.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [filteredData, setTotalPrice]);

  const handleSearch = () => {
    const q = sRef.current.value.trim().toLowerCase();
    setFilteredData(
      !q
        ? data
        : data.filter(item =>
            item.name.toLowerCase().includes(q) ||
            String(item.id).includes(q) ||
            String(item.quantity).includes(q) ||
            String(item.price).includes(q)
          )
    );
  };

  const handleSortAsc = () => {
    setFilteredData([...filteredData].sort((a, b) =>
      a.name.localeCompare(b.name)
    ));
  };

  const handleSortDesc = () => {
    setFilteredData([...filteredData].sort((a, b) =>
      b.name.localeCompare(a.name)
    ));
  };

  return (
    <Container className="my-3">
      <div className="d-flex mb-2">
        <input
          type="text"
          placeholder="Search..."
          ref={sRef}
          className="form-control me-2"
        />
        <Button onClick={handleSearch}>Search</Button>
        <Button variant="secondary" size="sm" className="ms-2" onClick={handleSortAsc}>
          Sort A→Z
        </Button>
        <Button variant="secondary" size="sm" className="ms-1" onClick={handleSortDesc}>
          Sort Z→A
        </Button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>
                <DeleteIcon
                  style={{ cursor: "pointer", color: "crimson" }}
                  fontSize="small"
                  onClick={() => onDelete(idx)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default DataTable;
