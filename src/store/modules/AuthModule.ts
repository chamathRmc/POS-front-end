
// import { VuexModule, Mutation, Action, Module } from 'vuex-module-decorators'
// import { Actions } from '../enums/enums'

import axios from './../../aixos';

export default {

    state:{

    },
    actions:{

            login_Request(context:any,data:any){
                return new Promise<void>((resolve,reject)=>{
                      axios.post('/api/auth/login',data).then((response:any)=>{
              
                          resolve(response.data);
                    }).catch(({response})=>{
                      
                      if(response.status === 422){
                        reject(response.data.message);
                      }else{
                        reject(response.data);
                      }
                       
                    });
              });
          }
    }

  
}