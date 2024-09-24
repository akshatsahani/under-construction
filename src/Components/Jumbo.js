import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './Styles/Jumbo.css'; // Ensure correct CSS import

const Jumbotron = () => {
  // Fade-in animation effect when the component mounts
  useEffect(() => {
    // Select all Jumbotron components
    const jumbotrons = document.querySelectorAll('.jumbotron-fade');
    
    // Apply the slide-in class to each Jumbotron
    jumbotrons.forEach((jumbotron) => {
      jumbotron.classList.add('jumbotron-slide-in');
    });
  }, []); // Runs once when the component mounts

  return (
    <>
      {/* About Us Jumbotron */}
      <div className="p-3 mb-4 rounded-3 jumbotron-fade" style={{ backgroundColor: '#dcdcdc' }}>
        <div className="container-fluid py-5">
          <div className="row align-items-center">
            {/* Text on the left */}
            <div className="col-md-8 jumbotron-text">
              <h1 className="display-5 fw-bold">about us</h1>
              <p className="jumbotron-paragraph">
              We are a part of a group of companies, with more than 13 years of experience, as one of the most trust-worthy suppliers in the field of Biotechnology, Microbiology, Molecular biology, Cell Culture etc. We have our head office in Gujarat, with an office in important city of Pune. We are a team of 15 dedicated members, who are technically sound and able to guide the customers ethically
              The company is headed by Sanjay Sahani, who has an experience of more than 25 years in the marketing of wide range of products. With his experience in Genaxy Scientific Pvt Ltd., he has been instrumental in establishing a range of international products, in India
              Our extensive product portfolio includes general benchtop lab equipment like Centrifuges, Incubator, Shakers, Spectrophotometers etc and specialized High-end products like Fully automated Plant-phenotyping systems, Automated Liquid handling workstations, DNA sequencer etc, all backed by a commitment to excellence and customer satisfaction. We are looking forward to expand the portfolio with some of the best/ innovative technologies available world-over for Indian market
              At Pulse, we believe in building strong partnerships based on trust and collaboration. Our dedicated team of experts is always ready to assist you in achieving your research and development goals. We pride ourselves on our ability to adapt to the rapidly evolving biotech landscape, ensuring our clients have access to the latest technologies and solutions
              
                {/* Additional content here */}
              </p>
            </div>

            {/* Image on the right */}
            <div className="col-md-4 text-center">
              <img
                src={require("./Images/about_us.jpg")}
                alt="About Pulse Scientific"
                className="img-fluid rounded"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vision Jumbotron */}
      <div className="p-3 mb-4 rounded-3 jumbotron-fade" style={{ backgroundColor: '#dcdcdc' }}>
        <div className="container-fluid py-5">
          <div className="row align-items-center">
            {/* Image on the left */}
            <div className="col-md-4 text-center">
              <img
                src={require("./Images/vision.jpg")}
                alt="Pulse Scientific Vision"
                className="img-fluid rounded"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>

            {/* Text on the right */}
            <div className="col-md-8 ms-auto jumbotron-text">
              <h1 className="display-5 fw-bold text-end">vision</h1>
              <p className="jumbotron-paragraph">
              Our vision is to be the most trust-worthy & reliable company, in the Life Science and Biotech area, with state-of-the-art products, undeniable services and to act as ethical guide to all our customers. We aspire to create a legacy of excellence that inspires the next generation of scientists and healthcare professionals, laying the foundation for a healthier, more equitable, and better-understood world. Our dedication to sustainability, ethics, and social responsibility will guide us as we pursue this ambitious vision, ensuring that our growth benefits not just our stakeholders, but society at large.
                {/* Additional content here */}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Jumbotron */}
      <div className="p-3 mb-4 rounded-3 jumbotron-fade" style={{ backgroundColor: '#dcdcdc' }}>
        <div className="container-fluid py-5">
          <div className="row align-items-center">
            {/* Text on the left */}
            <div className="col-md-8 jumbotron-text">
              <h1 className="display-5 fw-bold">mission</h1>
              <p className="jumbotron-paragraph">
              Our mission at Pulse Scientific is to empower scientific advancement and healthcare solutions through the provision of cutting-edge biotechnology products and services. We are dedicated to fostering a collaborative environment where innovation thrives, enabling researchers, clinicians, and industry partners to push the boundaries of what is possible in life sciences. By prioritizing quality, reliability, and customer satisfaction, we strive to be the trusted source for biotech supplies, contributing to a healthier and more sustainable future for all. Our commitment to excellence extends beyond our products to our contributions to the scientific community, ensuring that our work has a positive impact on society and the environment.
                {/* Additional content here */}
              </p>
            </div>

            {/* Image on the right */}
            <div className="col-md-4 text-center">
              <img
                src={require("./Images/mission.jpg")}
                alt="Pulse Scientific Mission"
                className="img-fluid rounded"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
