import React, { useEffect,useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Components/Header/Header';
const Category = () => {
    const [data, setData] = useState([]);
    const params = useParams();
    useEffect(() => {
      axios
        .get(`http://localhost:8080/api/products/:${params.category}`)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
  return (
    <div>
        
    </div>
  )
}

export default Category