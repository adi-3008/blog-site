import { Account, Client, ID } from "appwrite";
import config from "../config/config";

export class AuthService {

    client = new Client();

    account;

    constructor(){
        this.client
            .setEndpoint(config.APPWRITE_URL)
            .setProject(config.APPWRITE_PROJECT_ID);
        this.account = new Account(this.client);
    }

    async createUserAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if(userAccount){
                // call another method
                return this.login({email, password});
            }else{
                return userAccount;
            }
        } catch (error){
            console.log(error);
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password);
        }catch(error){
            console.log(error);
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        } catch(error){
            console.log(error);
            return false;
        }
    }

    async logout(){
        try{
            await this.account.deleteSessions();
        }catch(error){
            console.log(error);
        }
    }

}

const authService = new AuthService();

export default authService;