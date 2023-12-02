import { Outlet } from 'react-router-dom'
import PageWrapper from '../common/PageWrapper/PageWrapper'
import Header from '../common/Header/Header'

function MainLayout() {
    return (
        <PageWrapper>
            <Header />
            <Outlet />
        </PageWrapper>
    )
}

export default MainLayout
