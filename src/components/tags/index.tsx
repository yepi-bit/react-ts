import React from 'react';
import Modals from '../Modal'
import { Select, Rate } from 'antd';

const OPTIONS = ['前端', 'JavaScript', 'Python', 'Java'];
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
class SelectWithHiddenSelectedOptions extends React.Component {
        state = {
            selectedItems: [],
            value: 3
          };

    handleChange = () => {
        this.setState({});
    };


    handleChanges = () => {
        this.setState({});
    };


    render() {
        const { selectedItems } = this.state;
        const filteredOptions = OPTIONS;
        const { value } = this.state;
        return (
        <div>
            <Select
                mode="multiple"
                placeholder="请选择标签"
                value={selectedItems}
                onChange={this.handleChange}
                style={{ width: '30%' }}
            >
                {filteredOptions.map(item => (
                    <Select.Option key={item} value={item}>
                        {item}
                    </Select.Option>
                ))}
            </Select>
            <span>
              <Rate tooltips={desc} onChange={this.handleChanges} value={value} />
              {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
            </span>
            <Modals />
        </div>
        );
    }
}

  export default SelectWithHiddenSelectedOptions