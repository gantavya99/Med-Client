import { React, useState, useEffect } from "react";
import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  const [selectedValue, setSelectedValue] = useState(() => {
    return localStorage.getItem("selectedValue") || category || "1"; // Use the URL parameter "category" as the initial value
  });

  const handleRadioButtonClick = (value) => {
    setSelectedValue(value);
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem("selectedValue", selectedValue);
  }, [selectedValue]);

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
            defaultValue={[0, 100]}
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
          <RadioGroup value={selectedValue} onChange={setSelectedValue}>
            <Stack spacing={1} direction="column">
              <Radio
                onClick={() => {
                  navigate("/products/Cannabis and Hashish");
                  handleRadioButtonClick();
                }}
                className="my-2"
                colorScheme="green"
                value="1"
              >
                Cannabis and Hashish
              </Radio>
              <Radio
                onClick={() => {
                  navigate("/products/Benzos");
                  handleRadioButtonClick();
                }}
                className="my-2"
                colorScheme="green"
                value="2"
              >
                Benzos
              </Radio>
              <Radio
                onClick={() => {
                  navigate("/products/Dissociatives");
                  handleRadioButtonClick();
                }}
                className="my-2"
                colorScheme="green"
                value="3"
              >
                Dissociatives
              </Radio>
              <Radio
                onClick={() => {
                  navigate("/products/Opioids");
                  handleRadioButtonClick();
                }}
                className="my-2"
                colorScheme="green"
                value="4"
              >
                Opiods
              </Radio>
              <Radio
                onClick={() => {
                  navigate("/products/Stimulants");
                  handleRadioButtonClick();
                }}
                className="my-2"
                colorScheme="green"
                value="5"
              >
                Stimulants
              </Radio>
              <Radio
                onClick={() => {
                  navigate("/products/Psychedelics");
                  handleRadioButtonClick();
                }}
                className="my-2"
                colorScheme="green"
                value="6"
              >
                Psychedelics
              </Radio>
              <Radio
                onClick={() => {
                  navigate("/products/Weight Loss");
                  handleRadioButtonClick();
                }}
                className="my-2"
                colorScheme="green"
                value="7"
              >
                Weight Loss
              </Radio>
              <Radio
                onClick={() => {
                  navigate("/products/Steroids");
                  handleRadioButtonClick();
                }}
                className="my-2"
                colorScheme="green"
                value="8"
              >
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
