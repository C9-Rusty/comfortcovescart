import { useState, useEffect } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const List = ({ url }) => {
  const navigate = useNavigate();
  const { token,admin } = useContext(StoreContext);
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/product/list`);
      console.log(response.data);
      setList(response.data.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!admin && !token) {
      toast.error("Please Login First");
      navigate("/");
    }
    fetchList();
  }, []);

  const removeProduct = async (id) => {
    try {
      const response = await axios.delete(`${url}/api/product/remove`,{params:{id:id}});
      await fetchList();
      toast.success("Product removed successfully");
    } catch (error) {
      toast.error("Error removing product");
    }
  }

  return (
    <div className="list screen flex-col">
      <p>All Products List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <p>
            <b>Image</b>
          </p>
          <p>
            <b>Name</b>
          </p>
          <p>
            <b>Category</b>
          </p>
          <p>
            <b>Price</b>
          </p>
          <p>
            <b>Action</b>
          </p>
        </div>

        {list.map((item, index) => {
          return(
            <div key={index} className="list-table-format">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p className="cursor" onClick={()=>removeProduct(item._id)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default List;
