const Video=()=>{
    return(
        <div className="container mb-5 pb-5">
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            background: '#F9F9F9',
            padding: '80px 60px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '80px',
              flexWrap: 'wrap'
            }}>
              <div style={{flex: '1', minWidth: '300px', textAlign: 'left'}}>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: '#D4AF37',
                  marginBottom: '15px'
                }}>
                  The Art of Jewelry
                </p>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2.8rem',
                  color: '#111',
                  marginBottom: '25px',
                  lineHeight: '1.2',
                  fontWeight: 500
                }}>
                  Crafted With<br/><em style={{fontStyle: 'italic'}}>Passion</em>
                </h2>
                <p style={{
                  color: '#666',
                  fontSize: '0.95rem',
                  lineHeight: '1.9',
                  marginBottom: '35px',
                  maxWidth: '450px'
                }}>
                  Each piece in our collection is meticulously crafted by master artisans, combining traditional techniques with contemporary design to create jewelry that transcends time.
                </p>
                <a 
                  href="/products/rings" 
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#1A1A1A',
                    color: 'white',
                    padding: '16px 45px',
                    textDecoration: 'none',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: '500',
                    fontSize: '11px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    transition: 'all 0.4s ease'
                  }}
                >
                  Discover More
                </a>
              </div>
              <div style={{flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center'}}>
                <img 
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80" 
                  alt="Luxury Jewelry Craftsmanship"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
    )
}
export default Video;