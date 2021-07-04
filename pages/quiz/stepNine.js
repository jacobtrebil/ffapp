import { useState } from 'react'
import { useRouter } from 'next/router'
import { updateQuizSix } from '../../apiClient/wizardFetch'
import { PopupWidget } from 'react-calendly'

export default function stepSeven() {
    const router = useRouter();
    const {quizId} = router.query;

    const [quiz, setQuiz] = useState('');
    const [currentSavings, setCurrentSavings] = useState('');
    const [errors, setErrors] = useState('');
    let [_quiz, _setQuiz] = useState('');

    function goToResults() {
        if(currentSavings.length === 0) {
            setErrors('*This field is required')
            scrollOnError();
        } else {
            updateQuizSixApi(_quiz);
        }
    }

    async function updateQuizSixApi(_quiz) {
        const updatedQuiz = await updateQuizSix(quizId, _quiz);
        setQuiz(updatedQuiz);
        setErrors('')
        router.push(`/quiz/results?quizId=${updatedQuiz._id}`)
    }

    function scrollOnError() {
        window.scrollTo(0, 0);
    }

    _quiz = { email };

    return(
        <div className="quizSection">
            <PopupWidget text="Book a Discovery Call →" color="#00c247" url="https://calendly.com/jacobtrebil/15min" />
            <div className="inputBox">
                <label>How much do you save or invest per year?</label><br></br>
                <input
                placeholder="a@aol.com"
                name="currentSavings"
                className="quizInput"
                onChange={e=> 
                    setcurrentSavings(e.target.value)
                    }
                ></input>
                <p className="errors">{errors}</p>
            </div>
            <button onClick={goToResults}>Get Results →</button>
        </div>
    )
}