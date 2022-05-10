import React, { FC, useState } from 'react';
import { Button } from "antd";

export interface NoticeProps {
    name: string;
    address: string | number
}

const Notice: FC <NoticeProps> = (props) => {
    const [ name, setName ] = useState('angle');
    const [ count, setCount ] = useState(0);
    const addCount=()=>{
        setCount(count + 1)
    }

    return <div>
        <p>我是男1, name是：{name}</p>
        <p>我是男2, count是：{count}</p>
        <Button type='primary' danger onClick={() => setName('我最帅了')}>点击改变name</Button>
        <Button type='primary' onClick={addCount}>点击改变count</Button>
    </div>;
}
export default Notice
