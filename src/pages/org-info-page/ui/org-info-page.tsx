import { useKeycloak } from '@react-keycloak/web'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOrgById } from 'src/entities/org/api/getOrgByUd'
import { MainLayout } from 'src/layouts/main-layout'
import { Organization } from 'src/services-api'

const OrgInfoPage: React.FC = () => {

    const {id} = useParams()
    const [dto, setDto] = useState<Organization>({})
    const {keycloak} = useKeycloak()


    useEffect(() => {
        const get = async () => {
            const data = await getOrgById(id, keycloak.token)
            if (data) {
                setDto(data)
            }
        }
        get()
    }, [id, keycloak.token])
    

    return (
        <MainLayout title={`Организация ${dto?.title}`}>
            <span><strong>Статус: </strong>{dto?.status}</span>
            <span>{dto?.description}</span>
            <span><strong>Координаты: </strong>{dto?.latitude}, {dto?.longitude}</span>
            <span><strong>E-mail: </strong>{dto?.email}</span>
            <span><strong>Телефон: </strong>{dto?.phone}</span>
        </MainLayout>
    )
}
export default OrgInfoPage