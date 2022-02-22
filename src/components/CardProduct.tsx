import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {MainContainer} from '../styles/components/MainContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CardProduct = () => {
    const [respon, setRespon] = useState([]);
    const [responCopy, setResponCopy] = useState([]); // buck up of the data respon for the search results
    const [errorMessage, setErrorMessage] = useState(''); // set error message if the request fails
    const [search, setSearch] = useState(""); // set estate with the words in searchbar
     
    const requestOptions = {
        method: 'GET'
    };
    async function getProducts(){
        const response = await fetch('https://specials.mediamarkt.es/json/new_launches/products.json', requestOptions);
        const products = await response.json();
        setRespon(products);
        setResponCopy(products);
    }

    useEffect(() => { //request Fetch
        //...requestOptions and getProducts()
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
        setSearch(e.target.value); //set the input value with the search event
        filter(e.target.value); //do the filter with search word
    }
    const filter = (searchWord)=>{
      const searchResult = responCopy.filter((respon)=>{ //filter the copy of the respon data to have all the data without filters
          { 
             if(respon.name.toString().toLowerCase().includes(searchWord.toLowerCase())){ //filter by name
                return respon;
             }
          }
      });
      setRespon(searchResult); //set Products respon with the search result
    }

    return (
        <MainContainer>
            {/* <FontAwesomeIcon icon={faCoffee} /> */}
            <SearchBar
                value={search}
                placeholder="&#61442; Search Product"
                onChange={handleChange}
            />
            {errorMessage}
            { 
                respon.map ((respon, i) => {
                    const {name, img, producteNumber, price, description} = respon;
                    return (
                        respon &&
                        <Card key={i}>
                            <Name>
                                {name}
                            </Name>
                            <Image src={img} alt ="new product" />
                            <Description>
                                {description}
                                <ProductNumber>
                                    product num ber: <span> {producteNumber} </span>
                                </ProductNumber>
                                <Price>
                                    {price}
                                </Price>
                            </Description>
                        </Card>  
                    )
                })
            }
        </MainContainer>
    )
}

const Card = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 2fr;
    grid-gap: 30px;
    box-sizing: border-box;
    line-height: 1.43;
    color: rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
    transition-property: border-color, box-shadow, transform;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(207, 203, 202);
    border-radius: 8px;
    padding: 24px;
    max-width: 900px;
    margin: 26px;

    &:hover{
        transform: translateY(-1px);
        box-shadow: rgb(0 0 0 / 7%) 0px 8px 10px 1px, rgb(0 0 0 / 6%) 0px 3px 14px 2px, rgb(0 0 0 / 10%) 0px 5px 5px -3px;
        border-color: rgba(0, 0, 0, 0);
    }
`
const Name = styled.h3`
    grid-row: 1;
    grid-column: 1/3;
    color: ${props => props.theme.color.dark};
    margin: 0px 0px 6px 22px;
`
const ProductNumber = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
        span{
            font-weight: bold;
            margin-left: 12px
        }
`
const Description = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Image = styled.img`
`
const Price = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    font-family: ${props => props.theme.font.price};
    font-size: ${props => props.theme.fontSize.h1.fontSize};
`
const SearchBar = styled.input`
    width: 60%;
    margin: auto;
    padding: 8px;
    font-family: FontAwesome, ${props => props.theme.font.normal} ;
    font-style: normal;
`