import React, { ReactElement, FC } from "react";
import { Box, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";

let productData: any[] = require('../data/product-data.json');

const Products: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            pl: 5,
            pt: 5
        }}>
            <Grid container spacing={4} sx={{
            backgroundColor: 'whitesmoke',
            alignContent: 'center'
        }}>
            {
                productData.map((product) => {
                    return (<Grid item>
                        <ProductCard />
                    </Grid>);

                })
            }
        </Grid>

        </Box>
    );
};

export default Products;