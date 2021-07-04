import { useState } from 'react'
import { useRouter } from 'next/router'
import { updateQuizFour } from '../../apiClient/wizardFetch'
import { PopupWidget } from 'react-calendly'

export default function stepFive() {
    const router = useRouter();
    const {quizId} = router.query;

    const [quiz, setQuiz] = useState('');
    const [errors, setErrors] = useState('');
    const [retirementAge, setRetirementAge] = useState('');
    let [_quiz, _setQuiz] = useState('');

    function goToStepSix() {
        if(retirementAge.length === 0) {
            setErrors('*This field is required')
            scrollOnError();
        } else {
            updateQuizFourApi(_quiz);
        }
    }

    async function updateQuizFourApi(_quiz) {
        const updatedQuiz = await updateQuizFour(quizId, _quiz);
        setQuiz(updatedQuiz);
        setErrors('');
        router.push(`/quiz/stepSix?planId=${updatedQuiz._id}`)
    }

    function scrollOnError() {
        window.scrollTo(0, 0);
    }

    _quiz = { retirementAge };

    return(
        <div className="quizSection">
            <PopupWidget text="Book a Discovery Call →" color="#00c247" url="https://calendly.com/jacobtrebil/15min" />
            <div className="inputBox">
                <label>When would you like to retire?</label><br></br>
                <input
                placeholder="60"
                name="retirementAge"
                className="quizInput"
                onChange={e=> 
                    setRetirementAge(e.target.value)
                    }
                ></input>
                <p className="errors">{errors}</p>
            </div>
            <button onClick={goToStepSix}>Next Step →</button>
        </div>
    )
}