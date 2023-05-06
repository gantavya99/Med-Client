import React from 'react';
import  "./Hero.css";
import { Input,InputGroup,InputRightElement,Button } from '@chakra-ui/react'
const Hero = () => {
  return (
    <div className='mx-48 mt-8 font-semibold'>
        <h1 className='text-2xl mb-4'>What are you looking for?</h1>
        <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type='text'
        placeholder='Search products...'
      />
      <InputRightElement width='6.0rem'>
        <Button h='2rem' size='md' className='rounded-full text-white search-button'>
         Search
        </Button>
      </InputRightElement>
    </InputGroup>
    </div>
  )
}

export default Hero

