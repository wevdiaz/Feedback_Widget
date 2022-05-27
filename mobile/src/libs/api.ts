import axios from "axios";
import dotEnv from "dotenv";

dotEnv.config();

export const api = axios.create({
    baseURL: process.env.BASEURL
});