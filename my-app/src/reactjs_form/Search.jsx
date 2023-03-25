import React, { Component } from 'react'
import { connect } from 'react-redux'
class Search extends Component {
    handleOnchange = (event) => {
        this.props.onSearch(event.target.value)
    }
    render() {
        return (
           <input type="text" className='form-control mb-3 w-5' onChange={this.handleOnchange} placeholder="Tìm kiếm học sinh"/>
        )
    }
}
const mapDisPatchToProps = (dispatch) => {
    return {
        onSearch: (keyWord)=>{
            const action = {
                type:"SEARCH_STUDENT",
                payLoad:keyWord
            }
            dispatch(action)
        }
    }
}
export default connect(null,mapDisPatchToProps) (Search)
