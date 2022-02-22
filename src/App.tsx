import React from "react";
import {Header} from './components/Header'
import {dataHeader} from './data/data';
import {CardProduct} from './components/CardProduct';
import {dataProducts} from './data/data';
import {SearchBar} from './components/SearchBar';

function App (){
    return(
        <>
            <Header data={dataHeader}/>
            {/* <SearchBar/> */}
            <CardProduct data={dataProducts}/>
        </>
    )
}
export default App;