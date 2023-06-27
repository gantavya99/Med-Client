import { React, useState } from "react";
import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const handleButtonClick = () => {
    window.location.reload();
  };
  const navigate = useNavigate();
  return (
    <div className="w-64 border-r-2">
      <aside>
        <div className="flex flex-row m-4 justify-around">
          <div className="text-2xl">Filters</div>
          <div>
            <Button colorScheme="green">Clear</Button>
          </div>
        </div>
        <div className="w-56 m-4">
          <h3 className="text-lg font-bold mb-4">Price</h3>
          <RangeSlider
            aria-label={["min", "max"]}
            colorScheme="green"
            defaultValue={[10, 80]}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <div className="flex justify-between">
            <p className="font-semibold">$0</p>
            <p className="font-semibold">$1000</p>
          </div>
        </div>

        <div className="m-4">
          <h3 className="text-lg font-bold mb-4">Category</h3>
          <RadioGroup defaultValue="1">
            <Stack spacing={1} direction="column">
              <Radio onClick={()=>{navigate("/products/Cannabis and Hashish");handleButtonClick()}} className="my-2" colorScheme="green" value="1">
                Cannabis and Hashish
              </Radio>
              <Radio onClick={()=>{navigate("/products/Benzos");handleButtonClick()}} className="my-2" colorScheme="green" value="2">
                Benzos
              </Radio>
              <Radio onClick={()=>{navigate("/products/Dissociatives");handleButtonClick()}} className="my-2" colorScheme="green" value="3">
                Dissociatives
              </Radio>
              <Radio onClick={()=>{navigate("/products/Opioids");handleButtonClick()}} className="my-2" colorScheme="green" value="4">
                Opiods
              </Radio>
              <Radio onClick={()=>{navigate("/products/Stimulants");handleButtonClick()}} className="my-2" colorScheme="green" value="5">
                Stimulants
              </Radio>
              <Radio onClick={()=>{navigate("/products/Psychedelics");handleButtonClick()}} className="my-2" colorScheme="green" value="6">
                Psychedelics
              </Radio>
              <Radio onClick={()=>{navigate("/products/Weight Loss");handleButtonClick()}} className="my-2" colorScheme="green" value="6">
                Weight Loss
              </Radio>
              <Radio onClick={()=>{navigate("/products/Steroids");handleButtonClick()}} className="my-2" colorScheme="green" value="6">
                Steroids
              </Radio>
            </Stack>
          </RadioGroup>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
