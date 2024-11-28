import { MainLayout } from 'src/layouts/main-layout'
import { OrgList } from 'src/widgets/org-list'

const OrgPage: React.FC = () => {
    return (
        <MainLayout title='Организации'>
            <OrgList/>
        </MainLayout>
    )
}
export default OrgPage