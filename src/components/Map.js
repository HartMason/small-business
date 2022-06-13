import React from "react";

function Map(props) {
    const apiKey = process.env.REACT_APP_API_KEY 
    const { business_name, address } = props.business
    let addressParams = [business_name, address].join(" ").split(" ").join("+").replaceAll(",", "+")
    console.log(props )
  return (
    <iframe
      width="600"
      height="450"
      style={{border:0}}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}
    &q=${addressParams}`}
    ></iframe>
  );
}

export default Map;
