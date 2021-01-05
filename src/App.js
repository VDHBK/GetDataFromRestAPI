import React, { Component } from "react";

//import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    await fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
      })
      .catch(console.log);
  }

  renderUsers = () => {
    let users = this.state.users.map((data, index) => (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.website}</td>
      </tr>
    ));

    return users;
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-center">Users List</h1>

          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>{this.renderUsers()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
