import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import BodyBtn from "./bodybtn";
const BodyImg = () => {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://approval.studio/wp-content/uploads/elementor/thumbs/branding-story-of-adidas-phxr316ifopepwoi0z20kyaqn4g405p30ulyt2m8fk.jpg"
          alt="First slide"
        />
        <BodyBtn />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/FwR2iVYfDV4/maxresdefault.jpg"
          alt="Second slide"
        />
        <BodyBtn />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/84589835172167.56ec20e07a472.png"
          alt="Third slide"
        />
        <BodyBtn />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default BodyImg;
