import { FaFacebook, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaTelegram } from 'react-icons/fa';


export default function Contact() {
  return (
    <>
      <div className="icons-main">
        <div className="icons">
          <a href="https://www.linkedin.com" target="_blank"
            rel="noopener noreferrer" className='icon'>
            <div className="icon-div">
              <FaLinkedin className='icon-img' />
              <h3 className='icon-name'>LinkedIn</h3>
            </div>
          </a>
          <a href="https://www.github.com" target="_blank"
            rel="noopener noreferrer" className='icon'>
            <div className="icon-div">
              <FaGithub className='icon-img' />
              <h3 className='icon-name'>GitHub</h3>
            </div>
          </a>
          <a href="https://www.facebook.com" target="_blank"
            rel="noopener noreferrer" className='icon'>
            <div className="icon-div">
              <FaFacebook className='icon-img' />
              <h3 className='icon-name'>FaceBook</h3>
            </div>
          </a>
          <a href="https://www.gmail.com" target="_blank"
            rel="noopener noreferrer" className='icon'>
            <div className="icon-div">
              <FaEnvelope className='icon-img' />
              <h3 className='icon-name'>Gmail</h3>
            </div>
          </a>
          <a href="https://www.Twitter.com" target="_blank"
            rel="noopener noreferrer" className='icon'>
            <div className="icon-div">
              <FaTwitter className='icon-img' />
              <h3 className='icon-name'>Twitter</h3>
            </div>
          </a>
          <a href="https://www.telegram.com" target="_blank"
            rel="noopener noreferrer" className='icon'>
            <div className="icon-div">
              <FaTelegram className='icon-img' />
              <h3 className='icon-name'>Telegram</h3>
            </div>
          </a>
        </div >
      </div>
    </>
  )
}