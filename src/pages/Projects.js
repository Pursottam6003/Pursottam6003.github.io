import React from 'react'
// import Calculator from '../images/calculator.webp'
// import DesktopAssistent from '../images/assistent.png'
// import BakewithLove from '../images/bakeWithLove.jpg'
// import Encourager from '../images/Discord-bot.png'
// import ToDoList from '../images/todolist.webp'
// import TypingGame from '../images/typingmbl.png'
// import BankManagement from '../images/bank.png'
// import RockPaperScissor from '../images/rock_paper_ssr.webp'
import CardComponent from './CardComponent'

export const Projects = () => {
    return (
        <>
            <div className="ProjectExperience reveal" id="myprojects">
                    <img src="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-project-project-management-itim2101-flat-itim2101-1.png"
                        id="projecticon" alt="exper" />
                <h2>My Projects</h2>
                <div className="ani">
                    <div className="bar"></div>
                </div>
                <br />
                <br />
                <br />
                <CardComponent/>
            </div>

            <div className='viewBlogs'>
                View More
            </div>
        </>
    )
}
