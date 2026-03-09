// Modules
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

// Local jewelry data
import { jewelryProducts } from "../../data/jewelryProducts";
import ProductCard from "../sections/ProductCard";

const ProductCategory = () => {
  window.scrollTo(0, 0); //always go to top of page
  const navigate = useNavigate();
  const { category } = useParams();

  const [filteredProducts, setfilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Map URL categories to our jewelry categories
    let categoryFilter = null;
    if (category === "jewelery" || category === "jewelry") {
      categoryFilter = null; // Show all jewelry
    } else if (category === "rings") {
      categoryFilter = "rings";
    } else if (category === "necklaces") {
      categoryFilter = "necklaces";
    } else if (category === "earrings") {
      categoryFilter = "earrings";
    } else if (category === "bracelets") {
      categoryFilter = "bracelets";
    }
    
    const filtered = categoryFilter 
      ? jewelryProducts.filter(p => p.category === categoryFilter)
      : jewelryProducts;
    
    setProducts(filtered);
    setfilteredProducts(filtered);
    setIsLoading(false);
  }, [category]);

  const handleSearch = async (e) => {
    e.preventDefault();
    // search for products ARRAY
    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    // if there is a product with the searched title
    if (filteredProducts) {
      setfilteredProducts(filteredProducts);
    }
    return null;
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{minHeight: '60vh'}}>
        <div className="spinner-border" role="status" style={{color: '#D4AF37'}}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Get display title based on category
  const getCategoryTitle = () => {
    if (category === "jewelery" || category === "jewelry") return "All Jewelry";
    if (category === "rings") return "Rings Collection";
    if (category === "necklaces") return "Necklaces Collection";
    if (category === "earrings") return "Earrings Collection";
    if (category === "bracelets") return "Bracelets Collection";
    return "Our Collection";
  };

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 style={{fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 500}}>
          {getCategoryTitle()}
        </h1>
        <p style={{color: '#666', maxWidth: '600px', margin: '15px auto'}}>
          Discover our exquisite collection of fine jewelry, crafted with passion and precision.
        </p>
      </div>

      {/* Search input */}
      <div className="d-flex justify-content-end mb-4">
        <div>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search collection..."
              aria-label="Search"
              style={{minWidth: '250px'}}
              onChange={(e) => {
                handleSearch(e);
              }}
            />
            <button className="btn" type="button" style={{border: '1px solid #E5E5E5', borderLeft: 'none'}}>
              <BsSearch />
            </button>
          </div>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="row">
          {filteredProducts.map((product) => (
            <div 
              className="col-lg-3 col-md-4 col-sm-6 mb-4" 
              key={product.id}
            >
              <ProductCard 
                product={product}
                onClick={() => {
                  navigate(`/product/detail`, {
                    state: { product, products },
                  });
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <h5 style={{fontFamily: "'Playfair Display', serif"}}>No items found</h5>
          <p style={{color: '#666'}}>Try a different search term</p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => {
              navigate("/");
            }}
          >
            Return Home
          </button>
        </div>
      )}
    </div>
  );
};
export default ProductCategory;
