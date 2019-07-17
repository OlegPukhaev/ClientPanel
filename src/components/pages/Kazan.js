import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { firestoreConnect } from "react-redux-firebase";
import { notifyUser } from "../../actions/notifyAction";
import ContactForm from "../clients/ContactForm";
import KazanImg from "../../assets/kazan.jpg";

class Kazan extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: ''
  };

  onSubmit = e => {
    e.preventDefault();

    const newClient = this.state;
    const { notifyUser } = this.props;

    const { firestore, history } = this.props;

    firestore.add({ collection: "clients" }, newClient).then(res => {
      notifyUser("Data send successfuly", "success");
      history.push("/kazan");
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { notify } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-12 d-flex p-2"
            style={{
              backgroundImage: `url(${KazanImg})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
              backgroundPosition: `center center`,
              height: `768px`
            }}
          >
            <ContactForm
              history={this.props.history}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              firstName={this.state.firstName}
              phone={this.state.phone}
              notify = {notify}
            />
          </div>
        </div>
      </div>
    );
  }
}

Kazan.propTypes = {
  firestore: PropTypes.object.isRequired,
  notify: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(),
  firebaseConnect(),
  connect(
    (state, props) => ({
      notify: state.notify
    }),
    { notifyUser }
  )
)(Kazan);
