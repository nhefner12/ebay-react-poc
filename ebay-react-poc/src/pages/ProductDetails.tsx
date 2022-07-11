import React, { ReactElement, FC } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const ProductDetails: FC<any> = (): ReactElement => {
  const { id } = useParams();
  return (
    <Box
      sx={{
        pl: 1,
        pt: 5,
      }}
    >
        <div>{id}</div>
    </Box>
  );
};

export default ProductDetails;
