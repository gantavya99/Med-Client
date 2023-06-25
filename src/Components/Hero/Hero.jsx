// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Input, InputGroup, Button } from '@chakra-ui/react';

// const Hero = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const navigate = useNavigate();

//   const navigateToProduct = (productId) => {
//     navigate.push(`/product/${productId}`);
//   };

//   const handleSearch = () => {
//     if (filteredProducts.length > 0) {
//       navigateToProduct(filteredProducts[0].id);
//     } else {
//       // Handle case when no matching product is found
//       console.log('No product found');
//     }
//   };

//   const filterProducts = (searchTerm,products) => {
//     const filtered = products.filter((product) =>
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     filterProducts(value);
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://med-server-production.up.railway.app/api/products/all');
//         const data = await response.json();
//         setFilteredProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="mx-4 md:mx-8 xl:mx-48 mt-8 font-semibold hero-bg">
//       <h1 className="text-xl md:text-2xl mb-4">What are you looking for?</h1>
//       <InputGroup size="md">
//         <Input
//           pr={{ base: '3rem', md: '4.5rem' }}
//           type="text"
//           placeholder="Search products..."
//           value={searchTerm}
//           onChange={handleInputChange}
//         />
//         <Button colorScheme="teal" ml="1" onClick={handleSearch}>
//           Search
//         </Button>
//       </InputGroup>
//       {filteredProducts.length > 0 && (
//         <ul>
//           {filteredProducts.map((product) => (
//             <li key={product.id}>
//               <button onClick={() => navigateToProduct(product.id)}>
//                 {product.title}
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import  "./Hero.css";
import { Input,InputGroup,InputRightElement,Button } from '@chakra-ui/react'
const Hero = () => {
  return (
    <div className="mx-4 md:mx-8 xl:mx-48 mt-8 font-semibold hero-bg">
      <h1 className="text-xl md:text-2xl mb-4">What are you looking for?</h1>
      <InputGroup size="md">
        <Input
          pr={{ base: "3rem", md: "4.5rem" }}
          type="text"
          placeholder="Search products..."
        />
        
        <button className='bg-[#10847e] text-white rounded-lg p-2 ml-1'>
          Search
        </button>
      </InputGroup>
    </div>
  )
}

export default Hero