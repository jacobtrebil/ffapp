import dbConnect from '../../../util/dbConnect';;
import Quiz from '../../../models/schema';
import financialHealthScore from '../../../calculations/financialHealthScore';

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                let quiz = await Quiz.findById(id);
                quiz.financialHealthScore = calculateFinancialHealthScore(quiz.currentIncome, plan.savings, plan.debt);
                await plan.save()
                res.status(200).json( quiz );
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