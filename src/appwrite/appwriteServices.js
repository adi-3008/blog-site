import { Client, Databases, ID, Query, Storage } from "appwrite";
import config from "../config/config";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(config.APPWRITE_URL)
            .setProject(config.APPWRITE_PROJECT_ID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_COLLECTION_ID,
                slug,
                {
                    title, 
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch(error){
            console.log(error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_COLLECTION_ID,
                slug,
                {
                    title, 
                    content,
                    featuredImage,
                    status,
                }
            )
        }catch(error){
            console.log(error);
        }
    }
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_COLLECTION_ID,
                slug
            )
            return true;
        }catch(error){
            console.log(error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return this.databases.getDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_COLLECTION_ID,
                slug
            )
        } catch (error) {
            return false;
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return this.databases.listDocuments(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_COLLECTION_ID,
                queries
            )
        } catch (error) {
            return false;
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            )            
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.APPWRITE_BUCKET_ID,
                fileId
            )
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.APPWRITE_BUCKET_ID,
            fileId
        )
    }
}

const service = new Service();

export default service;