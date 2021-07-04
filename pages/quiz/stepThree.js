import { useState } from 'react'
import { useRouter } from 'next/router'
import { updateQuizTwo } from '../../apiClient/wizardFetch'
import { PopupWidget } from 'react-calendly'

export default function stepThree() {
    const router = useRouter();
    const {quizId} = router.query;

    const [quiz, setQuiz] = useState('');
    const [errors, setErrors] = useState('');
    const [savings, setSavings] = useState('');
    let [_quiz, _setQuiz] = useState('');

    function goToStepFour() {
        if(savings.length === 0) {
            setErrors('*This field is required')
            scrollOnError();
        } else {
            updateQuizTwoApi(_quiz);
        }
    }

    async function updateQuizTwoApi(_quiz) {
        const updatedQuiz = await updateQuizTwo(quizId, _quiz);
        setQuiz(updatedQuiz);
        setErrors('')
        router.push(`/quiz/stepFour?quizId=${updatedQuiz._id}`)
    }

    function scrollOnError() {
        window.scrollTo(0, 0);
    }

    _quiz = { savings };

    return(
        <div className="quizSection">
            <PopupWidget text="Book a Discovery Call →" color="#00c247" url="https://calendly.com/jacobtrebil/15min" />
            <div className="inputBox">
                <label>How much do you have in savings & assets?</label><br></br>
                <input
                placeholder="$100,000"
                name="savings"
                className="quizInput"
                onChange={e=> 
                    setSavings(e.target.value)
                    }
                ></input>
                <p className="errors">{errors}</p>
            </div>
            <button onClick={goToStepFour}>Next Step →</button>
        </div>
    )
}