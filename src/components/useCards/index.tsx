import React from 'react'
import { Spin, Alert, Switch } from 'antd';

class Cards extends React.Component {
  state = { loading: false };

  toggle = () => {
    setTimeout(() => {
        this.setState({ loading: true });
    }, 1000);
    this.setState({ loading: false });
  };

  render() {
    const container = (
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    );
    return (
      <div>
        <Spin spinning={this.state.loading} delay={500}>
          {container}
        </Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：
          <Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </div>
    );
  }
}
export default Cards