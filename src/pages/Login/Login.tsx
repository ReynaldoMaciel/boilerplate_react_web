import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user/actions";
import { RouteComponentProps } from "react-router-dom";

const Login = ({ history }: RouteComponentProps<null>) => {
  const dispatch = useDispatch();
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const onSubmit = async () => {
    // console.log("teste");
    dispatch(
      setUser({
        token: "asdfadf",
        userId: "",
        refreshToken: "",
      })
    );
    history.push("/home");
  };

  return (
    <div>
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-7-desktop is-2-widescreen">
                <h1 className="title">Login</h1>
                <h2 className="title is-6">
                  Informe email e senha para fazer login
                </h2>
                <Formik
                  initialValues={{
                    email: "admin@email.com",
                    password: "123123",
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={onSubmit}
                >
                  {(props: FormikProps<any>) => (
                    <Form className="box">
                      <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left">
                          <Field
                            autoComplete="off"
                            name="email"
                            type="email"
                            placeholder="exemplo@gmail.com"
                            className="input"
                            required
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                          </span>
                        </div>
                        <ErrorMessage
                          component="p"
                          className="has-text-danger"
                          name="email"
                        />
                      </div>
                      <div className="field">
                        <label className="label">Senha</label>
                        <div className="control has-icons-left">
                          <Field
                            name="password"
                            type="password"
                            placeholder="*******"
                            className="input"
                            required
                          />
                          <span className="icon is-small is-left">
                            <i className="fa fa-lock"></i>
                          </span>
                        </div>
                        <ErrorMessage
                          component="p"
                          className="has-text-danger"
                          name="password"
                        />
                      </div>
                      <div className="field">
                        <button
                          onClick={props.submitForm}
                          type="button"
                          className="button is-success is-fullwidth"
                        >
                          Login
                        </button>
                      </div>
                      <div className="field">
                        <Link
                          to="/cadastro"
                          className="button is-light is-fullwidth"
                        >
                          Criar conta
                        </Link>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
