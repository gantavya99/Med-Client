import {React,useEffect,useState} from 'react'
import Product from '../Product/Product'
import axios from "axios";
const NewProducts = () => {
    const [data,setData] = useState()
    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
          .then(response => {
            console.log(response.data);
            setData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
  return (
    <div>
        <div>
      <h1 className="pt-2  text-3xl font-semibold">New Launches</h1>
      <div className="flex mt-5 justify-center flex-wrap">
      {data&&data.map((item) => (
          <Product
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

export default NewProducts