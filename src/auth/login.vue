<template>
    <div class="row">
        <Card style="width: 25rem; overflow: hidden">
            <template #header>
                <!-- <img alt="user header" src="/images/usercard.png" /> -->
            </template>
            <template #title>Advanced Card</template>
            <template #subtitle>Card subtitle</template>
            <template #content>
                <div>
                    <InputText type="email" v-model="loginParams.email" />
                     <InputText type="password" v-model="loginParams.password" />
                </div>
            </template>
            <template #footer>
                <div class="flex gap-3 mt-1">
                    <Button label="Cancel" severity="secondary" outlined class="w-full" />
                    <Button label="Save" class="w-full" severity="success" @click="handleLogin"/>
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

const loginParams = ref<Array<loginParams>>([]);
const handleLogin = async() =>  await loginRequest(loginParams.value);

</script>