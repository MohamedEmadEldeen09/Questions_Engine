
import { createSlice} from '@reduxjs/toolkit'

export const questions_url = "https://codvanced-database.onrender.com/questions"
export const admin_url = 'https://codvanced-database.onrender.com/admins'


//state
const initState = {
    questions : [],
    admin_login : false,
    current_Admin : {
      id : "",
      name : "",
      passid : ""
    },
    loading : false,
    q_title : "",
    information :[
      [
        ['idDel' , "delete1"],
        ['idEdit', "edit1"],
        ['valueText' , "option 1"],
        ['valueSelect' , "web"]
      ],
      [
        ['idDel' , "delete2"],
        ['idEdit', "edit2"],
        ['valueText' , "option 2"],
        ['valueSelect' , "web"]
      ]
    ],
    toSubmitEdit : false

}

// actions , reducers 
const adminSlice = createSlice({
    name:'admin',
    initialState:initState,
    reducers:{
    setQtitle : (state , action)=>{
       state.q_title = action.payload
    },

    pop_option : (state , action)=>{
      console.log(state.information[2][0][1]);
      console.log(action.payload);
      state.information =  state.information.filter(inf => inf[0][1] !== action.payload)
    },
    push_information :(state , action)=>{
      state.information.push(action.payload)
    },
    set_information:(state , action)=>{
      state.information = action.payload 
    },
    reset_Information:(state)=>{
      state.information = [
        [
          ['idDel' , "delete1"],
          ['idEdit', "edit1"],
          ['valueText' , "option 1"],
          ['valueSelect' , "web"]
        ],
        [
          ['idDel' , "delete2"],
          ['idEdit', "edit2"],
          ['valueText' , "option 2"],
          ['valueSelect' , "web"]
        ]
      ] 
    },
    set_EditToTrue : (state)=>{
      state.toSubmitEdit = true
    },
    set_EditToFalse : (state , action)=>{
      state.toSubmitEdit = false
      if(action.payload !== 'cancel'){
        let newInformation = []
        for (let i = 0; i < state.information.length; i++) {  
          let nf = []     
          if(state.information[i][1][1] === action.payload[0]){
            nf = [
              ['idDel' , state.information[i][0][1]],
              ['idEdit', state.information[i][1][1]],
              ['valueText' , action.payload[1]],
              ['valueSelect' , action.payload[2]]
            ]
          }else{
            nf  = state.information[i]
          }
          newInformation.push(nf)
        }
        console.log(newInformation);
        state.information = newInformation
      }   
    },
    refrechTheQuestions : (state)=>{
      state.questions = []
    },
    resetTheQuestions : (state , action)=>{
      state.questions = action.payload
    },
    set_adminLogin : (state , action)=>{
      state.admin_login = true
      state.current_Admin = action.payload
    },
   },    

})

export const {setQtitle  , pop_option  , push_information,
  set_EditToFalse , set_EditToTrue , set_information,refrechTheQuestions , 
  reset_Information , resetTheQuestions ,set_adminLogin} 
  = adminSlice.actions
export default adminSlice.reducer