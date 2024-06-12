<template>
    <div class="d-flex justify-content-center align-content-center w-100px">
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
                    <InputText type="password" v-model="loginParams.password" id="password"/>
                </div>
            </template>
            <template #footer>
                <div class="d-flex justify-content-start"></div>
                <div class="d-flex gap-3 mt-1 justify-content-end">
                    <Button label="Save" class="w-full rounded-4 w-50" severity="success" @click="handleLogin"/>
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
import loginRequest from './../services/authService';
import './../Interfaces/loginParams';

const loginParams = ref<loginParams>({email:'',password:''});
const error = ref<string>('')
const handleLogin = async() => { let result = await loginRequest(loginParams.value); error.value = result;}

</script>