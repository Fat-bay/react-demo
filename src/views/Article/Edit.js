import React, { Component } from 'react'

import{
    Card,
    Button,
    Form,
    DatePicker,
    Input
} from 'antd'
import './edit.less'


const formItemLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 16
  }
}

const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
}

class Edit extends Component {
    // 提交表单
    handleSubmit = (e) => {
        // console.log(e)
        e.preventDefault()
        this.props.form.validateFields((err,values) => {
            if(!err){
                console.log('Received values of form: ', values)
            }
        })
    }

    render() {
        console.log(Form);     
        return (
            <Card
              title="编辑文章"
              bordered={false}
              extra={<Button>取消</Button>}
            >
                <Form
                    onSubmit={this.handleSubmit}
                    {...formItemLayout}
                >
                    <Form.Item
                        name="note"
                        label="标题："
                        rules={[{
                            required: true,
                            message: "标题不能为空"
                        }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="note"
                        label="作者："
                        rules={[{
                            required: true,
                            message: "作者不能为空"
                        }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="note"
                        label="阅读量："
                        rules={[{
                            required: true,
                            message: "阅读量不能为空"
                        }]}>
                        <Input placeholder="0" />
                    </Form.Item>

                    <Form.Item name="date-picker" label="创建时间" {...config}>
                        <DatePicker showTime placeholder="选择时间" />
                    </Form.Item>

                    <Form.Item name={['user', 'introduction']} label="内容：" message="内容不能为空">
                        <Input.TextArea />
                    </Form.Item>

                    <Button type="primary" htmlType="submit">
                        保存修改
                    </Button>
                </Form>
            </Card>
        )
    }
}

export default Edit