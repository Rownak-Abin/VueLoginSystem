import {defineStore} from 'pinia';
import {ref, reactive} from 'vue';
import { useRouter } from 'vue-router';

const authStore = defineStore('auth', () => {
    const router = useRouter();
    const LoginMSG = ref("");
    const isAuthenticated = ref(false);
    const passwordMsg = ref("");
    const RegiSuccessMsg = ref("");
    
    function Login(emailx, passwordx) {
        const LoginData = localStorage.getItem('registerObject');
        const jsonString = JSON.parse(LoginData);
        if(jsonString.email === emailx && jsonString.password === passwordx) {
            isAuthenticated.value = true;
            router.push('/dashboard');
        }
        else{
            LoginMSG.value = "Wrong credentials";
        }
    }

    function matchPassword(password, confirmPassword){
        if(password != confirmPassword){
            passwordMsg.value = "Password do not match";
        }else{
            passwordMsg.value = "";
        }
    }

    function setRegisterObject(registerObject){
        const jsonString = JSON.stringify(registerObject);
        localStorage.setItem('registerObject', jsonString);
        RegiSuccessMsg.value = "Registered Successfully";
    }

    function logout(){
        localStorage.setItem('registerObject', null);
        router.push('/');
    }

        return {isAuthenticated, LoginMSG, Login, matchPassword, setRegisterObject, passwordMsg, RegiSuccessMsg,logout}
    }
)

export {authStore}