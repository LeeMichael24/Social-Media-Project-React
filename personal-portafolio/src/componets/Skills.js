import { Row } from "react-bootstrap";
import Carousel  from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000}, items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024}, items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464}, items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0}, items: 1
        }
    }

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p> ;la;ls;dlja;sldj ;ljas;dljas;ldj a;lajd ;lajs;dljas;d ;aljd;lajs;dljas; dj;aljd a d  as;ld;asljd;asd;ja;dljas;ljd ;asjd;jad; a;djas; dj;lassjd; as;dj ;asljd;lasfjd;ljaas;djas;das; d;a sjd ;a sd;as ;ldas;ldj;asljd; alsjd;asd; as d asd as d as a as as as a a</p>

                            <Carousel responsive={responsive} infinite={true} className="skilll-slider">
                                <div className="item">
                                    
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}