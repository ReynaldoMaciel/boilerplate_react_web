import React from "react";
import { Field, Form, Formik, FormikProps, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./styles.css";

const Login = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  return (
    <div>
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                    }, 1000);
                  }}
                >
                  {(props: FormikProps<any>) => (
                    <Form className="box">
                      <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left">
                          <Field
                            name="email"
                            type="email"
                            placeholder="exemplo@gmail.com"
                            className="input"
                            required
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-info-circle"></i>
                          </span>
                        </div>
                        <ErrorMessage
                          component="p"
                          className="has-text-danger"
                          name="email"
                        />
                      </div>
                      <div className="field">
                        <label className="label">Password</label>
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
                        <button className="button is-success is-fullwidth">
                          Login
                        </button>
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
