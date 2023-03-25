import React, { Component } from 'react'
import { connect } from 'react-redux'

class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: this.props.StuList,
        }
    }
    renderListStu = () => {
        let { studentList, keyWord } = this.props.StuList
        console.log(keyWord);
        console.log(studentList);
        studentList = studentList.filter((stu) => {
            return stu.fullName.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
        })
        return studentList.map((stu) => {
            return (
                <tr key={stu.id}>
                    <th scope="row">{stu.id}</th>
                    <td>{stu.fullName}</td>
                    <td>{stu.Phone}</td>
                    <td>{stu.Email}</td>
                    <td>
                        <i className="fa-regular fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>{
                            this.props.onEditStd(stu)
                        }} ></i>
                    </td>
                    <td><i className="fa-regular fa-trash-can" onClick={()=>{
                        this.props.onDeleteStd(stu.id)
                    }}></i></td>
                </tr>
            )
        })
    }
    static getDerivedStateFromProps(nextProps, currentState) {
        console.log(currentState);


        return currentState;
    }
    // handleEdit = () => {

    // }
    render() {
        return (
            <div>
                <table className='table'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th scope="col">Mã SV</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Email</th>
                            <th colSpan={2}><i className="fa-solid fa-gear"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.renderListStu()
                        }
                    </tbody>
                </table>

            </div>
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteStd: (id) => {
            const action = {
                type: "DELETE_STU",
                payLoad: id
            }
            dispatch(action)
        },
        onEditStd: (user) => {
            const action = {
                type: "EDIT_STU",
                payLoad: user
            }
            dispatch(action)
        }
        
    }
}
export default connect(null, mapDispatchToProps)(Student)
