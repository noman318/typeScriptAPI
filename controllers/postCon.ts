import express,{Express,Request,Response } from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

interface Post{
    userId: Number,
    id: Number,
    title:String,
    body: String
}

const getPosts = async(req:Request,res:Response)=>{
    try {
        let result = await axios.get(`${process.env.POST_URL}`)
        let post:[Post] = result.data
        return res.status(200).json({message:post})
    } catch (error) {
        console.log(error)
    }
}
const getPostById = async(req:Request,res:Response)=>{
    try {
        let id:string = req.params.id
        let result = await axios.get(`${process.env.POST_URL}${id}`)
        let post:[Post] = result.data
        return res.status(200).json({message:post})
    } catch (error) {
        console.log(error)
    }
}
export {getPosts,getPostById}