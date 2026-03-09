import { Link } from "react-router-dom";

const Image = () => {
  return (
    <div className="my-5 dontShowOnMobile container">
      <div className="text-center mb-5">
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#D4AF37',
          marginBottom: '10px'
        }}>
          Explore
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2.2rem',
          fontWeight: 500,
          color: '#111'
        }}>Our Collections</h2>
      </div>

      <div className="d-flex justify-content-center my-4">
        {/* Left Image - Rings */}
        <Link to="/products/rings" className="me-3 containerimg" style={{position: 'relative', overflow: 'hidden'}}>
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
            alt="Rings Collection"
            className="img-fluid"
            style={{
              height: "450px",
              width: "500px",
              objectFit: "cover"
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '30px',
            left: '30px',
            color: '#fff'
          }}>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '10px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '5px',
              opacity: 0.8
            }}>Collection</p>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.8rem',
              fontWeight: 500,
              margin: 0
            }}>Rings</h3>
          </div>
        </Link>
        
        {/* Right Side Container */}
        <div className="d-flex flex-column">
          {/* Top - Necklaces */}
          <Link to="/products/necklaces" className="containerimg mb-3" style={{position: 'relative', overflow: 'hidden'}}>
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
              alt="Necklaces Collection"
              className="img-fluid"
              style={{
                height: "218px",
                width: "600px",
                objectFit: "cover"
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '25px',
              color: '#fff'
            }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '10px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '5px',
                opacity: 0.8
              }}>Collection</p>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                fontWeight: 500,
                margin: 0
              }}>Necklaces</h3>
            </div>
          </Link>
          
          {/* Bottom Row */}
          <div className="d-flex">
            {/* Earrings */}
            <Link to="/products/earrings" className="containerimg me-3" style={{position: 'relative', overflow: 'hidden'}}>
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80"
                alt="Earrings Collection"
                className="img-fluid"
                style={{
                  height: "218px",
                  width: "292px",
                  objectFit: "cover"
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                color: '#fff'
              }}>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '5px',
                  opacity: 0.8
                }}>Collection</p>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  margin: 0
                }}>Earrings</h3>
              </div>
            </Link>

            {/* Bracelets */}
            <Link to="/products/bracelets" className="containerimg" style={{position: 'relative', overflow: 'hidden'}}>
              <img
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80"
                alt="Bracelets Collection"
                className="img-fluid"
                style={{
                  height: "218px",
                  width: "292px",
                  objectFit: "cover"
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                color: '#fff'
              }}>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '5px',
                  opacity: 0.8
                }}>Collection</p>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  margin: 0
                }}>Bracelets</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Image;
