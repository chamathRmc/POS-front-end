<template>
    <div class="d-flex justify-content-center align-content-center ">
          <Card class="d-flex h-100 border border-black p-5">
            <template #header>
                <i class="pi pi-user" style="font-size: 2.5rem"></i>
            </template>
            <template #title ><span class="fs-1">Login</span></template>
            <template #content>
                 <span id="" class="text-danger">{{ error }}</span>
                <div class="d-flex" style="flex-direction:column;align-items:flex-start">
                    <label for="email" class="fw-bold fz-3 mb-2 mt-2">Email</label>
                    <InputText type="email" v-model="loginParams.email" id="email" />
                </div>
                <div class="d-flex" style="flex-direction:column;align-items:flex-start">
                    <label for="password" class="fw-bold fz-3 mb-2 mt-2">Password</label>
                    <div class="d-flex justify-content-center align-items-center">
                        <InputText :type="passwordType" v-model="loginParams.password" id="password" />
                        <i :class="iconType" @click="passwordTypeChange" style="margin-left:-28px;"></i>
                    </div>
                    
                </div>
            </template>
            <template #footer>
                <div class="d-flex justify-content-start"></div>
                <div class="d-flex gap-3 mt-1 justify-content-end">
                    <Button label="Login" class="w-full rounded-4 w-50" severity="primary" @click="handleLogin"/>
                </div>
            </template>
        </Card>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import {loginRequest, changeType } from './../services/authService';
import './../Interfaces/loginParams';
import { useStore } from "vuex";

import { Actions } from '../store/enums/enums';

const loginParams = ref<loginParams>({email:'',password:''});
const error = ref<string>('');
const iconType = ref<string>('pi pi-eye');
const passwordType = ref<string>('password');
const store = useStore();
const handleLogin = async() => { let result = store.dispatch(Actions.LOGIN_REQUEST, {
        email: loginParams.email,
        password: loginParams.password,
      });}
const passwordTypeChange = () =>{
     let result =changeType(passwordType.value,iconType.value);
        passwordType.value = result.passwordType;
        iconType.value = result.iconType;
}

</script>