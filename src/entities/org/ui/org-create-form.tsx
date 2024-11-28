import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react'

import { SubmitHandler, useForm } from 'react-hook-form'
 
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { FormMsgAlert } from 'src/shared/ui'

type Props = {
    onClose: () => void
}

type Inputs = {
    title: string
    body: string
    description: string
    photoIds: File[]
    phone: string
    email: string
    latitude: number
    longitude: number
}

const schema = yup
    .object({
        title: yup.string().required('Заголовок не должен быть пустым!'),
        body: yup.string().required('Содержание не должно быть пустым!'),
        description: yup.string().required('Описание не должно быть пустым!'),
        phone: yup.string().required('Телефон не должнен быть пустым!'),
        email: yup.string().required('Email не должнен быть пустым!'),
        latitude: yup.number().required('Широта не должна быть пустой!'),
        longitude: yup.number().required('Долгота не должна быть пустой!'),
        photoIds: yup.mixed()
    })
    .required()


const OrgCreateForm: React.FC<Props> = props => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        //@ts-ignore
        resolver: yupResolver<Inputs>(schema)
    })

    const onSubmit: SubmitHandler<Inputs> = async (data) => console.log(data)
    

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <FormMsgAlert msg={errors.title?.message}/>
            <Input {...register('title')} type='text' label='Заголовок'/>
            <FormMsgAlert msg={errors.body?.message}/>
            <Textarea {...register('body')} type='text' label='Содержание'/>
            <FormMsgAlert msg={errors.description?.message}/>
            <Textarea {...register('description')} type='text' label='Описание'/>
            <FormMsgAlert msg={errors.phone?.message} />
            <Input {...register('phone')} type='text' label='Номер'/>
            <FormMsgAlert msg={errors.email?.message} />
            <Input {...register('email')} type='text' label='E-mail'/>
            <FormMsgAlert msg={errors.latitude?.message} />
            <Input {...register('latitude')} type='number' label='Широта'/>
            <FormMsgAlert msg={errors.longitude?.message} />
            <Input {...register('longitude')} type='number' label='Долгота'/>
            <Input {...register('photoIds')} type='file' label='Фотографии' multiple/>
            <Button type='submit'  color='primary' variant='solid'>Создать</Button>
        </form>
    )
}
export default OrgCreateForm