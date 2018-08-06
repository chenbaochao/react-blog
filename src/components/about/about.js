import React, { Component } from 'react'
import {
  Row,
  Col,
  Card,
  Icon
} from 'antd'
import './about.css'
import SiderCustom from '../sider/siderCustom'
class About extends Component {
  componentDidMount() {
    document.title = 'CBC Blog'
  }
  render() {
    return (
      <div>
        <Row>
        <Col
            lg={{ span: 15, offset: 1 }}
            md={{ span: 15, offset: 1 }}
            xs={{ span: 24 }}
            className="about-wrapper"
          >
            <Card
              title="关于我"
              style={{marginBottom: 20}}
            >
              <div className="content">
                <p>
                  你好，我是博客的博主！该博客主要是用来记录我的学习，
                  和一些其他方面的随笔，感悟，生活，总结等。
                </p>
                <p style={{marginTop: 20}}>
                  作为一个后端打杂人员，一直想要弄一个自己的博客，对自己学的知识不断总结。
                  后来，也就是现在，学的东西慢慢多了，
                  就想自己动手写一个，也算是对自己编码能力的一种试验吧，于是有了这个网站。
                </p>
                <p style={{marginTop: 20}}>
                  目前在<a href="http://www.hand-china.com/" target="_blank" rel="noopener noreferrer">上海汉得信息</a>，实习完了一年，希望自己在java的道路上越走越偏~(︿(￣︶￣)︿)
                </p>
              </div>
            </Card>
            <Card
              title="联系我"
            >
              <div className="content">
                <p>
                  <Icon type="mail" /> 邮箱：674181203@qq.com
                </p>
                <p style={{marginTop: 20}}>
                  <Icon type="github" /> Github：<a href="https://github.com/chenbaochao" target="_blank" rel="noopener noreferrer">CBC</a>
                </p>
              </div>
            </Card>
          </Col>
          <Col
            lg={{ span: 6, offset: 1 }}
            md={{ span: 6, offset: 1 }}
            xs={{ span: 0 }}
          >
            <SiderCustom />
          </Col>
        </Row>
        <Row style={{marginTop: 20}}>
          <Col
            lg={{ span: 0 }}
            md={{ span: 0 }}
            xs={{ span: 24 }}
          >
            <SiderCustom />
          </Col>
        </Row>
      </div>
    )
  }
}

export default About