import React from "react";
import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
const Sidebar = () => {
  return (
    <div className="w-64 border-r-2">
      <aside>
        <div className="flex flex-row m-4 justify-around">
          <div className="text-2xl">Filters</div>
          <div>
            <Button colorScheme="green">Clear</Button>
          </div>
        </div>
        <div className="w-44 m-4">
          <h3 className="text-lg font-bold mb-4">Price</h3>
          <RangeSlider defaultValue={[120, 240]} min={0} max={300} step={30}>
            <RangeSliderTrack bg="red.100">
              <RangeSliderFilledTrack bg="tomato" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0} />
            <RangeSliderThumb boxSize={6} index={1} />
          </RangeSlider>
        </div>

        <div className="m-4">
          <h3 className="text-lg font-bold mb-4">Category</h3>
          <RadioGroup defaultValue="1">
            <Stack spacing={1} direction="column">
              <Radio className="my-2" colorScheme="green" value="1">
                Opioids
              </Radio>
              <Radio className="my-2" colorScheme="green" value="2">
                Psychedelics
              </Radio>
              <Radio className="my-2" colorScheme="green" value="3">
                Cannabinoids
              </Radio>
              <Radio className="my-2" colorScheme="green" value="4">
                Research Chemical
              </Radio>
              <Radio className="my-2" colorScheme="green" value="5">
                Weigth Loss/ Diabetes
              </Radio>
              <Radio className="my-2" colorScheme="green" value="6">
                Gummies and Chocolates
              </Radio>
            </Stack>
          </RadioGroup>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
