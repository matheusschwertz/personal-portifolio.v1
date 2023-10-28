import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp2.jpeg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills" style={{ backgroundImage: `url(${colorSharp})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 style={{ color: '#fff', fontFamily: 'Roboto Mono, monospace', fontSize: '45px', fontWeight: '700', marginBottom: '20px' }}>Skills</h2>
                        <p style={{ color: '#B8B8B8', fontSize: '18px', letterSpacing: '0.8px', lineHeight: '1.5em', marginBottom: '40px' }}>
                          "Sou apaixonado por DevOps porque acredito no poder da colaboração entre desenvolvimento e operações."
                          <br />
                          Busco constantemente automação e integração contínua para melhorar o ciclo de vida do desenvolvimento e a entrega de produtos de alta qualidade.
                        </p>
                        <Carousel responsive={responsive} infinite className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Python" />
                                <h5 style={{ color: '#fff' }}>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Docker" />
                                <h5 style={{ color: '#fff' }}>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Terraform" />
                                <h5 style={{ color: '#fff' }}>Terraform</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Linux" />
                                <h5 style={{ color: '#fff' }}>Linux</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}