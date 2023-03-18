import Bar from "../../components/bar/bar"
import RecordMiniature from "../../components/record-miniature/record-miniature"
import { HomePageStyled } from "../../styled/home-page/home-page"

const HomePageView: React.FC = () => {
    return <>
    <Bar />
    <HomePageStyled>
        <RecordMiniature/>
        <RecordMiniature/>
        <RecordMiniature/>
        <RecordMiniature/>
        <RecordMiniature/>
        <RecordMiniature/>
        <RecordMiniature/>
        <RecordMiniature/>
    </HomePageStyled>
    </>
}

// Tutaj myślałem, żebyśmy dodali pod Headerem ale zaraz przed produktami taki przesuwany bar, który wyświetlałby aktualne promocje/nowości/bestsellery/ogłoszenia i dopiero pod nim zrobić kafelki z produktami.

export default HomePageView