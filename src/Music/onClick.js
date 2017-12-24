/**
 * ligang
 */

import React from 'react';
// import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon, Divider, Avatar, Dropdown, List, Table, Popover } from 'antd';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';


const { Content } = Layout;
// const TabPane = Tabs.TabPane;
// const Search = Input.Search;

// function callback(key) {
//   console.log(key);
// }

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

class BasicLayout extends React.Component {


  // state = {
  //   collapsed: false,
  // };
  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // }
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: 'true',
      bot: '-90px',
      background: 'orange',
      pressStatus: 'normal',
      color: 'red',
    };
    // 特别注意这一行语句
    this.handleClick = this.handleClick.bind(this);
    // this.pClick = this.pClick.bind(this);
  }
  // handleClick() {
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn,
  //   }));
  //   console.log(this);
  // }

  onPressIn(word, e) {
    console.log('ok');
    console.log(e.target.innerHTML);
    console.log(this);
    console.log(this, word);
    console.log(this.state.background);
    // this.state.background:'red';
    this.setState({ pressStatus: 'normal' });
  }

  onPressOut() {
    // this.state.background:'red';
    this.setState({ background: 'red', color: 'blue' });
    this.setState({ pressStatus: 'normal' });
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
    console.log(this);
  }

  render() {
    const layout = (
      <Layout>
        <Content>
          <button onClick={this.handleClick.bind(this)}>
            {this.setState.background ? 'black' : 'red'}
          </button>
          <p onPressIn={this.onPressIn.bind(this)} onPressOut={this.onPressOut.bind(this)} style={{ marginTop: '20px', marginLeft: '20px', background: this.state.background }}>按钮</p>
        </Content>
      </Layout>
    );
    return (
      <ContainerQuery query={query}>
        {params => <div className={classNames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}

export default connect()(BasicLayout);
