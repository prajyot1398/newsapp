import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="mt-5 text-center">
        <h5 className={`text-dark`}>&copy; {new Date().getFullYear()}: Made By Prajyot Jadhav</h5>
        <h6 className={`text-dark`}><a href="https://github.com/prajyot1398/newsapp" target={'_blank'} rel="noreferrer">Github</a></h6>
      </footer>
    </div>
  )
}