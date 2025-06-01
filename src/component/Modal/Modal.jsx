import ModalAddPost from '@/app/utils/ModalAddPost/ModalAddPost';
import ModalWraper from '@/app/utils/ModalWraper/ModalWraper';

const Modal = () => {
  return (
    <ModalWraper>
      <ModalAddPost />
    </ModalWraper>
  );
};

export default Modal;
