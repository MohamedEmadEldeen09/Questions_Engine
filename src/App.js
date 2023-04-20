import { BrowserRouter , Route , Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { QueryClient , QueryClientProvider } from "react-query";


// admin components
import EditQ  from "./adminstration/component/editQ.js";
import Questions from './adminstration/component/questions.js'
import AddQ from './adminstration/component/addQ.js'
import Admin_login from './adminstration/component/admin_login.js'
import Profile from './adminstration/component/profile.js'
import Admin_header  from './adminstration/component/admin_header.js'
import Not_found  from './adminstration/component/not_found.js'



function App() {

  let questions = useSelector(state => state.admin.questions)
  let isLogin = useSelector(state => state.admin.admin_login)
  let current_Admin = useSelector(state => state.admin.current_Admin) 
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/Questions_Engine"  
            element={<Admin_header isLogin={isLogin} current_Admin={current_Admin} />}>             
              <Route exact index element={<Questions questions={questions} 
              isLogin={isLogin}/>}/>       
              <Route path="/Questions_Engine/questions"  
              element={<Questions questions={questions} isLogin={isLogin}/>}/>
              <Route exact path="/Questions_Engine/editQ/:Qid"  
              element={<EditQ questions={questions} isLogin={isLogin}/>}/>
              <Route exact path="/Questions_Engine/addQ"  
              element={<AddQ  isLogin={isLogin}/>}/>
              <Route exact path="/Questions_Engine/profile_admin"  
              element={<Profile isLogin={isLogin} 
              current_Admin={current_Admin}/>}/>
              <Route exact path="/Questions_Engine/admin_login"  
              element={<Admin_login isLogin={isLogin}/>}/>
          </Route>        
          <Route  path="*"  element={<Not_found />}/>  
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
