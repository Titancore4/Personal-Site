import "./carousel.styles.scss"
import { useState } from "react"
import CarouselItem from "../carousel-item/carousel-item.component"

const Carousel = ({CarouselItems}) => {

    const [counter, setCounter] = useState(0);

    const prevSlide = () => {
        if (counter !== 0) {
            setCounter(counter - 1)
        }
    }

        
    const nextSlide = () => {
        if (counter !== 3) {
            setCounter(counter + 1)
        }
    }


    // document.getElementsByClassName("carousel-item")

    return (
        <div className="carousel-container">
            <div className="carousel">
                {CarouselItems.map((item) => (<CarouselItem key={item.id} item={{...item, counter}} counter={counter} />))}
            </div>

            <div className="buttons">
                <button onClick={prevSlide} style={{visibility: counter === 0 ? "hidden" : "visible"}}>&#10094;</button>
                <button onClick={nextSlide} style={{visibility: counter === 3 ? "hidden" : "visible"}}>&#10095;</button>
            </div>
        </div>
    )
}

export default Carousel;