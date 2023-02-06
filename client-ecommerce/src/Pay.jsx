import StripeCheckout from 'react-stripe-checkout';
import {useState,useEffect} from "react"

const KEY = "pk_test_51MUCW0EjN5G5xCDtnIBD50fhwDgv716ZbHbQzFRlM98RPxE1mEZY0rNEPbiO4Yz1NXeCqoELRFgxzS1ogzeH20wK00iG2MCxBM"

const Pay = () => {
  const [stripeToken,setStripeToken] = useState(null)
  
  const onToken =(Token) => {
    setStripeToken(Token);
  }; 
  const makeRequest = async () => {
    try{
      const res = await axios.post(
        "http://localhost:5000/api/checkout/payment", {
          tokenId:stripeToken.id,
          amount:2000,
        }
      );
      console.log(res.data);
    }catch(err){
      console.log(err)
    }
  };
  stripTeoken && makeRequest
}, [stripeToken]);
 
return (

      style={{
        height: "100vh",
        display: "flex",
        alignments:"center",
        justifyContent: "center",
      }}  

      <stripecheckout 
      name= "Namaste"
      image=
      billingAddress
      shipingAddress
      description = "your total is 20€"
      amount={2000}
      token={onToken}  
      stripeKey={KEY}
      >  
        <button
        style={{
          border: "none",
          width: 120,
          borderRadius: 5,
          padding: "20px",
          backgroundColor: "black",
          color: "white",
          fontweight: "600",
          cursor: "pointer",
        }}
      >
        Pay Now
      </button>
    <stripecheckout>
    </div>
  );
};

export default Pay;