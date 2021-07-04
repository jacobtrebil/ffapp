import { useState } from 'react'
import { useRouter } from 'next/router'
import { updateQuizFive } from '../../apiClient/wizardFetch'
import { PopupWidget } from 'react-calendly'

export default function stepSix() {
    const router = useRouter();
    const {quizId} = router.query;

    const [quiz, setQuiz] = useState('');
    const [errors, setErrors] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    let [_quiz, _setQuiz] = useState('');

    function goToStepSeven() {
        if(phoneNumber.length === 0) {
            setErrors('*This field is required')
            scrollOnError();
        } else {
            updateQuizFiveApi(_quiz);
        }
    }

    async function updateQuizFiveApi(_quiz) {
        const updatedQuiz = await updateQuizFive(quizId, _quiz);
        setQuiz(updatedQuiz);
        setErrors('')
        router.push(`/quiz/stepSeven?quizId=${updatedQuiz._id}`)
    }

    function scrollOnError() {
        window.scrollTo(0, 0);
    }

    _quiz = { phoneNumber };

    return(
        <div className="quizSection">
            <PopupWidget text="Book a Discovery Call →" color="#00c247" url="https://calendly.com/jacobtrebil/15min" />
            <div className="inputBox">
                <label>What is your phone number</label><br></br>
                <input
                placeholder="(612)-000-000"
                name="phoneNumber"
                className="quizInput"
                onChange={e=> 
                    setPhoneNumber(e.target.value)
                    }
                ></input>
                <p className="errors">{errors}</p>
            </div>
            <button onClick={goToStepSeven}>Next Step →</button>
        </div>
    )
}