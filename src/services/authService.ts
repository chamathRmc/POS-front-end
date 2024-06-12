
import router from '../router/router';
import axios from './../aixos';
import './../Interfaces/loginParams';

const loginRequest = async(loginParams : loginParams) =>{
    try {
        const response = await axios.post('/api/auth/login', {
          email: loginParams.email,
          password: loginParams.password,
        });
    
        if (response.data.success) {
            localStorage.setItem('token',response.data.data.token)
            const responseData = await axios.get('/api/user-details');
            localStorage.setItem('rolePermissions',responseData.data.data.role.permissions);
            localStorage.setItem('userPermissions',JSON.stringify(responseData.data.data.userPermissions));

            router.push({'name':'dashboard'});
            console.log(responseData.data.data);
        } else {
          throw new Error(response.data.error);
        }
      } catch (err:any) {
        console.error('Login error:', err);
        return err.response.data.message;
      }
}

export default loginRequest;
