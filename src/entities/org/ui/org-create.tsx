import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import OrgCreateForm from 'src/entities/org/ui/org-create-form'

const OrgCreate: React.FC = () => {

    const modal = useDisclosure()

    return (
        <>
            <Button onClick={modal.onOpen} color='primary'>Добавить организацию</Button>
            <Modal isOpen={modal.isOpen} onOpenChange={modal.onOpenChange}>
                <ModalContent>
                    <ModalHeader>Создать организацию</ModalHeader>
                    <ModalBody>
                        <OrgCreateForm onClose={modal.onClose}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default OrgCreate