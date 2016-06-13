//必要なライブラリ群をインポート
var React = require('react');//React.jsのライブラリをimport
var ReactDOM = require('react-dom');//ReactDOM.jsのライブラリをimport
var ReactTabs = require('react-tabs');//React-tabs.jsのライブラリをimport
var Tab = ReactTabs.Tab;//React-tabs.jsライブラリのtabコンポーネントオブジェクトを変数に格納
var Tabs = ReactTabs.Tabs;//React-tabs.jsライブラリのtabsコンポーネントオブジェクトを変数に格納
var TabList = ReactTabs.TabList;//React-tabs.jsライブラリのtablistコンポーネントオブジェクトを変数に格納
var TabPanel = ReactTabs.TabPanel;//React-tabs.jsライブラリのtabpanelコンポーネントオブジェクトを変数に格納

var InputText = React.createClass({
  getInitialState() {
    return {
      textValue: "",
    };
  },
  changeText(e) {
    this.setState({textValue: e.target.value});
  },
  render:function () {
    return (
      <div>
        name:<input type="text" name="name" value={this.state.textValue} onChange={this.changeText} />
      </div>
    );
  }
});

var App = React.createClass({
  handleSelect: function (index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  },
  render: function () {
    return (
      <div>
        <Tabs
          onSelect={this.handleSelect}
          selectedIndex={0}
        >
          <TabList>
            <Tab>tab1</Tab>
            <Tab>tab2</Tab>
            <Tab>tab3</Tab>
          </TabList>

          <TabPanel>
            <h2>This is tab1</h2>
            <InputText/>
          </TabPanel>
          <TabPanel>
            <h2>This is tab2</h2>
            <InputText/>
          </TabPanel>
          <TabPanel>
            <h2>This is tab3</h2>
            <InputText/>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
});

//Appの中身を<div id="container"></div>にレンダリング
ReactDOM.render(<App/>, document.getElementById('container'));
