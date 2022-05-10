import React, { FC, useState } from 'react'
import { Modal, Button, message } from 'antd'

interface ModalProps {
  visible?: boolean,
  modalText?: string
}

const Modals: FC <ModalProps> = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('输入新成员信息！！');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('点击下一步就成功啦！！');
    setConfirmLoading(true);
    setTimeout(() => {
        setConfirmLoading(false);
        setVisible(false);
        message.success('添加成功请查看！')
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        添加成员
      </Button>
      <Modal
        title="添加成员"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};
export default Modals
