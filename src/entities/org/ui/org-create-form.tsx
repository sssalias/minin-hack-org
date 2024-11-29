import { Button, Input, Textarea } from '@nextui-org/react'

import { SubmitHandler, useForm } from 'react-hook-form'
 
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { FormMsgAlert } from 'src/shared/ui'
import { createOrg } from 'src/entities/org/api/createOrg'
import { useKeycloak } from '@react-keycloak/web'
import { OrganizationCreate } from 'src/services-api'

type Props = {
    onClose: () => void
}

const schema = yup
    .object({
        title: yup.string().required('Заголовок не должен быть пустым!'),
        description: yup.string().required('Описание не должно быть пустым!'),
        phone: yup.string().required('Телефон не должнен быть пустым!'),
        email: yup.string().required('Email не должнен быть пустым!'),
        latitude: yup.number().required('Широта не должна быть пустой!'),
        longitude: yup.number().required('Долгота не должна быть пустой!'),
        photo_id: yup.mixed()
    })
    .required()


const OrgCreateForm: React.FC<Props> = props => {

    const {keycloak} = useKeycloak()

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<OrganizationCreate>({
        //@ts-ignore
        resolver: yupResolver<OrganizationCreate>(schema)
    })
    const onSubmit: SubmitHandler<OrganizationCreate> = async (data) => {
        createOrg({...data, photo_id: null}, keycloak.token)
        reset()
        props.onClose()
    }
    

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <FormMsgAlert msg={errors.title?.message}/>
            <Input {...register('title')} type='text' label='Заголовок'/>
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
            <Input {...register('photo_id')} type='file' label='Фотографии' multiple/>
            <Button type='submit'  color='primary' variant='solid'>Создать</Button>
        </form>
    )
}
export default OrgCreateForm