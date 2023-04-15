import { RecordMiniature } from "../../components/record-miniature/record-miniature"
import './home-page.scss'
import './hero-image.scss'
import heroImage from "./main.jpg"

const HomePageView: React.FC = () => {
    return <>
        <img className="hero-image" src={heroImage} alt="heroImage"/>
        <img className="empty" src={heroImage} alt="heroImage"/>
        {/* <div className="empty"></div> */}
                <RecordMiniature/>
    </>
}
// Tutaj myślałem, żebyśmy dodali pod Headerem ale zaraz przed produktami taki przesuwany bar, który wyświetlałby aktualne promocje/nowości/bestsellery/ogłoszenia i dopiero pod nim zrobić kafelki z produktami.
export default HomePageView