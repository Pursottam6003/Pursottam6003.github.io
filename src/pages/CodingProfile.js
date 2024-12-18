import React from 'react'
import LinkIcon from '../images/link.svg'
import Hackerrank from '../images/coding/hackerank.svg'
import gfg from '../images/coding/gfg.svg'
import leetcode from '../images/coding/leetcode.svg'
import codechef from '../images/coding/codechef.svg'
import codingIcon from '../images/coding/codingIcon.svg'

const Coding =({companyName,logosrc,userName,desc})=>{
    return (
        <>
            <div style={{display: "flex",alignTtems: "center",gap: "15px"}}>
                <div className='companyLogo'>
                <img style={{width:"50px" ,height:"50px"}} src={logosrc}/>
                </div>   

                <div className='details'>
                    <div className='company'>{companyName}<span><a href={userName} target="_blank"><img src={LinkIcon}/></a></span></div>
                    <div className='Brief'>{desc}</div>
                </div> 
            </div>
        </>
    )
}

const CodingProfile = () => {

    const MyCoding = [
        {companyName:"LeetCode", logosrc:leetcode,userName:"https://www.leetcode.com/rahulsah6003/",desc:"750+ Problems"},
        {companyName:"GeeksForGeeks", logosrc:gfg,userName:"https://auth.geeksforgeeks.org/user/rahulsah6003",desc:"700+ Problems 7th in College"},
        {companyName:"HackerRank", logosrc:Hackerrank,userName:"",desc:"300+ Problems"},
        {companyName:"CodeChef", logosrc:codechef,userName:"https://www.codechef.com/users/rahulsah6003",desc:"250+ Problems"},
        {companyName:"CodeForces", logosrc:"https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-codeforces-programming-competitions-and-contests-programming-community-logo-color-tal-revivo.png",userName:"https://codeforces.com/profile/pursottam",desc:"200+ Problems"},
    ]
  return (
    <>
        <div>
        <h1 style={{display:"flex",justifyContent:"center",fontFamily:"monospace"}} >Coding Profiles 
        <img src={codingIcon} width={30} ></img>
        </h1>
            <div className="CodingProfile reveal">
                {MyCoding.map(val =>{
                    return <Coding key={val.desc} {...val} />
                })}
            </div>     

        </div>
    </>
  )
}

export default CodingProfile