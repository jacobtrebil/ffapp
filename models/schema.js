const mongoose = require('mongoose');

var QuizModel = new mongoose.Schema({
    name: String,
    currentIncome: Number, 
    savings: Number, String,
    debt: Number,
    retirementAge: Number,
    phoneNumber: Number,
    email: String, 
    financialHealthScore: String, Number, 
    currentAge: Number,
    currentSavings: Number, 
});

module.exports = mongoose.models.Quiz || mongoose.model("Quiz", QuizModel);