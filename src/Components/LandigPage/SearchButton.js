import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { FaSearch } from "react-icons/fa";

const SearchButton = () => {

    const handleChange = (event) => {
        
    };

    const SearchTextField = styled(TextField)({
        '& input:valid + fieldset': {
          borderColor: '#5D6BE4',
          borderWidth: 2,
        }
      });

    return (
        <div  className="w-3/4 h-[5rem] flex justify-center items-center flex space-x-2 bg-white">
            <FaSearch size={25} color={'#5D6BE4'}></FaSearch>
            <SearchTextField 
                id="outlined-basic" 
                label="Busca tu universidad..." 
                /*onChange={handleChange}*/ 
                variant="outlined" 
                fullWidth
            />
        </div>
    )    
}

export default SearchButton;