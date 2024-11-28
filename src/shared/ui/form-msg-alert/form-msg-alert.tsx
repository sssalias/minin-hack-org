type Props = {
    msg: string | undefined
}

const FormMsgAlert: React.FC<Props> = props => {
    return (
        <span className='text-red-400 text-sm'>{props.msg}</span>
    )
}
export default FormMsgAlert