import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from './Search';
class FromAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            fullName: "",
            Phone: "",
            Email: "",
            type: "STUDENT"
        }

    }
    handleOnchange = (e) => {
        const { name, value } = e.target
        console.log(name, value);
        this.setState({
            [name]: value,
        })
    }
    handleOnsubmit = (e) => {
        //    ngăn load lại trang
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state)
        this.setState({
            id: "",
            fullName: "",
            Phone: "",
            Email: "",
         });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnsubmit}>
                    <div className='box'>
                        <div className='box_1'>
                            <div className="form-group">
                                <label>Mã sv</label>
                                <input type="text" className="form-control" name="id" onChange={this.handleOnchange} value={this.state.id}/>
                            </div>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control" name="fullName" onChange={this.handleOnchange} value={this.state.fullName}/>
                            </div>
                        </div>
                        <div className='box_1'>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" name="Email" onChange={this.handleOnchange} value={this.state.Email}/>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" name="Phone" onChange={this.handleOnchange} value={this.state.Phone}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='btn1 py-3'>
                            <button type="submit" className="btn btn-success">
                                Thêm sinh viên
                            </button>
                        </div>
                        <Search />
                    </div>
                </form>
            </div>
        )
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
export default connect(null, mapDispatchToProps)(FromAdd)