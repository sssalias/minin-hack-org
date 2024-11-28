import { Route, Routes } from 'react-router-dom'

interface IRoute {
    path: string
    page: React.ReactNode
}

const RouterData: IRoute[] = [

]

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {RouterData.map(el => <Route key={el.path} path={el.path} element={el.page}/>)}
        </Routes>
    )
}
export default AppRouter