import React , {Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import * as actions from '../../actions';
import { Form, Input, Button,Alert } from "antd";
import {connect} from "react-redux";

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
    const hasError = meta.touched && meta.invalid && meta.error ;
    // console.log(meta.error)
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

class Signup extends Component{
    handleFormSubmit(formProps){
        //call action creator to signup the user
        this.props.signupUser(formProps);
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
        return(
            <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <h1 style={{textAlign:'center'}}>SignUp </h1>
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
                <Field
                    label="Confirm Password"
                    name="passwordConfirm"
                    component={AInput}
                    type="password"
                    placeholder="Please re-Enter Password"
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
        )
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
    if (!values.passwordConfirm) {
        errors.passwordConfirm = "Required";
    }
    if(values.password !== values.passwordConfirm){
        errors.password ="Password must match";
    }
    return errors;
};
function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}
// export default Signup;
Signup = reduxForm({ form: 'signup',  validate })(Signup);
export default connect(mapStateToProps, actions)(Signup);