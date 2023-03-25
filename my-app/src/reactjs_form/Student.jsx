import React, { Component } from 'react'
import StudentItem from './StudentItem';
import Modal from './Modal'
import FromAdd from './FromAdd'
import { connect } from 'react-redux'


class User extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <FromAdd />
                <StudentItem StuList={this.props}/>
                <Modal/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        studentList: state.userReducer.studentList,
        keyWord: state.userReducer.keyWord,
    }
}
export default connect(mapStateToProps, null)(User)