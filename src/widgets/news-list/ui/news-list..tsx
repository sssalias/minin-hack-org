import NewsCreate from 'src/entities/news/ui/news-create'
import NewsItem from 'src/entities/news/ui/news-item'
import { useNewsStore } from 'src/store/news-store/news-store'

const NewsList: React.FC = () => {

    const {data} = useNewsStore()

    return (
        <div className='flex flex-col gap-4'>
            {data.map(dto => <NewsItem dto={dto}/>)}
            <NewsCreate/>
        </div>
    )
}
export default NewsList