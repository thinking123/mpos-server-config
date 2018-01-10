import React, { Component } from 'react';
import { Form, Input, Button ,Select ,Row,Col} from 'antd';
import Table from './Table'
const FormItem = Form.Item


const hasErrors = (fieldsError)=>{
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}


class SearchForm extends Component{
    handleSubmit = (e)=>{
        
    }
    handleReset = () => {
        this.props.form.resetFields();
    }
    render(){
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;


        const cashNoError = isFieldTouched('cashNo') && getFieldError('cashNo');
        
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    validateStatus={cashNoError ? 'error' : ''}
                    help={cashNoError || ''}
                    label="收银机号"
                >
                    {getFieldDecorator('cashNo', {
                        rules: [{ required: false, message: 'Please input your correct cashNo!' ,pattern:/^\d*$/}],
                    })(
                        <Input placeholder="cashNo" />
                    )}
                </FormItem>
                <FormItem
                >
                    {getFieldDecorator('status')(
                        <Select placeholder="Please select a country">
                            <Option value="china">China</Option>
                            <Option value="use">U.S.A</Option>
                        </Select>
                    )}
                </FormItem>
                <Row>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                    >
                        Search
                    </Button>

                    <Button
                        onClick={this.handleReset}
                    >
                        Reset
                    </Button>
                </Row>
            </Form>
        )
    }
}


const WrappedSearchForm = Form.create()(SearchForm);

const CashRegisterStatus = ()=>{

    return (
        <div>
            <WrappedSearchForm/>
            <Table/>
        </div>
    )}


 export default CashRegisterStatus