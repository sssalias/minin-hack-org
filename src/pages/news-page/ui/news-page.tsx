import { useKeycloak } from '@react-keycloak/web'
import { useEffect } from 'react'
import { getNews } from 'src/entities/news/api/getNews'
import { getOrg } from 'src/entities/org/api/getOrg'
import { MainLayout } from 'src/layouts/main-layout'
import { NewsList } from 'src/widgets/news-list'

const NewsPage: React.FC = () => {


    const {keycloak} = useKeycloak()

    useEffect(() => {
        getOrg(keycloak.token)
        getNews()
    }, [])

    return (
        <MainLayout title='Новости'>
            <NewsList/>
        </MainLayout>
    )
}
export default NewsPage