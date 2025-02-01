import React from 'react'
import Card from '../card/page'
import crm from "./images/crmm.jpg"
import Devfux from "./images/devfux.jpg"
import burger from "./images/burger.jpg"
import realstate from "./images/realstate.jpg"
import hyber from "./images/hyber.jpg"
const Project = () => {
    const data = [
      {title: "Devfux" ,
        desc: "I worked on a real project for Devfux Agency using Next.js and Tailwind CSS , express.js and mongodb (if you need to login as admin url/admin/login {admin@example.com , adminadmin12}) It's fully responsive on all devices, and the agency builds websites for clients. I learned a lot about working with JWT, cookies, and authentication ",
        image: Devfux,
        github: "https://github.com/Abdallah-Wael10/devfux-frontend",
        live: "https://devfux-frontend.vercel.app/"
        },
        {title: "Mini CRM" ,
        desc: "I worked on a real CRM project for a car protection company using Next.js and CSS. It helped me understand how a CRM works, how it supports sales teams, and streamlines company processes. I also made sure its fully responsive across all devices.",
        image: crm,
        github: "https://github.com/Abdallah-Wael10/front-end-crm",
        live: "https://github.com/Abdallah-Wael10/front-end-crm"
        },
      
        {title: "Burger Maker" ,
        desc: "I worked on a Burger Maker app using pure JavaScript, and it’s fully responsive on phones. I created it to strengthen my JavaScript skills as much as possible. It helped me understand the DOM, BOM, and JavaScript basics more deeply. ",
        image: burger,
        github: "https://github.com/Abdallah-Wael10/Burger-Maker-Javascript",
        live: "https://burger-maker-pure-javascriptt-ewx5eic13.vercel.app/"
        },
        {title: " Realstate Landing page" ,
        desc: "I created a real estate landing page using Next.js and Tailwind CSS. The page is simple yet effective, featuring a dedicated [advertising] section to showcase promotions. It's a clean and functional design tailored for property listings ",
        image: realstate,
        github: "https://github.com/Abdallah-Wael10/Burger-Maker-Javascript",
        live: "https://burger-maker-pure-javascriptt-ewx5eic13.vercel.app/"
        },
        {title: "Hyber Auto" ,
        desc: "I worked on Hyper Auto, a platform built with Next.js and CSS for a company that buys and sells cars. It features a well-designed, responsive dashboard and was my first real project, giving me hands-on experience with creating functional and user-friendly applications ",
        image: hyber,
        github: "https://www.behance.net/gallery/210065397/Hyber-Auto-Website-UX-UI-Design-(Real-project)?tracking_source=search_projects|hyber+auto&l=1",
        live: "https://www.behance.net/gallery/210065397/Hyber-Auto-Website-UX-UI-Design-(Real-project)?tracking_source=search_projects|hyber+auto&l=1"
        },
        
        
    ]
  return (
    <div id='projects' className='w-full h-max pb-3 flex flex-col justify-center items-center bg-white'>
      <h1 className='w-full h-[90px] text-[36px] text-[#5AA7FF] font-semibold text-center'>Projects</h1>
      <div className=' container flex flex-wrap h-max justify-center items-center gap-8 '>
       {data.map((e)=>(
        <Card key={e.title} title={e.title} desc={e.desc} image={e.image} githubb={e.github} livee={e.live} />
       ))}
      </div>
    </div>
  )
}

export default Project
