// import { useEffect, useState } from "react";
// import { FetchProduct } from "../../api/product-api";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setProduct } from "../../state/reducers/productSlice";
// import { ProductModel } from "../../types";
// import { useAppSelector } from "../../state/hooks";
// import { ColDiv, RowDiv } from "../../components/Misc/misc.styled";
// import ProductPlaceholder from "../../images/place_holder.jpg";
// import { AppCSS, TapButton } from "../../components";

// export const ProductDetails = () => {
//   let { id } = useParams();

//   const dispatch = useDispatch();

//   const productReducer = useAppSelector((state) => state.productReducer);

//   const { currentProduct } = productReducer;

//   useEffect(() => {
//     if (id) {
//       onFetchProduct(id);
//     }
//   }, [id]);

//   const onFetchProduct = async (id: string) => {
//     const { message, data } = await FetchProduct(id);
//     if (data) {
//       dispatch(setProduct(data as ProductModel));
//     } else {
//       console.log(`Error: ${message}`);
//     }
//   };

//   return (
//     <RowDiv
//       style={{
//         display: "flex",
//         marginTop: 50,
//       }}
//     >
//       <ColDiv style={{ width: 480, height: 480, marginLeft: 50 }}>
//         <img
//           draggable={false}
//           src={ProductPlaceholder}
//           alt={"placeholder"}
//           style={{}}
//         />
//       </ColDiv>
//       <ColDiv style={{ padding: 20, background: "#fff", marginRight: 50 }}>
//         <p style={{ fontSize: 30 }}>{currentProduct.name}</p>
//         <p style={{ fontSize: 20 }}>{currentProduct.description}</p>
//         <p>{currentProduct.price}</p>
//         <TapButton
//           onTap={() => {}}
//           title="Buy"
//           bgColor={AppCSS.ORANGE}
//           color={AppCSS.WHITE}
//           width={120}
//           radius={30}
//         />

//         {/* Product details! ${currentProduct && JSON.stringify(currentProduct)} */}
//       </ColDiv>
//     </RowDiv>
//   );
// };

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProduct } from "../../state/reducers/productSlice";
import { ProductModel } from "../../types";
import { useAppSelector } from "../../state/hooks";
import { ColDiv, RowDiv } from "../../components/Misc/misc.styled";
import ProductPlaceholder from "../../images/place_holder.jpg";
import { AppCSS, TapButton } from "../../components";
import { FetchProduct } from "../../api/product-api"; 

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const currentProduct = useAppSelector(
    (state) => state.productReducer.currentProduct
  );

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);

  const fetchProduct = async (id: string) => {
    const { message, data } = await FetchProduct(id);
    if (data) {
      dispatch(setProduct(data as ProductModel));
    } else {
      console.log(`Error: ${message}`);
    }
  };

  if (!currentProduct || !currentProduct.id) {
    // безопасный fallback, пока данные не загрузились
    return (
      <RowDiv style={{ marginTop: 50 }}>
        <p>Loading product details...</p>
      </RowDiv>
    );
  }

  return (
    <RowDiv style={{ display: "flex", marginTop: 50 }}>
      <ColDiv style={{ width: 480, height: 480, marginLeft: 50 }}>
        <img
          draggable={false}
          src={ProductPlaceholder}
          alt={currentProduct.name || "placeholder"}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ColDiv>

      <ColDiv style={{ padding: 20, background: "#fff", marginRight: 50 }}>
        <p style={{ fontSize: 30, fontWeight: 600 }}>{currentProduct.name}</p>
        <p style={{ fontSize: 20, color: "#555" }}>{currentProduct.description}</p>
        <p style={{ fontSize: 24, fontWeight: 700 }}>${currentProduct.price}</p>

        {/* Оборачиваем TapButton в div для отступа */}
        <div style={{ marginTop: 20 }}>
          <TapButton
            onTap={() => console.log("Buy clicked")}
            title="Buy"
            bgColor={AppCSS.ORANGE}
            color={AppCSS.WHITE}
            width={120}
            radius={30}
          />
        </div>
      </ColDiv>
    </RowDiv>
  );
};
