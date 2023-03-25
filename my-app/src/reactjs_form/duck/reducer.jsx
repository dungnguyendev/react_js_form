import data from './../data.json'
const initiaState = {
    studentList: data,
    keyWord: "",
    editUser: null,
}
const userReducer = (state = initiaState, action) => {
    switch (action.type) {
        case "SUBMIT_FROM_STUDENT": {
            const student = [...state.studentList]
            console.log(action.payLoad);
            if (action.payLoad.id) {
                const index = student.findIndex((stu) => stu.id === action.payLoad.id);
                if (index !== -1) {
                    student[index] = action.payLoad;
                } else {
                    const stu = { ...action.payLoad }
                    student.push(stu)
                }
            }
            console.log(student);
            state.studentList = student;
            return { ...state }
        }
        case "SEARCH_STUDENT": {
            state.keyWord = action.payLoad;

            return { ...state }
        }
        case "EDIT_STU": {
            console.log(action.payLoad);
            state.editUser = action.payLoad
            return { ...state }
        }
        case "DELETE_STU": {
            const student = [...state.studentList]
            const index = student.findIndex((stu)=>{
                return stu.id === action.payLoad
            })
            if(index !== -1){
                student.splice(index,1);
            }
            state.studentList = student
            return { ...state }
        }
        default:
            return { ...state }
    }
}
export default userReducer;