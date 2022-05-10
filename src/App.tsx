import React, { FC } from 'react';
import { Button } from "antd";
import Notice from "./components/usetypescript";
import Hello from "./components/constraint";
import SetUp from "./components/Step";
import './App.css';
import Cards from './components/useCards';
import SelectTags from './components/selectTags';
import SelectWithHiddenSelectedOptions from './components/tags';
import Panel from './components/panel';
import Comments from './components/comment'
import Draws from './components/draw';

const App: FC = () => (
    <div className="App">
        <Button type="primary">hello world</Button>
        <Notice name='angle' address='1' />
        <Hello name='wang' />
        <SetUp />
        <Cards />
        <SelectWithHiddenSelectedOptions />
        <SelectTags />
        <Panel />
        <Comments />
        <Draws />
    </div>
);

export default App