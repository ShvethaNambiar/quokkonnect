import './product.scss'
import Product1 from '../../assets/product-1.svg'
import Product2 from '../../assets/product-2.svg'
import Product3 from '../../assets/product-3.svg'
import Product4 from '../../assets/product-4.svg'
import Product5 from '../../assets/product-5.svg'
import Product6 from '../../assets/product-6.svg'

const Product = () => {
    return (
        <div id="product">
            <div className="product-1">
                <h2 className="heading">What is Quokkonnect?</h2>
                <div className="product-text">
                    <p>Quokkonnect is a global (or glocal = global + local)  platform that offers project based learning contents about sustainable development.</p>
                    <p>Students can choose projects/challenges according to their own interests and abilities. It will take 4 to 8 weeks with maximum 4 hours per week to work on. Along the project phase one qualified mentor will be assigned to the team and offer necessary coaching.</p>
                </div>
                <div className="product-video">
                    <div className="video-border">
                        <video loop className="video" controls preload >
                            <source type='video/mp4' src="/videos/quokkonnect-video.mp4" />
                        </video>
                    </div>
                </div>
                <div className="product-img-1">
                    <div className="feature-img"><img className="svg-img" src={Product1} alt="product"></img></div>
                    <div className="feature-img"><img className="svg-img" src={Product2} alt="product"></img></div>
                    <div className="feature-img"><img className="svg-img" src={Product3} alt="product"></img></div>
                    <div className="feature-img"><img className="svg-img" src={Product4} alt="product"></img></div>
                    <div className="feature-img"><img className="svg-img" src={Product5} alt="product"></img></div>
                    <div className="feature-img"><img className="svg-img" src={Product6} alt="product"></img></div>
                </div>
            </div>
        </div>
    )
}

export default Product