import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
    };
  }

  async componentDidMount() {
    await fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ results: data });
      })
      .catch(console.log);
  }

  renderResults = () => {
    let results = this.state.results.map((data, index) => (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.address.zipcode}</td>
        <td>{data.address.city}</td>
        <td>{data.website}</td>
      </tr>
    ));

    return results;
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-center">Results List</h1>

          <table className="table">
            <thead>
              <tr>
                <th>AGV</th>
                <th>更新</th>
                <th>モード</th>
                <th>状態</th>
                <th>バッテリー</th>
                <th>在荷</th>
                <th>昼夜</th>
                <th>上位制御</th>
                <th>現在地</th>
                <th>次中継</th>
                <th>目的地</th>
                <th>タスク</th>
                <th>経路</th>
              </tr>
            </thead>
            <tbody>{this.renderResults()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
