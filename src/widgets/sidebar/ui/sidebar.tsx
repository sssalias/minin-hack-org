import { useSideStore } from 'src/store'
import { FaArrowLeft, FaArrowRight, FaBook, FaNewspaper } from 'react-icons/fa'
import clsx from 'clsx'
import {RiLogoutBoxFill} from 'react-icons/ri'
import { Link } from '@nextui-org/react'

const navigation = [
    {
        route: '/',
        label: 'Организации',
        icon: <FaBook/>
    },
    {
        route: '/news',
        label: 'Новости',
        icon: <FaNewspaper/>
    }
]

const SideBar: React.FC = () => {

    const {isOpen, setOpen} = useSideStore()

    return (
        <aside className={clsx('fixed h-full z-[15] shadow-md bg-white transition-all',isOpen ? 'w-[250px]' : 'w-[75px]')}>
            <div className='w-3/4 h-full mx-auto'>
                <div className='py-3 flex flex-col justify-between items-center h-full'>
                    {/* brand */}
                    <div className='pb-3'>
                        {/* logo */}
                        {/* <Logo isIconOnly={!isOpen}/> */}
                        {/* <h1>afaf</h1> */}
                    </div>
                    {/* content */}
                    <div className='w-full h-full relative'>
                        <button onClick={() => setOpen(!isOpen)} className='absolute right-[-45px] top-[45px] text-primary-grey p-2 rounded-xl shadow-md bg-white'>
                            <i>{isOpen ? <FaArrowLeft/> : <FaArrowRight/>}</i>
                        </button>
                        <nav className='h-full'>
                            <ul className='flex h-full flex-col items-center'>
                                {navigation.map(el => (
                                    <li key={el.label} className='w-full rounded-xl hover:bg-gray-100'>
                                        <Link href={el.route} className='flex items-center gap-4 py-4 px-5 w-full text-primary-grey'>
                                            <i>{el.icon}</i>
                                            {isOpen ? <span className='text-sm font-semibold'>{el.label}</span> : null}
                                        </Link>
                                    </li>
                                ))}
                                <li key={'logOut'} className='w-full border-[1px] border-solid border-primary-grey mt-auto rounded-xl hover:bg-gray-100'>
                                    <button className='flex items-center gap-4 py-4 px-5 w-full text-primary-grey'>
                                        <i><RiLogoutBoxFill/></i>
                                        {isOpen ? <span className='text-sm font-semibold'>Выход</span> : null}
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                </div>
            </div>
        </aside>
    )
}
export default SideBar