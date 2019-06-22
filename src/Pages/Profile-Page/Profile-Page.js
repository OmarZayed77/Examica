import React, { Component, Fragment } from "react";
import { Layout } from "element-react";
import { connect } from "react-redux";
import Exam from "../../Components/exams/exam/exam";
import * as userActions from "../../Store/Actions/userActions";
import * as examActions from "../../Store/Actions/examActions";
import "./Profile-Page.css";

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUser: {
        name: "fatma",
        email: "fatma@gmail.com",
        phone: "01159751361"
      },
      Exams: []
    };
  }

  // componentDidMount() {
  //   this.props.getUser(this.props.userId, "1", this.props.token);
  // let exams = this.props.getUserExams(this.props.orgId, this.props.token);
  //this.setState({
  //...this.state;
  //Exams: exams
  //})
  // }

  render() {
    let examlist = null;
    if (this.state.Exams > 0) {
      examlist = this.props.exams.map((ex, index) => {
        return (
          <Layout.Col key={index} span={5} offset={1}>
            <Exam
              id={ex.id}
              name={ex.name}
              startDate={ex.startDateTime}
              endDate={ex.endDateTime}
              numberOfQuestions={ex.questions.length}
            />
          </Layout.Col>
        );
      });
    }

    return (
      <Fragment>
        <Layout.Row className="ProfilePage">
          <Layout.Col sm={11} md={8} lg={5}>
            <Layout.Row>
              <Layout.Col className="ProfilePage-left-section">
                <div className="ProfilePage-pic" />
              </Layout.Col>
            </Layout.Row>
            <Layout.Row>
              <Layout.Col>
                <div className="ProfilePage-info">
                  <h3 className="ProfilePage-info-name">
                    {this.state.activeUser.name}
                  </h3>
                  <p>
                    <i className="fas fa-envelope ProfilePage-info-icon" />
                    {this.state.activeUser.email}
                  </p>
                  <p>
                    <i className="fas fa-phone ProfilePage-info-icon" />
                    {this.state.activeUser.phone}
                  </p>
                </div>
              </Layout.Col>
            </Layout.Row>
          </Layout.Col>

          <Layout.Col
            sm={11}
            md={14}
            lg={17}
            className="ProfilePage-right-section"
          >
            {examlist}
          </Layout.Col>
        </Layout.Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    orgId: state.organizations.currentOrgnaziation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: (userId, orgId, token) => {
      dispatch(userActions.getOneUser(userId, orgId, token));
    },
    getUserExams: (orgId, token) => {
      examActions.get(orgId, token);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
