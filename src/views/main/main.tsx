import { Container } from "@mui/material"
import { Outlet } from "react-router-dom"

import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import MobileChat from "../../components/mobile-chat/mobile-chat"
import { MainPageStyled } from "../../styled/main/main"

const MainView: React.FC = () => {
    return <>
    <MainPageStyled>
            <Header />
            <Container style={{ padding: 0}}>
                <Outlet />
            </Container>
            <MobileChat />
            <Footer />
    </MainPageStyled>
        </>
}

// Dodałem strukturę naszego widoku main (czyli tego, który zawsze będzie widoczny na stronie niezależnie od widoku), w którym będzie standardowo Header, Container z treścią (widokiem), Footer i dodatkowo pomyślałem, żeby mobilny czat jeśli go zrobimy też pływał zawsze na wierzchu. Najwyżej usuniemy go z tego widoku.

export default MainView