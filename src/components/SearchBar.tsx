import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { MainContainer } from '../styles/components/MainContainer';

export const SearchBar = () => {
    const [respon, setRespon] = useState(['']);
    const [errorMessage, setErrorMessage] = useState('');

    const [search, setSearch] = useState("");
    const [searchedProduct, setSearchedProduct] = useState([]);
     
    useEffect(() => {
		const requestOptions = {
            method: 'GET'
        };
        async function getProducts(){
            const response = await fetch('https://specials.mediamarkt.es/json/new_launches/products.json', requestOptions);
            const products = await response.json();
            setRespon(products);
        }search
        (async() => {
            try{
                await getProducts();
            }catch(e){
                setErrorMessage('Ha habido un error que no permite, cargar productos, ahora mismo.')
                console.log(`Error: ${e}`)
            }
        })()
    },[setRespon]);

    const handleChange = (e) =>{
        setSearch(e.target.value);
        filter(e.target.value);
        console.log( filter(e.target.value));
    }
    const filter = (searchWord)=>{
      const searchResult = respon.filter((respon)=>{
          { 
             if(respon.name.toString().toLowerCase().includes(searchWord.toLowerCase())){
                return respon;
             }
          }
      });
      setSearchedProduct(searchResult);
    }
    return (
        <MainContainer>
            <ContainerInput>
                <input
                    value={search}
                    placeholder="Search Product"
                    onChange={handleChange}
               />
            </ContainerInput>
        </MainContainer>
    )
}

const ContainerInput = styled.div`

`