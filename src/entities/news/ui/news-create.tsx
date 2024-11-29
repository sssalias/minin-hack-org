import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import NewsCreateForm from 'src/entities/news/ui/news-create-form'

const NewsCreate: React.FC = () => {

    const modal = useDisclosure()

    return (
        <>
            <Button className='ml-auto' onClick={modal.onOpen} color='primary'>Добавить новость</Button>
            <Modal isOpen={modal.isOpen} onOpenChange={modal.onOpenChange}>
                <ModalContent>
                    <ModalHeader>Создать новость</ModalHeader>
                    <ModalBody>
                        <NewsCreateForm onClose={modal.onClose}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default NewsCreate