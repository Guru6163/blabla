import React, { useEffect, useState ,useContext} from "react";
import "./ProDescrip.css";
import Catagories from "../Catagories/Catagories"
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";
function ProDescrip(product) {
  const { addToCart}=useContext(CartContext)
  const [productDetails, setProductDetails] = useState([]);
  let {id} = useParams()

  useEffect(() => {
    let list = [
      {id: 1, image: "https://ik.imagekit.io/okoptrnm3hw/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__5_q09HyEkySO.webp?updatedAt=1640986015878", name: 'Apple Iphone XR', rating: '34834', price: '51,000'},
      {id: 2, image: 'https://ik.imagekit.io/okoptrnm3hw/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__MJMPxATESf8.webp?updatedAt=1640986017511', name: 'Apple Iphone XR', rating: '34834', price: '51,000'},
      {id: 3, image: 'https://ik.imagekit.io/okoptrnm3hw/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__kZfMwHkwG3Tr.webp?updatedAt=1640986016956', name: 'Apple Iphone XR', rating: '34834', price: '51,000'},
      {id: 4, image: 'https://ik.imagekit.io/okoptrnm3hw/amazon-image/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65__jZfQErMvV-s.webp?updatedAt=1640986016550', name: 'Apple Iphone XR', rating: '34834', price: '51,000'},
      {id: 5, image: 'https://ik.imagekit.io/okoptrnm3hw/amazon-image/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65__jZfQErMvV-s.webp?updatedAt=1640986016550', name: 'Apple Iphone XR', rating: '34834', price: '51,000'},
      {id: 6, image: 'https://ik.imagekit.io/okoptrnm3hw/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__5_q09HyEkySO.webp?updatedAt=1640986015878', name: 'Apple Iphone XR', rating: '34834', price: '51,000'},
      {id: 7, image: 'https://ik.imagekit.io/okoptrnm3hw/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__MJMPxATESf8.webp?updatedAt=1640986017511', name: 'Apple Iphone XR', rating: '34834', price: '51,000'},
      {id: 8, image: 'https://ik.imagekit.io/okoptrnm3hw/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__5_q09HyEkySO.webp?updatedAt=1640986015878', name: 'Apple Iphone XR', rating: '34834', price: '51,000'},
    ];
    let item=list.filter((item)=>{if (item.id==id) return item})
    setProductDetails(item[0]);
  }, []);
  return (
    <div style={{display:"flex"}}>
      <Catagories/>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="image_section">
          <img
            className="placeholder__image"
            src={productDetails.image}
          />
        </div>
        <div className="description_section">
          <div className="placeholder__description">
            <div
              style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 700 }}
            >
              {productDetails.name}
            </div>
            <div>{productDetails.rating} ratings | 1000+ answered questions</div>
            <hr></hr>
            <div className="textgap">
              Price:<span className="price_tag">{productDetails.price}</span>{" "}
            </div>
            <div className="textgap">You Save: ₹5,000.00 (7%)</div>
            <div className="textgap">
              EMI starts at ₹3,055. No Cost EMI available
            </div>
            <div className="textgap">
              FREE delivery:<strong> Monday, Jan 3</strong>
            </div>   
            <hr></hr>
            <div className="bottom_one">
              Pattern name: <strong>iPhone 11</strong>
            </div>
            <div className="bottom_one">
              <strong>Model Name</strong> IPhone 11
            </div>
            <div className="bottom_one">
              <strong>Wireless Carrier</strong> Unlocked for All Carriers
            </div>
            <div className="bottom_one">
              <strong>Brand</strong> Apple
            </div>
            <div className="bottom_one">
              <strong>Form Factor</strong> Smartphone
            </div>
            <hr></hr>
            <div className="buttons">
              <Button className="button" variant="outlined" onClick={()=>addToCart(productDetails)}>
                Add to Cart
              </Button>
              <Button
                style={{ marginTop: "15px" }}
                className="button"
                variant="contained"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProDescrip;
