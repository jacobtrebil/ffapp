import Quiz from '../../../models/schema'
import dbConnect from '../../../util/dbConnect'

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'PUT':
            try {
                const quiz = await Quiz.findOne({ _id: id })
                const { currentIncome } = req.body
                await Quiz.updateOne({ _id: id}, { currentIncome })
                const quiz2 = await Quiz.findById(id)
                res.status(200).json( quiz2 )
                return;
            } catch (error) {
                console.log(error)
                res.status(400).json()
                return;
            }
            default:
            res.status(400).json()
            break
    }
}