

export const createQuiz = async (_quiz) => {
    const response = await fetch('/api/quizPost', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_quiz)
    })
    return await response.json();
  }

  export const updateQuiz = async (id, _quiz) => {
    const response = await fetch(`/api/updateQuiz/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_quiz)
    })
    return await response.json();
  }

  export const updateQuizTwo = async (id, _quiz) => {
    const response = await fetch(`/api/updateQuizTwo/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_quiz)
    })
    return await response.json();
  }

  export const updateQuizThree = async (id, _quiz) => {
    const response = await fetch(`/api/updateQuizThree/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_quiz)
    })
    return await response.json();
  }

  export const updateQuizFour = async (id, _quiz) => {
    const response = await fetch(`/api/updateQuizFour/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_quiz)
    })
    return await response.json();
  }

  export const updateQuizFive = async (id, _quiz) => {
    const response = await fetch(`/api/updateQuizFive/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_quiz)
    })
    return await response.json();
  }

  export const updateQuizSix = async (id, _quiz) => {
    const response = await fetch(`/api/updateQuizSix/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_quiz)
    })
    return await response.json();
  }

  export const quizCalculations = async (id, _quiz) => {
    const response = await fetch(`/api/quizCalculations/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_quiz)
    })
    return await response.json();
  }