import React from 'react';
import Button from '@mui/material/Button';
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="searchBox w-full h-[50px] bg-[#f0f5ff] rounded-md relative p-2 flex items-center shadow-sm">
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Search for products ..."
        className="w-full h-[35px] focus:outline-none bg-transparent p-2 text-[15px] text-[#212121] placeholder-[#878787]"
      />

      <Button
        className="!absolute top-[7px] right-[7px] z-50 !min-w-[35px] !w-[35px] !h-[35px] !rounded-full !p-0 !bg-transparent hover:!bg-transparent"
      >
        <CiSearch className="text-[#2874f0] text-[22px]" />
      </Button>
    </div>
  );
};

export default Search;
