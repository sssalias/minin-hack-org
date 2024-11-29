import { Button, Card, CardBody, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import { MdInfo } from 'react-icons/md'
import { News } from 'src/services-api'

type Props = {
    dto: News
}
const NewsItem: React.FC<Props> = props => {

    const {isOpen, onOpenChange, onOpen} = useDisclosure()

    return (
        <>
            <Card shadow='sm'>
                <CardBody className='flex flex-row justify-between items-center'>
                    <div className='w-3/4 flex flex-col gap-2'>
                        <h1>{props.dto.title}</h1>
                        <span className='w-3/4 truncate'>{props.dto.description}</span>
                    </div>
                    <div className='flex gap-2'>
                        <Button onClick={onOpen} isIconOnly variant='light' color='primary' size='lg'><MdInfo/></Button>
                    </div>
                </CardBody>
            </Card>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <ModalHeader>{props.dto.title}</ModalHeader>
                    <ModalBody>{props.dto.description}</ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default NewsItem