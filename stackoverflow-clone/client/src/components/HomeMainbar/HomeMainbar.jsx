import React from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import { useSelector} from 'react-redux'
import QuestionList from './QuestionList'
import './HomeMainbar.css'

const HomeMainbar = () => {

  const navigate = useNavigate()
  const user = 1;
  const questionsList = useSelector(state => state.questionsReducer)
 // console.log(questionsList)
  // var questionsList = [{ 
  //       _id: 1,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 2,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["java", "node js", "react js", "mongo db", "express js"],
  //       userPosted: "mano",
  //       userId: 1,
  //       askedOn: "jan 1",  
  //       answer: [{
  //         answerBody: "Answer",
  //         userAnswered: 'kumar',
  //         answeredOn: "jan 2",
  //         userId: 2,
  //     }]  
  //   },{ 
  //       _id: 2,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 0,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "mano",
  //       userId: 1,
  //       askedOn: "jan 1",
  //       answer: [{
  //                 answerBody: "Answer",
  //                 userAnswered: 'kumar',
  //                 answeredOn: "jan 2",
  //                 userId: 2,
  //             }]
  //   },{ 
  //       _id: 3,
  //       votes: 2,
  //       noOfAnswers: 0,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "mano",
  //       userId: 1,
  //       askedOn: "jan 1",
  //       answer: [{
  //         answerBody: "Answer",
  //         userAnswered: 'kumar',
  //         answeredOn: "jan 2",
  //         userId: 2,
  //     }]
  //   }]



    const checkAuth = () =>{
      if(user === null){
        alert("login or signup to ask a question")
        navigate('/Auth')
      }else{
        navigate('/AskQuestion')
      }
    }

    const location = useLocation()
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button to='/AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Questions</button>
      </div>
      <div >
        {
          questionsList.data === null ?
          <h1>Loading....</h1> : 
          <>
            <p>{ questionsList.data.length} questions</p>
            
             <QuestionList questionsList={questionsList.data}/>
              
              
            
          </>
        }
      </div>
      
    </div>
  )
}

export default HomeMainbar;