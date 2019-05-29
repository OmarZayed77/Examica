import React from "react";
import "./feature-card.css";
import { Layout, Card } from "element-react/next";

const FeatureCard = props=> {
    return (
      <Layout.Row
        className="FeatureCard"
        gutter="10"
        type="flex"
        justify="center"
      >
        <Layout.Col span={5}>
          <Card bodyStyle={{ padding: 0 }}>
            <img
              className="FeatureCard-Image"
              src={this.props.image}
              alt="timeIcon"
            />
            <div style={{ padding: 14 }}>
              <span className="FeatureCard-Title">{this.props.title}</span>
              <div className="bottom clearfix">
                <p className="FeatureCard-Content">{this.props.content}</p>
              </div>
            </div>
          </Card>
        </Layout.Col>
      </Layout.Row>
    );

}

export default FeatureCard;
