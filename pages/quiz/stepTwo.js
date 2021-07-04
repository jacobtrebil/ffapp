import { useState } from 'react'
import { useRouter } from 'next/router'
import { updateQuiz } from '../../apiClient/wizardFetch'
import { PopupWidget } from 'react-calendly'

export default function stepTwo() {
    const router = useRouter();
    const {quizId} = router.query;

    const [quiz, setQuiz] = useState('');
    const [currentIncome, setCurrentIncome] = useState('');
    const [errors, setErrors] = useState('');
    let [_quiz, _setQuiz] = useState('');

    function goToStepThree() {
        if(currentIncome.length === 0) {
            setErrors('*This field is required')
            scrollOnError();
        } else {
            updateQuizApi(_quiz);
        }
    }

    async function updateQuizApi(_quiz) {
        const updatedQuiz = await updateQuiz(quizId, _quiz);
        setQuiz(updatedQuiz);
        setErrors('')
        router.push(`/quiz/stepThree?quizId=${updatedQuiz._id}`)
    }

    function scrollOnError() {
        window.scrollTo(0, 0);
    }

    _quiz = { currentIncome };

    return(
        <div className="quizSection">
            <PopupWidget text="Book a Discovery Call →" color="#00c247" url="https://calendly.com/jacobtrebil/15min" />
            <div className="inputBox">
                <label>How much do you currently make per year?</label><br></br>
                <input
                placeholder="$50,000"
                name="currentIncome"
                className="quizInput"
                onChange={e=> 
                    setCurrentIncome(e.target.value)
                    }
                ></input>
                <p className="errors">{errors}</p>
            </div>
            <button onClick={goToStepThree}>Next Step →</button>
        </div>
    )
}