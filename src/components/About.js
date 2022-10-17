import React from 'react'

export default function About(props) {
  return (
    <div className='container text-center my-5'>
      <p className={`text-dark`}>
      This news app fetches the news from newsapi.org. Quick daily news with different categories.<br/>
      If you are interested in news, business, politics, health, science, technology, entertainment and sports, TillNow is for you. <br/>
        This Website Is Made Using React With ❤ By Prajyot Jadhav. <br/> 
        This Is Built While Learning React.<br/>
        Please Let Me Know Your Feedbacks&nbsp;
        <a href={`mailto:prajyot13.98@gmail.com?subject=TillNow`}>Here</a>.
      </p>
    </div>
  )
}
