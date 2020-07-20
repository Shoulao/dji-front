import React from "react";
import { Formik } from "formik";
import { Button } from "../_components/Button";
import { Header } from "../_components/Header";
import { Input, InputLabel, InputField, Form } from "../_components/Input";
import { userService } from "../_services/user.service";

function Register() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{ email: "", username: "", password: "" }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => userService.register(values)}
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
                <Header>Register</Header>
                <InputField>
                  <InputLabel for="email">Email</InputLabel>
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
                  <InputLabel for="email">Username</InputLabel>
                  <Input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  {errors.username && touched.username && errors.username}
                </InputField>

                <InputField>
                  <InputLabel for="email">Password</InputLabel>
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
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
