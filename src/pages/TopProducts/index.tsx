// /* eslint-disable jsx-a11y/anchor-is-valid */
// import GridList from "@material-ui/core/GridList";
// import { GridListTile } from "@material-ui/core";
// import { ProductModel } from "../../types";
// import React from "react";
// import placeholderImage from "../../images/place_holder.jpg";

// interface CategoryProps {
//   products: ProductModel[];
// }

// export const TopPrducts: React.FC<CategoryProps> = ({ products }) => {
//   const productCards = () => {
//     if (Array.isArray(products)) {
//       return products.map((item) => (
//         <GridListTile
//           key={item.id}
//           style={{
//             display: "flex",
//             height: 250,
//             width: 220,
//             marginLeft: 10,
//             marginRight: 10,
//             justifyContent: "center",
//             border: `solid 1px #EFEFEF`,
//             borderRadius: 10,
//           }}
//         >
//           <a
//             href={`/product-details/${item.id}`}
//             style={{
//               textDecoration: "none",
//             }}
//           >
//             <div style={{ height: 200, width: 220 }}>
//               <img src={placeholderImage} height={200} />
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 fontSize: 14,
//                 fontWeight: "600",
//                 margin: 0,
//                 padding: 0,
//                 color: "#505050",
//               }}
//             >
//               <p>{item.name}</p>
//               <p>${item.price}</p>
//             </div>
//           </a>
//         </GridListTile>
//       ));
//     }
//     return <></>;
//   };

//   return (
//     <div
//       style={{
//         width: "96%",
//         flexDirection: "column",
//         background: "#fff",
//         padding: "2%",
//       }}
//     >
//       <p
//         style={{ fontSize: 26, fontWeight: "700", margin: 0, marginBottom: 20 }}
//       >
//         Top Products
//       </p>
//       <GridList
//         cols={2.5}
//         style={{
//           flexWrap: "nowrap",
//           transform: "translateZ(0)",
//         }}
//       >
//         {productCards()}
//       </GridList>
//     </div>
//   );
// };

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ImageList, ImageListItem, Box, Typography } from "@mui/material";
import { ProductModel } from "../../types";
import placeholderImage from "../../images/place_holder.jpg";

interface TopProductsProps {
  products: ProductModel[];
}

export const TopProducts: React.FC<TopProductsProps> = ({ products }) => {
  // Генерация карточек продуктов
  const renderProductCards = (): React.ReactNode[] => {
  if (!Array.isArray(products) || products.length === 0) return [];

  return products.map((item) => (
    <ImageListItem
      key={item.id}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: 250,
        width: 220,
        m: "0 10px",
        justifyContent: "center",
        border: "1px solid #EFEFEF",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <a
        href={`/product-details/${item.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Box sx={{ height: 200, width: 220 }}>
          <img
            src={placeholderImage}
            height={200}
            width={220}
            style={{ objectFit: "cover", borderRadius: "10px 10px 0 0" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: 600,
            px: 1,
            color: "#505050",
          }}
        >
          <Typography variant="body2" noWrap>
            {item.name}
          </Typography>
          <Typography variant="body2">${item.price}</Typography>
        </Box>
      </a>
    </ImageListItem>
  ));
};


  return (
    <Box
      sx={{
        width: "96%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        p: 2,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        Top Products
      </Typography>
      <ImageList
        cols={2.5}
        sx={{
          flexWrap: "nowrap",
          transform: "translateZ(0)",
        }}
      >
        {renderProductCards()}
      </ImageList>
    </Box>
  );
};
