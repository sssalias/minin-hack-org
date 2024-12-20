import { useKeycloak } from '@react-keycloak/web'
import { useEffect } from 'react'
import { getOrg } from 'src/entities/org/api/getOrg'
import { MainLayout } from 'src/layouts/main-layout'
import { OrgList } from 'src/widgets/org-list'

const OrgPage: React.FC = () => {


    const {keycloak} = useKeycloak()

    useEffect(() => {
        getOrg(keycloak.token)
    }, [keycloak.token])

    return (
        <MainLayout title='Организации'>
            <OrgList/>
        </MainLayout>
    )
}
export default OrgPage