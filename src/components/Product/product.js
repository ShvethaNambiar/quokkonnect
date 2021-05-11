import './product.scss'
import { ReactVideo } from "reactjs-media"

const Product=()=>{
    return(
        <div id="product">
            <div className="product-flex product-1">
                <h2 className="heading">What is Quokkonnect?</h2>
                <div className="product-video">
                    <div className="video-border">
                        <video loop className="video" controls >
                            <source type='video/mp4' src="/videos/quokkonnect-video.mp4"/>
                        </video>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Product