import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Register = () => {
  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    confirmation: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), ""], "Senha e confirmação devem ser iguais"),
  });

  return (
    <div>
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-7-desktop is-3-widescreen">
                <h1 className="title">Cadastro</h1>
                <h2 className="title is-6">
                  Informe os seus dados para criar uma conta
                </h2>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    confirmation: "",
                  }}
                  validationSchema={RegisterSchema}
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
                        <label className="label">Nome</label>
                        <div className="control has-icons-left">
                          <Field
                            autoComplete="off"
                            name="name"
                            type="text"
                            placeholder="João da Silva"
                            className="input"
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                        <ErrorMessage
                          component="p"
                          className="has-text-danger"
                          name="name"
                        />
                      </div>
                      <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left">
                          <Field
                            autoComplete="off"
                            name="email"
                            type="email"
                            placeholder="exemplo@gmail.com"
                            className="input"
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
                        <label className="label">Confirmação</label>
                        <div className="control has-icons-left">
                          <Field
                            name="confirmation"
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
                          name="confirmation"
                        />
                      </div>
                      <div className="field">
                        <button
                          onClick={props.submitForm}
                          type="button"
                          className="button is-success is-fullwidth"
                        >
                          Criar conta
                        </button>
                      </div>
                      <div className="field">
                        <Link
                          to="/login"
                          className="button is-light is-fullwidth"
                        >
                          Fazer login
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

export default Register;
