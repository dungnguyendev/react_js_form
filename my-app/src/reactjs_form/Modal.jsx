import React, { Component } from 'react'
import { connect } from 'react-redux'
class Modal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: "",
            fullName: "",
            Phone: "",
            Email: ""
        }
        this.closeModal1 = React.createRef();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("file: Modal.jsx:16 ~ Modal ~ getDerivedStateFromProps ~ prevProps:", prevState)
        console.log(nextProps);
        if (nextProps && nextProps.student) {
            if (nextProps.student.id !== prevState.id) {
                prevState = nextProps.student;
                return prevState;
            } else {
                console.log(prevState);
                return prevState;
            }
        }
        return null;
    }
    handelOnchange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        // close modal
        this.closeModal1.current.click()
    }
    render() {

        return (
            <div>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Chỉnh sửa</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={this.closeModal1}></button>
                            </div>
                            <div className="modal-body">

                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" className="form-control" name="fullName" onChange={this.handelOnchange} value={this.state.fullName} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" className="form-control" name="Phone" onChange={this.handelOnchange} value={this.state.Phone} />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="text" className="form-control" name="Email" onChange={this.handelOnchange} value={this.state.Email} />
                                    </div>
                                    <div className="form-group">
                                        <label>Type</label>
                                        <select className="form-control" name="type">
                                            <option>STUDENT</option>
                                        </select>
                                    </div>
                                    <div className='btn1 py-4'>
                                        <button type="submit" className="btn btn-success"

                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        student: state.userReducer.editUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (student) => {
            const action = {
                type: "SUBMIT_FROM_STUDENT",
                payLoad: student,
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)