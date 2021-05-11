import './product.scss'
import { ReactVideo } from "reactjs-media"

const Product=()=>{
    return(
        <div id="product">
            <div className="product-flex product-1">
                <h2 className="heading">What is Quokkonect?</h2>
                <div className="product-video">
                    <video controls loop autoPlay>
                        <source type='video/mp4' src="../../assets/quokkonnect-video.mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Product