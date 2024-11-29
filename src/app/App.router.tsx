import { Route, Routes } from 'react-router-dom'
import { NewsPage } from 'src/pages/news-page'
import { OrgInfoPage } from 'src/pages/org-info-page'
import { OrgPage } from 'src/pages/org-page'

interface IRoute {
    path: string
    page: React.ReactNode
}

const RouterData: IRoute[] = [
    {
        path: '/',
        page: <OrgPage/>
    }, 
    {
        path: '/:id',
        page: <OrgInfoPage/>
    },
    {
        path: '/news',
        page: <NewsPage/>
    }
]

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {RouterData.map(el => <Route key={el.path} path={el.path} element={el.page}/>)}
        </Routes>
    )
}
export default AppRouter