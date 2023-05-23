import React, { useEffect,useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Product from '../../Components/Product/Product';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/CartSlice";
const Category = () => {
    const [data, setData] = useState([]);
    
    const {category} = useParams();
    useEffect(() => {
      axios
        .get(`https://med-server-production.up.railway.app/api/products/all?category=${category}`)
        .then((response) => {
          setData(response.data);
            console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  return (
    <div className='flex pt-4'>
        <Sidebar />
        <div className='m-4'>
        <h3 className='font-semibold text-3xl '>Products</h3>
        <div className='flex flex-wrap'>
        
        {data.map((item,key) => (
            <Product
              id={item._id}
              key={key}
              imageUrl={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
              discount={item.Discount}
              category={item.category}
              product={item}
              handleAddToCart={()=>handleAddToCart(item)}
            />
          ))}
        </div>
        
        </div>
        
    </div>
  )
}

export default Category