import { useState, type ReactNode } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Slide {
  imagePath: string;
  header: string;
  body: string;
  link: string;
  tools: ReactNode[];
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel = ({ slides }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previous = () => {
    setCurrentSlide((currentSlide) => {
      return currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    });
  };

  const next = () => {
    setCurrentSlide((currentSlide) => {
      return currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    });
  };

  return (
    <>
      <div className="carousel-wrapper">
        <div
          className="carousel-container"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="carousel-content-container" key={index}>
              <img src={slide.imagePath} alt="" />
              <div className="content-description-container">
                <h6>Description</h6>
                <p>{slide.body}</p>
                <div className="content-tools-container">
                  {slide.tools.map((tool, index) => (
                    <div className="content-tool-item" key={index}>
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-button-container">
          <button className="carousel-button" onClick={previous}>
            <FaChevronLeft></FaChevronLeft>
          </button>
          <button className="carousel-button" onClick={next}>
            <FaChevronRight></FaChevronRight>
          </button>
        </div>
      </div>
    </>
  );
};

export type { Slide };
export default Carousel;
