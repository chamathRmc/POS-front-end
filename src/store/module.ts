import { createStore } from "vuex";
import AuthModule from "./modules/AuthModule";


const module = createStore({
    modules:{
        AuthModule,
    }
});

export default module;