import { Button, Input, Textarea } from '@nextui-org/react'

import { SubmitHandler, useForm } from 'react-hook-form'
 
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { FormMsgAlert } from 'src/shared/ui'

import {CreateNews} from 'src/services-api'
import { createNews } from 'src/entities/news/api/createNews'
import { useOrgStore } from 'src/store'

type Props = {
    onClose: () => void
}

const schema = yup
    .object({
        title: yup.string().required('Заголовок не должен быть пустым!'),
        description: yup.string().required('Описание не должно быть пустым!'),
        organization_id: yup.string().required('Это поле не должно быть пустым!')
    })
    .required()


const NewsCreateForm: React.FC<Props> = props => {

    const orgs = useOrgStore()

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateNews>({
        //@ts-ignore
        resolver: yupResolver<CreateNews>(schema)
    })
    const onSubmit: SubmitHandler<CreateNews> = async (data) => {
        createNews({...data, media: []})
        reset()
        props.onClose()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <FormMsgAlert msg={errors.title?.message}/>
            <Input {...register('title')} type='text' label='Заголовок'/>
            <FormMsgAlert msg={errors.description?.message}/>
            <Textarea {...register('description')} type='text' label='Описание'/>
            <FormMsgAlert msg={errors.organization_id?.message}/>
            <select {...register('organization_id')} >
                {orgs.data.map(el => <option value={el.id}>{el.title}</option>)}
            </select>
            <Button type='submit'  color='primary' variant='solid'>Создать</Button>
        </form>
    )
}
export default NewsCreateForm