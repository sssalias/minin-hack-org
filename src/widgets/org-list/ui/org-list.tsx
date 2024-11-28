import { OrgCreate } from 'src/entities/org'

const OrgList: React.FC = () => {
    return (
        <div className='flex flex-col gap-4'>
            <OrgCreate/>
        </div>
    )
}
export default OrgList