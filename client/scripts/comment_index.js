//必要なライブラリ群をインポート
var React = require('react');//React.jsのライブラリをimport
var ReactDOM = require('react-dom');//ReactDOM.jsのライブラリをimport
var ReactTabs = require('react-tabs');//React-tabs.jsのライブラリをimport
var Tab = ReactTabs.Tab;//React-tabs.jsライブラリのtabコンポーネントオブジェクトを変数に格納
var Tabs = ReactTabs.Tabs;//React-tabs.jsライブラリのtabsコンポーネントオブジェクトを変数に格納
var TabList = ReactTabs.TabList;//React-tabs.jsライブラリのtablistコンポーネントオブジェクトを変数に格納
var TabPanel = ReactTabs.TabPanel;//React-tabs.jsライブラリのtabpanelコンポーネントオブジェクトを変数に格納

//Appコンポーネントを定義
var App = React.createClass({
  //handeSelectメソッドの定義。第一引数:現在のタブNo 第二引数:直前に選択していたタブNo。このメソッドはコールバッグで、実際にはTabsで実行される
  handleSelect: function (index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  },
  //レンダリングする際の処理を記述。コンポーネントの内容をリターンする
  render: function () {
    return (
      <div>//divrootを記述
        //TabsコンポーネントをAppコンポーネント内にレンダリング
        <Tabs
          onSelect={this.handleSelect}//AppクラスのhandleSelectメッソドを、Tabsオブジェクトに渡し、keydoneイベント時に実行
          selectedIndex={0}//index.htmlを開いた時のデフォルトで開かれるタブを設定
        >//タブ全体の集まり
          //TabListコンポーネントをTabsコンポーネント内にレンダリング
          <TabList>//タブのヘッダーの集まり
            //TabコンポーネントをTabListコンポーネント内にレンダリング
            <Tab>tab1</Tab>//Tab本体
            <Tab>tab2</Tab>
            <Tab>tab3</Tab>
          </TabList>

          //TabPanelコンポーネントをTabsコンポーネント内にレンダリング
          <TabPanel>//Tabのアコーディオン
            <h2>This is tab1</h2>
          </TabPanel>
          <TabPanel>
            <h2>This is tab2</h2>
          </TabPanel>
          <TabPanel>
            <h2>This is tab3</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
});

//Appのコンポーネントを<div id="container"></div>にレンダリング
ReactDOM.render(<App/>, document.getElementById('container'));
