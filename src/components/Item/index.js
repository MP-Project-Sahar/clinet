import React, { useState, useEffect } from "react";
import axios from "axios";

function Item() {
  const [item, setItem] = useState(null);
  useEffect(
    () => {
      getItem();
    }, // eslint-disable-next-line
    []
  );

  const getItem = async () => {
    const id = "61c8590fe7cbae6293c3a5e8";
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/item/${id}`
        // ,{
        //   headers: { Authorization: `Bearer ${state.sign.token}` }
        // }
      );
      console.log("item", res.data);
      setItem(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {item && <img src={item.coverImg} width="500" />}
      {item && item.imgs.map((element) => (
        <img key={element._id} src={element} width="500" />
      ))}
      <h1>{item && item.title}</h1>
      <h4>يوميًا {item && item.priceDay}/يوم</h4>
      <button>تحقق من السعر والتوفر</button>

      <h2>الوصف</h2>
      <h4>{item && item.category}</h4>
      <p>{item && item.desc}</p>

      
      <h2>عن مالك المنتج {item && item.renter.firstName}</h2>
      {item && <img src={item.renter.avatar} width="100" />}
      <p>{item && item.renter.bio}</p>
      <button>مراسلة {item && item.renter.firstName}</button>
      <button>زيارة حساب {item && item.renter.firstName}</button>

    </>
  );
}

export default Item;
