import { posts } from 'data'

export default async function handler(req, res ) {
    const {postId} = req.query;
    const selectedPost = posts.result.find(x => x.id === postId)
    const { id, title, date, description } = selectedPost;
    res.status(200).json({id, title, date, description})
}