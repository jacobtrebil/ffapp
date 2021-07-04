import Quiz from '../../models/schema';
import dbConnect from '../../util/dbConnect';

    export default async function handler(req,res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                const { name } = req.body;
                const quiz = await Quiz.create( { name } )
                res.status(200).json( quiz );
            } catch (error) {
                res.status(400).json({});
            } 
            break
    }
}