import { OrgCreate } from 'src/entities/org'
import OrgItem from 'src/entities/org/ui/org-item'
import { useOrgStore } from 'src/store'


const OrgList: React.FC = () => {

    const {data} = useOrgStore()

    return (
        <div className='flex flex-col gap-4'>
            {data.map(dto => <OrgItem dto={dto}/>)}
            <OrgCreate/>
        </div>
    )
}
export default OrgList