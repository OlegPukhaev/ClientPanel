import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Clients extends Component {
  render() {
    const clients = [
      {
      id: '34234234234',
      firstName: 'Oleg',
      lastName: 'Pukhaev',
      email: 'oleg@gmail.com',
      phone: '555-555-5555',
      balance: '30.34',
    },
      {
      id: 'fdsfsdf989sdf',
      firstName: 'Kate',
      lastName: 'Pukhaeva',
      email: 'kate@gmail.com',
      phone: '444-444-4444',
      balance: '2000',
    },
  ];

    if (clients){
      return (
        <div className="row">
          <div className="col-md-6">
            <h2>
              {' '}
              Clients{' '}
            </h2>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr  key={client.id}>
                  <td>{client.firstName} {client.lastName}</td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading..</h1>
    }

  }
}

export default Clients;
