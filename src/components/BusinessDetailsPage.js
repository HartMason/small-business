import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Map from "./Map";

const BusinessDetailsPage = (props) => {
  const { businesses } = props;
  const { id } = useParams();

  useEffect(() => {
    console.log(id, 'id');
  });

  if (businesses.length === 0) {
    return <p>loading...</p>;
  }

  const business = businesses.find((business) => business.id === Number(id));
  console.log(business)

  return (
    <div>
      <h1>{business.business_name}</h1>
      <p>{business.description}</p>
      <p>{business.adress}</p>
      <p>{business.description2}</p>
      <Map business={business}/>  
    </div>
  );
};

export default BusinessDetailsPage;
