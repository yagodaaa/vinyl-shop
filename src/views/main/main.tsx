import { Container } from "@mui/material"
import { Outlet } from "react-router-dom"
import Bar from "../../components/bar/bar"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import MobileChat from "../../components/mobile-chat/mobile-chat"

const MainView: React.FC = () => {
    return <>
            <Header />
            <Bar />
            <Container>
                <Outlet />
            </Container>
            <MobileChat />
            <Footer />
        </>
}

// Dodałem strukturę naszego widoku main (czyli tego, który zawsze będzie widoczny na stronie niezależnie od widoku), w którym będzie standardowo Header, Container z treścią (widokiem), Footer i dodatkowo pomyślałem, żeby mobilny czat jeśli go zrobimy też pływał zawsze na wierzchu. Najwyżej usuniemy go z tego widoku.

export default MainView