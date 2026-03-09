import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { useCart } from "react-use-cart";

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(price);
};

const CartItem = ({ product }) => {
  const { removeItem, updateItemQuantity } = useCart();

  const removeHandler = (product) => {
    try {
      removeItem(product.id);
      Swal.fire({
        title: "Item Removed",
        text: `${product.title} has been removed from your cart`,
        icon: "success",
        confirmButtonText: "Continue",
        timer: 2000,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="my-4 p-4" style={{borderBottom: '1px solid #E5E5E5'}}>
      <div className="cart-item">
        <div className="row align-items-center">
          <div className="col-md-2 d-flex align-items-center">
            <button
              className="btn btn-sm me-3 dontShowOnMobile"
              onClick={() => {
                removeHandler(product);
              }}
              style={{color: '#999', transition: 'color 0.3s'}}
            >
              <AiOutlineDelete size={18}/>
            </button>
            
            <div style={{
              width: '80px',
              height: '80px',
              background: '#F9F9F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  maxHeight: "70px",
                  maxWidth: "70px",
                  objectFit: "contain"
                }}
              />
            </div>
          </div>
          <div className="col-md-5 pt-2 centerTextOnMobile">
            <h6 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              marginBottom: '5px'
            }}>{product.title}</h6>
            <p style={{color: '#666', fontSize: '0.9rem', margin: 0}}>{formatPrice(product.price)}</p>
          </div>
          <div className="col-md-3 pt-2 centerOnMobile d-flex align-items-center justify-content-center">
            <button
              onClick={() =>
                updateItemQuantity(product.id, product.quantity - 1)
              }
              className="btn btn-sm"
              style={{
                border: '1px solid #E5E5E5',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              −
            </button>
            <span style={{
              margin: '0 15px',
              fontWeight: 500,
              minWidth: '20px',
              textAlign: 'center'
            }}>{product.quantity}</span>
            <button
              onClick={() =>
                updateItemQuantity(product.id, product.quantity + 1)
              }
              className="btn btn-sm"
              style={{
                border: '1px solid #E5E5E5',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              +
            </button>
          </div>
          <div className="col-md-2 text-end pt-2">
            <p style={{
              fontWeight: 500,
              fontSize: '1rem',
              margin: 0
            }}>{formatPrice(product.price * product.quantity)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
