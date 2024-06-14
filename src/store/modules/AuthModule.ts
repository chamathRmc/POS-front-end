
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Actions } from '../enums/enums'
import axios from './../../aixos';


@Module
export default class AuthModule extends VuexModule{

}
// export default class AuthModule extends VuexModule {
//     @Action
//     [Actions.LOGIN_REQUEST](params: any){
//         return new Promise((resolve,reject)=>{
//             axios.post('/api/auth/login',params).then((response: any) => {

//                 console.log(response);
//                // context.commit('SUPPLIER_MESSAGE_SET', response.data); 
     
//              })
//                 .catch((error: any)=> {
//                  console.log(error);
//                  return error;
//              });
//         });
// //     }
// }
