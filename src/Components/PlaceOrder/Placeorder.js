import React, { useContext, useEffect, useState } from 'react';
import "./Placeorder.css";
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import { Paper } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../CartContext';

function Placeorder() {
  const { increment } = useContext(CartContext);
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();

  const addToCart = () => {
    increment(productDetails);
  }
  useEffect(() => {

    //api call
    let list = [
      {
        id: 123456543,
        name: "Samsung S21 (256 GB) Blue",
        rating: "38000",
        review: "1000",
        emi: "2401",
        delivery: "Wednesday, Aug 18",
        price: "50999",
        status: "In stock",
        soldby: "Darshita Electronics",
        image:
          "https://ik.imagekit.io/1zytrb8ce/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676994417554",
        about: [
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
          "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
          "Face ID for secure authentication",
        ],
      },
      {
        id: 54342265,
        name: "New Apple iPhone 11",
        rating: "34565",
        review: "1000",
        emi: "2401",
        delivery: "Wednesday, Aug 18",
        price: "50999",
        status: "In stock",
        soldby: "Darshita Electronics",
        image:
          "https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388",
        about: [
          "Desription for iphone 11 -bla bla",
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
          "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
          "Face ID for secure authentication",
        ],
      },
      {
        id: 123453456543,
        name: "Iphone12",
        rating: "34565",
        review: "1000",
        emi: "2401",
        delivery: "Wednesday, Aug 18",
        price: "76543",
        status: "In stock",
        soldby: "Darshita Electronics",
        image:
          "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
        about: [
          "Desription for iphone 12 -bla bla",
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
          "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
          "Face ID for secure authentication",
        ],
      },
      {
        id: 12344545456543,
        name: "Iphone13",
        rating: "34565",
        review: "1000",
        emi: "2401",
        delivery: "Wednesday, Aug 18",
        price: "637357",
        status: "In stock",
        soldby: "Darshita Electronics",
        image:
          "https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461",
        about: [
          "Desription for iphone 13 -bla bla",
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
          "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
          "Face ID for secure authentication",
        ],
      },
      {
        id: 123465656543,
        name: "Iphone12",
        rating: "34565",
        review: "1000",
        emi: "2401",
        delivery: "Wednesday, Aug 18",
        price: "76543",
        status: "In stock",
        soldby: "Darshita Electronics",
        image:
          "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
        about: [
          "Desription for iphone 12 pro pmax -bla bla",
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
          "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
          "Face ID for secure authentication",
        ],
      },
      {
        id: 2356346363,
        name: "Iphone13",
        rating: "637357",
        review: "1000",
        emi: "2401",
        delivery: "Wednesday, Aug 18",
        price: "50999",
        status: "In stock",
        soldby: "Darshita Electronics",
        image:
          "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583",
        about: [
          "Desription for iphone 13 -bla mini bla",
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
          "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
          "Face ID for secure authentication",
        ],
      },
    ];
    //fake API
    let itemFilter = list.filter(item => item.id === parseInt(id));
    console.log(itemFilter);
    setProductDetails(itemFilter[0]);
  }, [id]);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <img className="placeorder__image" src={productDetails.image} alt="" />
        </Grid>
        <Grid item xs={4}>
          <div className='placeholder_description'>
            <div style={{ fontSize: "24px", lineHeight: "32px", fontWeight: "500" }}>{productDetails.name}</div>
            <div>
              <Rating name="read-only" value={4} style={{ fontSize: '20px' }} readOnly />
              {productDetails.ratings} ratings |
              {productDetails.review}+ answered questions
            </div>
            <hr></hr>
            <div>
              <div className="textgap">Price: <span className="pricetag">₹ {productDetails.price}</span></div>
              <div className="textgap">FREE delivery: <strong>{productDetails.delivery}</strong></div>
              <div className="textgap">EMI starts at ₹ {productDetails.emi}. No Cost EMI available</div>
              <div style={{ color: "#007600", fontSize: "20px" }} className="textgap">{productDetails.status}</div>
              <div className="textgap">Sold by <strong>{productDetails.soldby}</strong> and Fulfilled by Amazon.</div>
            </div>
            <div style={{ fontSize: "24px" }} className="textgap">About this item</div>
            <div>
              <ul>
                {productDetails.about && productDetails.about.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <Paper variant='outlined' className='placeholder_order'>
            <div>
              <div><strong>Without Exchange</strong></div>
              <div>40,249</div>
              <div style={{ marginTop: "10px" }}><strong>Add an Accessory</strong></div>
              <div>
                <label><input type="checkbox" />Samsung Airpods</label><br />
                <label><input type="checkbox" />Samsung 20W USB Power Adapter</label>
              </div>
              <div>
                <button className='placeholder_button addtocart' onClick={addToCart}>Add to cart</button>
                <Link to="/checkout">
                  <button className='placeholder_button buynow'>Buy Now</button>
                </Link>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Placeorder;