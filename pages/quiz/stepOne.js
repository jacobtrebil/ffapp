import { useState } from 'react'
import { useRouter } from 'next/router'
import { createQuiz } from '../../apiClient/wizardFetch'
import { PopupWidget } from 'react-calendly'

export default function stepOne({}) {
    const router = useRouter();

    const [quiz, setQuiz] = useState({});
    const [errors, setErrors] = useState('');
    const [name, setName] = useState('');

    async function quizPostApi(_quiz) {
        const createdQuiz = await createQuiz(_quiz);
        setQuiz(createdQuiz);
        setErrors('')
        router.push(`/quiz/stepTwo?quizId=${createdQuiz._id}`)
    }

    function goToStepTwo() {
        if(name.length === 0) {
            setErrors('*This field is required')
            scrollOnError();
        } else {
            quizPostApi(_quiz);
        }
    }

    function scrollOnError() {
        window.scrollTo(0, 0);
    }

    const _quiz = { name };

    return(
        <div className="quizSection">
            <PopupWidget text="Book a Discovery Call →" color="#00c247" url="https://calendly.com/jacobtrebil/15min" />
            <div className="inputBox">
                <label>What is your full name?</label><br></br>
                <input
                placeholder="Your name"
                name="name"
                className="quizInput"
                onChange={e=> 
                    setName(e.target.value)
                    }
                ></input>
                <p className="errors">{errors}</p>
            </div>
            <button onClick={goToStepTwo}>Next Step →</button>
        </div>
    )
}