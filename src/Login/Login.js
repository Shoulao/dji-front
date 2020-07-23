import React from "react";
import { Formik } from "formik";
import { Button } from "../_components/Button";
import { Header } from "../_components/Header";
import { Input, InputLabel, InputField, Form } from "../_components/Input";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions/user.actions";

function Login() {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => dispatch(userActions.login(values))}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit}>
                <Header>Login</Header>
                <InputField>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                </InputField>

                <InputField>
                  <InputLabel htmlFor="email">Password</InputLabel>
                  <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                </InputField>
                <Button
                  backgroundColor="#1ca1f3"
                  backgroundColorHover="#0de04c"
                  textColor="#fff"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Enter
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
