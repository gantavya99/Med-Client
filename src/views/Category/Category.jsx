import React, { useEffect,useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Product from '../../Components/Product/Product';
const Category = () => {
    const [data, setData] = useState([]);
    const params = useParams();
    useEffect(() => {
      axios
        .get(`http://localhost:8080/api/products`)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
  return (
    <div className='flex pt-4'>
        <Sidebar />
        <div className='m-4'>
        <h3 className='font-semibold text-3xl '>Products</h3>
        <div className='flex flex-wrap'>
        {data.map((item,key) => (
            <Product
                key={key}
              imageUrl={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
              discount={item.Discount}
              category={item.category}
            />
          ))}
        </div>
        
        </div>
        
    </div>
  )
}

export default Category