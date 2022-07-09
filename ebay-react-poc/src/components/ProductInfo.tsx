import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import placeholder from "../assets/image_placeholder.png";

type ProductCardProps = {
  guid: string;
  productName: string;
  productDesc: string;
  cost: number;
  listingDate: Date;
};

const ProductCard = ({
  guid,
  productName,
  productDesc,
  cost,
  listingDate,
}: ProductCardProps) => {
  return (
    <Card key={`${productName}-${guid}`} sx={{ maxWidth: "250px" }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: "primary.main" }} aria-label="product-cost">
        //     <Typography variant="caption">{cost}$</Typography>
        //   </Avatar>
        // }
        title={productName}
        subheader={listingDate.toString()}
      />
      <CardMedia
        component="img"
        image={placeholder}
        alt="Product Image"
        sx={{ maxHeight: "300px", maxWidth: "250px" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          ${cost}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
