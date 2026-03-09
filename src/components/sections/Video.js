const Video=()=>{
    return(
        <div className="container mb-5 pb-5">
          <h2 className="text-start my-5 centerOnMobile" style={{fontFamily: 'Georgia, serif'}}>This is you</h2>

          <div style={{
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
            padding: '60px 40px',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '60px',
              flexWrap: 'wrap'
            }}>
              <div style={{flex: '1', minWidth: '280px', textAlign: 'left'}}>
                <h3 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '2.5rem',
                  color: '#333',
                  marginBottom: '20px',
                  lineHeight: '1.3'
                }}>
                  Elegance in <span style={{color: '#f7444e'}}>Every Detail</span>
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  marginBottom: '30px'
                }}>
                  Discover timeless pieces crafted with passion. Each jewelry tells a unique story of sophistication and style.
                </p>
                <a 
                  href="/products/jewelery" 
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#f7444e',
                    color: 'white',
                    padding: '15px 40px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Explore Collection
                </a>
              </div>
              <div style={{flex: '1', minWidth: '280px', display: 'flex', justifyContent: 'center'}}>
                <img 
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80" 
                  alt="Elegant Jewelry"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '350px',
                    borderRadius: '8px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
    )
}
export default Video;