import "./home.styles.scss"
import Carousel from "../../components/carousel/carousel.component";
import CarouselItems from "../../carouselItems"

const Home = () => {
    return (
        <div>
            <div className="intro" id="intro">
                <h1><strong>"Hello"</strong></h1>
            </div>

            <div className="name" id="name">
                <h1 data-aos="fade-left"><strong><span>"</span>I am <span>J</span>atin<span>"</span></strong></h1>
                <h3 data-aos="fade-up" data-aos-duration="2000">- <span>A Web Developer and 3D Generalist</span></h3>
            </div>

            <div className="content" id="content">
                <h2 data-aos="fade-right"><strong>I have a few interests, which include:</strong></h2>
                <ul>
                <li data-aos="flip-up" data-aos-duration="1500">
                    <i className="fa-solid fa-gears"></i>
                    <h4>Machine Learning</h4>
                </li>
                <li data-aos="flip-up" data-aos-duration="1500">
                    <i className="fa-solid fa-user-shield"></i>
                    <h4>Ethical Hacking</h4>
                </li>
                <li data-aos="flip-up" data-aos-duration="1500">
                    <i classNameName="fa-solid fa-desktop"></i>
                    <h4>PC Building</h4>
                </li>
                <li data-aos="flip-up" data-aos-duration="1500">
                    <i className="fa-solid fa-cube"></i>
                    <h4>3D Animation</h4>
                </li>
                </ul>    
            </div>

            <div className="tools" id="tools">
                <h3  data-aos="fade-right">As for my Arsenal Tools, I know how to work with:</h3>
                <i data-aos="zoom-in" className="fa-brands fa-react"></i>
                <i data-aos="zoom-in" className="fa-brands fa-js"></i>
                <i data-aos="zoom-in" className="fa-brands fa-node"></i>
                <i data-aos="zoom-in" className="fa-solid fa-flask"></i>
            </div>

            <hr></hr>

            <Carousel CarouselItems={CarouselItems} />

        </div>
    )
}

export default Home;