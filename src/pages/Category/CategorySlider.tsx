// /* eslint-disable jsx-a11y/anchor-is-valid */
// import GridList from "@material-ui/core/GridList";
// import { GridListTile, GridListTileBar } from "@material-ui/core";
// import ProductPlaceholder from "../../images/product_placeholder.jpg";
// import { CategoryModel, ProductModel } from "../../types";
// import React from "react";
// import { AppCSS } from "../../components";
// import { useNavigate } from "react-router-dom";
// import imagePlaceholder from "../../images/place_holder.jpg";

// interface CategoryProps {
//   cats: CategoryModel[];
// }

// export const CategorySlider: React.FC<CategoryProps> = ({ cats }) => {
//   const navigate = useNavigate();

//   const catCards = () => {
//     if (Array.isArray(cats)) {
//       return cats.map((item) => (
//         <GridListTile
//           key={item._id}
//           style={{
//             display: "flex",
//             height: "180px",
//             width: "160px",
//             justifyContent: "center",
//           }}
//         >
//           <a
//             onClick={() => {
//               navigate(`/category/${item._id}`);
//             }}
//             style={{
//               textDecoration: "none",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 flex: 1,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 flexDirection: "column",
//               }}
//             >
//               <img
//                 draggable={false}
//                 src={imagePlaceholder}
//                 alt={"placeholder"}
//                 style={{
//                   height: "120px",
//                   width: "120px",
//                   background: AppCSS.GRAY_MILD,
//                   borderRadius: "10px",
//                   marginBottom: 10,
//                 }}
//               />
//               <div
//                 style={{
//                   width: "100%",
//                 }}
//               >
//                 <span
//                   style={{
//                     display: "flex",
//                     fontSize: 13,
//                     fontWeight: "600",
//                     margin: 0,
//                     padding: 0,
//                     color: "#505050",
//                   }}
//                 >
//                   {item.name}
//                 </span>
//               </div>
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
//         width: "90%",
//         flexDirection: "column",
//         background: "#fff",
//         margin: 0,
//         paddingLeft: "5%",
//         paddingRight: "5%",
//         paddingTop: "10px",
//       }}
//     >
//       <GridList
//         style={{
//           flexWrap: "nowrap",
//           transform: "translateZ(0)",
//         }}
//       >
//         {catCards()}
//       </GridList>
//     </div>
//   );
// };

// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { CategoryModel } from "../../types";
// import imagePlaceholder from "../../images/place_holder.jpg";

// interface Props {
//   cats: CategoryModel[];
// }

// export const CategorySlider: React.FC<Props> = ({ cats }) => {
//   const navigate = useNavigate();

//   return (
//     <ImageList sx={{ display: "flex", flexWrap: "nowrap" }} cols={2.5}>
//       {cats.map((item) => (
//         <ImageListItem
//           key={item.id}
//           sx={{ cursor: "pointer" }}
//           onClick={() => navigate(`/category/${item.id}`)}
//         >
//           <img src={imagePlaceholder} alt={item.name} />
//           <p>{item.name}</p>
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// };


import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CategoryModel } from "../../types";
import imagePlaceholder from "../../images/place_holder.jpg";

interface Props {
  cats: CategoryModel[];
}

export const CategorySlider: React.FC<Props> = ({ cats }) => {
  const navigate = useNavigate();

  return (
    <ImageList
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        overflowX: "auto",
        width: "100%",
      }}
    >
      {cats.map((item) => (
        <ImageListItem
          key={item.id}
          sx={{
            minWidth: 160,
            cursor: "pointer",
            textAlign: "center",
          }}
          onClick={() => navigate(`/category/${item.id}`)}
        >
          <img
            src={imagePlaceholder}
            alt={item.name}
            style={{
              height: 120,
              width: 120,
              borderRadius: 10,
              margin: "0 auto",
            }}
          />
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#505050",
              marginTop: 8,
            }}
          >
            {item.name}
          </p>
        </ImageListItem>
      ))}
    </ImageList>
  );
};
