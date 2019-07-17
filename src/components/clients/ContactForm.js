import React from "react";
import Alert from '../layout/Alert';

function ContactForm(props) {
  const {
    onSubmit,
    onChange,
    firstName,
    phone,
    notify: { message, messageType }
  } = props;

  return (
    <div className="col-6 mx-auto">
      <div className="card">
        <div className="card-header">Позвоните Мне</div>
        <div className="card-body">
          {message ? (
            <Alert message={message} messageType={messageType} />
          ) : null}
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">Имя</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                minLength="2"
                required
                onChange={onChange}
                value={firstName}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input
                type="phone"
                className="form-control"
                name="phone"
                minLength="10"
                required
                onChange={onChange}
                value={phone}
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary btn-block"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
