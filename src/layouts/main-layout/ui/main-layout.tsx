import { SideBar } from 'src/widgets/sidebar'

type Props = {
    children: React.ReactNode,
    title?: string
}
const MainLayout: React.FC<Props> = props => {
    return (
        <div>
            <SideBar/>
            <main className='ml-[275px] py-10 flex flex-col gap-4'>
                <h1 className='text-2xl font-semibold'>{props.title}</h1>
                {props.children}
            </main>
        </div>
    )
}
export default MainLayout