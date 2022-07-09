import React, { ReactElement, FC } from "react";
import { Box, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";

let productData: any[] = require('../data/product-data.json');

const Products: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            pl: 1,
            pt: 5
        }}>
            <Grid container spacing={4} sx={{
            backgroundColor: 'whitesmoke',
            justifyContent: 'center'
        }}>
            {
                productData.map((product) => {
                    return (<Grid item>
                        <ProductCard 
                        guid={product.guid} 
                        productName={product.productName} 
                        productDesc={product.productDesc} 
                        cost={product.cost}
                        listingDate={product.listingDate}/>
                    </Grid>);

                })
            }
        </Grid>

        </Box>
    );
};

export default Products;