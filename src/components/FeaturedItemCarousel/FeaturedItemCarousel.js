import { Carousel } from "react-responsive-carousel"
import styles from './FeaturedItemCarousel.module.scss'

export default function FeaturedItemCarousel({ imageUrls }) {

    return(
        <div className={styles.carousel}>
            <Carousel showThumbs={true} showArrows={true}>
                {imageUrls.map((imageUrl, index) => (
                    <div key={index}>
                        <img src={imageUrl} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}