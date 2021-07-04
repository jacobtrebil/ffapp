import { PopupWidget } from 'react-calendly'
import { useState, useEffect } from 'react'
import { quizCalculations } from '../../apiClient/wizardFetch'
import { useRouter } from 'next/router'
import { InlineWidget } from "react-calendly";

export default function results() {
    const router = useRouter();
    const { quizId } = router.query;

    let [calculations, setCalculations] = useState({});

    useEffect(() => {
        doQuizCalculations();
      }, [quizId]);

      async function doQuizCalculations() {
        const quizFunction = await quizCalculations(quizId);
        setCalculations(quizFunction);
      }
    

    return(
        <div>
            <InlineWidget url="https://calendly.com/jacobtrebil/15min" />
            <PopupWidget text="Book a Discovery Call →" color="#00c247" url="https://calendly.com/jacobtrebil/15min" />
            <p>results</p>
        </div>
    )
}