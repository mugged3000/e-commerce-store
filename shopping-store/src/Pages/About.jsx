
// import './AboutUs.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faUsers, faChartLine, faShieldAlt, faTruck, faHeadset } from '@fortawesome/free-solid-svg-icons';

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "CEO & Founder",
    bio: "With 15 years in e-commerce, Sarah leads our vision for customer-centric shopping.",
    image: "https://african.business/wp-content/uploads/2021/02/shutterstock_570396334-1.jpg"
  },
  {
    name: "Michael Chen",
    position: "Head of Operations",
    bio: "Michael ensures our logistics run smoothly so you get your orders on time.",
    image: "https://thumbs.dreamstime.com/b/black-business-man-thumb-up-happy-giving-modern-office-67668710.jpg"
  },
  {
    name: "Emily Rodriguez",
    position: "Customer Experience",
    bio: "Emily and her team are here to make sure you have the best shopping experience.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl6eBnPOhj87m7x_1F-Btmf1HHuV5CJv2C7TW8vgdxJir1G8F12szW8Z_tDzw01XSMcI&usqp=CAU"
  },
  {
    name: "David Kim",
    position: "Product Curator",
    bio: "David carefully selects products that meet our quality and sustainability standards.",
    image: "https://media.istockphoto.com/id/1372138855/photo/cheerful-black-manager-with-digital-tablet-walking-by-office.jpg?s=612x612&w=0&k=20&c=PU58BwF0lhQwDqhmIKHHg_i2qYUqypZGLxXiwGFjIxQ="
  }
];

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero About-hero text-white py-5">
        <Container>
          <Row className="align-items-center py-5">
            <Col md={5}>
              <h1 className="display-4 fw-bold mb-4">Our Story</h1>
              <p className="lead mb-4" style={{fontFamily:"sans-serif",fontSize:"17px"}}>
                Founded in 2015, we started as a small team with a big dream - to revolutionize online shopping by making it more personal, sustainable, and enjoyable.
              </p>
              <Button variant="light" size="lg" className="rounded-pill px-4">
                Shop Now
              </Button>
            </Col>
                        <Col md={7} className="py-5 d-md-block">
            <div className="about-hero-img">
                <img 
                src="/images/aboutimg.jpg" 
                alt="Our team" 
                className="img-fluid shadow"
                style={{
                    width: '100%',
                    maxHeight: '500px',
                    objectFit: 'cover',
                    height: '100%',
                    borderRadius: '20px'
                }}
                />
            </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col md={8} className="text-center">
              <h2 className="fw-bold mb-3">Our Mission</h2>
              <p className="text-muted">
                To provide high-quality products with exceptional customer service while maintaining sustainable practices that benefit both our customers and the planet.
              </p>
            </Col>
          </Row>
          <Row>
            {[
              { icon: faLeaf, title: 'Sustainability', description: 'We\'re committed to eco-friendly packaging and responsible sourcing to minimize our environmental impact.' },
              { icon: faUsers, title: 'Customer First', description: 'Your satisfaction is our priority. We listen, adapt, and go the extra mile to exceed your expectations.' },
              { icon: faChartLine, title: 'Continuous Growth', description: 'We\'re constantly innovating to bring you the latest products and shopping experiences.' },
            ].map((item, index) => (
              <Col md={4} className="mb-4" key={index}>
                <div className="text-center p-4 h-100 mission-card">
                  <FontAwesomeIcon icon={item.icon} size="3x" className="text-success mb-3" />
                  <h4>{item.title}</h4>
                  <p className="text-muted">{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col md={8} className="text-center">
              <h2 className="fw-bold mb-3">Meet Our Team</h2>
              <p className="text-muted">
                A diverse group of passionate individuals dedicated to making your shopping experience exceptional.
              </p>
            </Col>
          </Row>
          <Row>
            {teamMembers.map((member, index) => (
              <Col md={4} sm={6} className="mb-4  animate__animated animate__fadeIn" key={index}>
                <Card className="border-0 shadow-sm h-100 team-card f-card">
                  <Card.Img variant="top" src={member.image} className="rounded-circle mx-auto mt-3" style={{width: '150px', height: '150px', objectFit: 'cover'}} />
                  <Card.Body className="text-center">
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.position}</Card.Subtitle>
                    <Card.Text className="text-muted small">
                      {member.bio}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col md={8} className="text-center">
              <h2 className="fw-bold mb-3">Our Core Values</h2>
            </Col>
          </Row>
          <Row>
            {[
              { icon: faShieldAlt, title: 'Integrity', description: 'We believe in honest business practices, transparent pricing, and products that deliver on their promises.', color: 'primary' },
              { icon: faTruck, title: 'Reliability', description: 'From fast shipping to quality products, we\'re committed to being a brand you can depend on.', color: 'success' },
              { icon: faHeadset, title: 'Customer Care', description: 'Our support team is available 24/7 to ensure you have the best shopping experience possible.', color: 'warning' },
              { icon: faLeaf, title: 'Sustainability', description: 'We\'re committed to reducing our carbon footprint and supporting ethical manufacturing practices.', color: 'info' },
            ].map((item, index) => (
              <Col md={6} className="mb-4" key={index}>
                <div className="d-flex">
                  <div className="flex-shrink-0 me-4">
                    <div className={`bg-${item.color} text-white rounded-circle d-flex align-items-center justify-content-center`} style={{width: '60px', height: '60px'}}>
                      <FontAwesomeIcon icon={item.icon} size="2x" />
                    </div>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p className="text-muted">{item.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <Row className="text-center">
              {[
              { value: '10M+', label: 'Happy Customers' },
              { value: '50+', label: 'Countries Served' },
              { value: '500+', label: 'Brand Partners' },
              { value: '24/7', label: 'Customer Support' },
            ].map((item, index) => (
              <Col md={3} sm={6} className="mb-4 mb-md-0" key={index}>
                <h2 className="display-4 fw-bold">{item.value}</h2>
                <p className="text-uppercase small">{item.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;