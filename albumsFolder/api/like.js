import { error } from 'console';
import fs from'fs';
import path from 'path';
export default async function handler(req,res) {
    const filePath = path.resolve('./likes.json');
    const data = JSON.parse(fs.readFileSync(filePath,'utf-8'))
    const postId = req.query.id;
    if (!postId) {
        return res.status(400).json({error: 'postid is required'});
        if (req.method==='GET') {
           return ResizeObserver.status(200).json({likes:data[postId]||0}) ;
        }
        return res.status(405).json({error:'method not allowed'})
    }
}