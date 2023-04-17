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
                <div className="detail">
                    <h1 data-aos="fade-left"><strong><span>"</span>I am <span>J</span>atin<span>"</span></strong></h1>
                    <h3 data-aos="fade-up" data-aos-duration="2000">- <span>A Web Developer / 3D Generalist</span></h3>
                </div>
            </div>

            <div className="content" id="content">
                <h2 data-aos="fade-right"><strong>I am quite interested in stuff like:</strong></h2>
                <div className="features">
                    <ul>
                        <li data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <i className="fa-solid fa-gears"></i>
                            <h4>Machine Learning</h4>
                        </li>
                        <li data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <i className="fa-solid fa-user-shield"></i>
                            <h4>Ethical Hacking</h4>
                        </li>
                        <li data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <i className="fa-solid fa-screwdriver-wrench"></i>
                            <h4>PC Building</h4>
                        </li>
                        <li data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <i className="fa-solid fa-cube"></i>
                            <h4>3D Animation</h4>
                        </li>
                        <li data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <i class="fa-solid fa-gamepad"></i>
                            <h4>Game Production</h4>
                        </li>
                    </ul>
                </div>    
            </div>

            <div className="tools-container" id="tools">
                <h3  data-aos="fade-right">As for my arsenal tools, I use MERN stack and Flask.</h3>
                <div className="tools">
                    <i data-aos="zoom-in" className="fa-solid fa-database"></i>
                    <i data-aos="zoom-in">ex</i>
                    <i data-aos="zoom-in" className="fa-brands fa-react"></i>
                    <i data-aos="zoom-in" className="fa-brands fa-node"></i>
                    <i data-aos="zoom-in" className="fa-solid fa-flask"></i>
                    <i data-aos="zoom-in" className="fa-brands fa-sass"></i>
                </div>
            </div>

            <Carousel CarouselItems={CarouselItems} />

        </div>
    )
}

export default Home;