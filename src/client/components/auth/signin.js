import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Input, Button,Alert } from "antd";
import { connect } from 'react-redux';
import * as actions from '../../actions';
const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
    }
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 14,
            offset: 6
        }
    }
};

const makeField = Component => ({input, meta, children, hasFeedback, label}) => {
    const hasError = meta.touched && meta.invalid;
    return (
        <FormItem
            {...formItemLayout}
            label={label}
            validateStatus={hasError ? "error" : "success"}
            hasFeedback={hasFeedback && hasError}
            help={hasError && meta.error}
        >
            <Component {...input}  />
        </FormItem>
    );
};

const AInput = makeField(Input);

class Signin extends Component {
    handleFormSubmit({ email, password }) {
        // console.log(email, password);

        this.props.signinUser({ email, password });
    }
    renderAlert() {
        if (this.props.errorMessage) {
            // console.log('error');
            let error =`Oops! ${this.props.errorMessage}`
            return (
                <Alert message={error} type="warning" />
            );
        }
    }
    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <h1 style={{textAlign:'center'}}>SignIn </h1>
                <Field
                    label="Email"
                    name="email"
                    component={AInput}
                    type="email"
                    placeholder="Email"
                />
                <Field
                    label="Password"
                    name="password"
                    component={AInput}
                    type="password"
                    placeholder="Password"
                />
                {this.renderAlert()}
                <FormItem {...tailFormItemLayout}>
                    <Button
                        type="primary"
                        disabled={pristine || submitting}
                        htmlType="submit"
                        style={{ marginRight: "10px" }}
                    >
                        Submit
                    </Button>
                </FormItem>

            </Form>
        );
    }
}

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = "Required";
    }
    if (!values.password) {
        errors.password = "Required";
    }
    return errors;
};
function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

Signin = reduxForm({ form: 'signin',  validate })(Signin);
export default connect(mapStateToProps, actions)(Signin);

