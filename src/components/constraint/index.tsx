import React, { FC } from 'react'
import { Button } from "antd";

interface Greeting {
    name: string;
    firstName?: string;
    lastName?: string;
}

const Hello: FC<Greeting> = (props) => {
    return (
        <Button type='dashed'>你是传说中的： {props.name}</Button>
    )
};

export default Hello
