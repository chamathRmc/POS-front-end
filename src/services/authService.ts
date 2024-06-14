
import { Actions } from '../store/enums/enums';
import './../Interfaces/loginParams';




const loginRequest = async(loginParams : loginParams,store) =>{
    try {

      let result = store.dispatch(Actions.LOGIN_REQUEST, {
        email: loginParams.email,
        password: loginParams.password,
      });
        // const response = await axios.post('/api/auth/login', {
        //   email: loginParams.email,
        //   password: loginParams.password,
        // });
    
        // if (response.data.success) {
        //     localStorage.setItem('token',response.data.data.token)
        //     const responseData = await axios.get('/api/user-details');
        //     localStorage.setItem('rolePermissions',responseData.data.data.role.permissions);
        //     localStorage.setItem('userPermissions',JSON.stringify(responseData.data.data.userPermissions));

        //     router.push({'name':'dashboard'});
        // } else {
        //   throw new Error(response.data.error);
        // }
      } catch (err:any) {
        console.error('Login error:', err);
        return err.response.data.message;
      }
}

const changeType = (passwordType:string, iconType:string) =>
  {
    passwordType = (passwordType=== 'password') ? 'text' : 'password';
    iconType = (passwordType === 'password') ? 'pi pi-eye cursor-pointer': 'pi pi-eye-slash cursor-pointer';

    return {
      'passwordType':passwordType,
      'iconType':iconType
    }
  }

export { loginRequest, changeType };
