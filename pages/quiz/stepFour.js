import { useState } from 'react'
import { useRouter } from 'next/router'
import { updateQuizThree } from '../../apiClient/wizardFetch'
import { PopupWidget } from 'react-calendly'

export default function stepFour() {
    const router = useRouter();
    const {quizId} = router.query;

    const [quiz, setQuiz] = useState('');
    const [debt, setDebt] = useState('');
    const [errors, setErrors] = useState('');
    let [_quiz, _setQuiz] = useState('');

    function goToStepFive() {
        if(debt.length === 0) {
            setErrors('*This field is required')
            scrollOnError();
        } else {
            updateQuizThreeApi(_quiz)
        }
    }

    async function updateQuizThreeApi(_quiz) {
        const updatedQuiz = await updateQuizThree(planId, _quiz);
        setQuiz(updatedQuiz);
        setErrors('')
        router.push(`/quiz/stepFive?quizId=${updatedQuiz._id}`)
    }

    function scrollOnError() {
        window.scrollTo(0, 0);
    }

    _quiz = { debt };

    return(
        <div className="quizSection">
            <PopupWidget text="Book a Discovery Call →" color="#00c247" url="https://calendly.com/jacobtrebil/15min" />
            <div className="inputBox">
                <label>How much debt do you have?</label><br></br>
                <input
                placeholder="$10,000"
                name="debt"
                className="quizInput"
                onChange={e=> 
                    setDebt(e.target.value)
                    }
                ></input>
                <p className="errors">{errors}</p>
            </div>
            <button onClick={goToStepFive}>Next Step →</button>
        </div>
    )
}