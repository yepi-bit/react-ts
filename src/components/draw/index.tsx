import React from 'react';
import { Drawer, Button, List, Avatar, Skeleton  } from 'antd';


class Draws extends React.Component {
    state = { 
        visible: false,
        initLoading: true,
        loading: false,
        data: [],
        list: [],
     };

    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
  
    render() {
        const { initLoading, loading, list } = this.state;
        const loadMore =
          !initLoading && !loading ? (
            <div
              style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
              }}
            >
              <Button>loading more</Button>
            </div>
          ) : null;
      return (
        <>
          <Button type="primary" style={{margin: 20}} onClick={this.showDrawer}>
            Open drawer
          </Button>
          <Drawer
            title="Multi-level drawer"
            width={520}
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={item => (
                    <List.Item
                    //     actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                    >
                        <Skeleton avatar title={false} active>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                            <div>content</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
          </Drawer>
        </>
      );
    }
  }
  
export default Draws