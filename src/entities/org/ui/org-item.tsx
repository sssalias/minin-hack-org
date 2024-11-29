import { Button, Card, CardBody } from '@nextui-org/react'
import { Organization } from 'src/services-api'
import { MdDelete, MdInfo } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'
import { deleteOrg } from 'src/entities/org/api/deleteOrg'

type Props = {
    dto: Organization
}
const OrgItem: React.FC<Props> = props => {


    const {keycloak} = useKeycloak()

    return (
         <Card shadow='sm'>
            <CardBody className='flex flex-row justify-between items-center'>
                <div className='w-3/4 flex flex-col gap-2'>
                    <h1>{props.dto.title}</h1>
                    <span className='w-3/4 truncate'>{props.dto.description}</span>
                </div>
                <div className='flex gap-2'>
                    <Link to={`/${props.dto.id}`}><Button isIconOnly variant='light' color='primary' size='lg'><MdInfo/></Button></Link>
                    <Button onClick={() => deleteOrg(props.dto.id, keycloak.token)}  isIconOnly variant='light' color='danger' size='lg'><MdDelete/></Button>
                </div>
            </CardBody>
        </Card>
    )
}
export default OrgItem