import { useState } from 'react'
import { useRouter } from 'next/router'
import { updateQuizSix } from '../../apiClient/wizardFetch'
import { PopupWidget } from 'react-calendly'

export default function stepSeven() {
    const router = useRouter();
    const {quizId} = router.query;

    const [quiz, setQuiz] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState('');
    let [_quiz, _setQuiz] = useState('');

    function goToResults() {
        if(email.length === 0) {
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
        router.push(`/quiz/stepEight?quizId=${updatedQuiz._id}`)
    }

    function scrollOnError() {
        window.scrollTo(0, 0);
    }

    _quiz = { email };

    return(
        <div className="quizSection">
            <PopupWidget text="Book a Discovery Call →" color="#00c247" url="https://calendly.com/jacobtrebil/15min" />
            <div className="inputBox">
                <label>What is your email?</label><br></br>
                <input
                placeholder="a@aol.com"
                name="email"
                className="quizInput"
                onChange={e=> 
                    setEmail(e.target.value)
                    }
                ></input>
                <p className="errors">{errors}</p>
            </div>
            <button onClick={goToResults}>Get Results →</button>
        </div>
    )
}