import React, { FC, useState } from 'react'
import { Button, Input, Col, Form, message } from 'antd'
import moment from 'moment';

const Panel: FC = (props) => {
    const { TextArea } = Input;
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [content, setContent] = useState("请输入要发送的信息!");
    const [disabled, setDisabled] = useState<boolean>(false);

    const momentObj = moment();
    const publishTimeStr = `${momentObj.format('YYYY-MM-DD HH:mm')}（${momentObj.fromNow()}）`;

    const sendMessage = () => {
        setSubmitting(true)
        setContent(JSON.stringify(Math.floor(Math.random()*9999999)));
        setTimeout(() => {
            setSubmitting(false)
            message.success('发送成功请查看！！')
        }, 1500);
        setDisabled(true)
    };
    const sendMessageOut = () => {
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
            message.success('已取消上次发送消息！')
        }, 1500);
        setDisabled(false)
    } 

    const onFinish = (value: any) => {
        console.log('你的消息是>>>>>>: ', value);
      };

    return (
        <div>
            <Form onFinish={onFinish}>
                <Col span={6}>
                    <Form.Item label="Input">
                        <Input />
                    </Form.Item>
                </Col>
                <Button type="primary" htmlType="submit" onClick={sendMessage}>发送随机数字消息111</Button>
                <br />
                <Col span={6}>
                    <TextArea rows={3} value={content}
                     />
                </Col>
                <Button type="dashed"
                    loading={submitting}
                    disabled={submitting || disabled}
                    onClick={sendMessage}
                >
                {submitting ? '提交中' : '提交'}
                </Button>
                <Button type="dashed" danger 
                    style={{marginLeft: 20}}
                    loading={submitting}
                    onClick={sendMessageOut}   
                >
                {submitting ? '取消中' : '取消'}    
                </Button>
                {publishTimeStr}
            </Form>
        </div>
    )
}

export default Panel