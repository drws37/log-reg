const React = require('react');
const Layout = require('./Layout');

function SignInPage() {
  return (
    <Layout>
      <div className="container">
        <form id="sign-in">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Авторизироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = SignInPage;
