import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './aboutMe-styles.css'
import PorfilePhoto from '../../res/porfile.jpg'

//----------------------------- Icons
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import PublicIcon from '@material-ui/icons/Public';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function AboutMe() {
    return (
        <main className='content'>
            <Toolbar />

            <div className='presentation'>
                <div className='titles'>
                    <h1>Yagel Salazar Reyes</h1>
                    <h2>Web Developer</h2>
                    <div className='social'>
                        <a href='https://linkedin.com/in/yagel-salazar-reyes-bb58a7197' target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize='large'></LinkedInIcon></a>
                        <a href='https://github.com/YagelSalazar' target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize='large'></GitHubIcon></a>
                        <a href='https://twitter.com/YagelSalazar' target="_blank" rel="noopener noreferrer"><TwitterIcon fontSize='large'></TwitterIcon></a>
                    </div>
                </div>
                <img src={PorfilePhoto} className='porfilePhoto' alt='Yagel Salazar Reyes' />
            </div>

            <div className='personalData'>
                <div className='detail'>
                    <div className='headData'>
                        <RecordVoiceOverIcon />
                        <h3>Languages:</h3>
                    </div>
                    <ul>
                        <li>Spanish: Native</li>
                        <li>English: Advanced</li>
                    </ul>
                </div>
                <div className='detail'>
                    <div className='headData'>
                        <PublicIcon />
                        <h3>Nationality:</h3>
                    </div>
                    <ul>
                        <li>Mexican</li>
                    </ul>
                </div>
                <div className='detail'>
                    <div className='headData'>
                        <HomeIcon />
                        <h3>Address:</h3>
                    </div>
                    <ul>
                        <li>Calle Independencia 146, <br /> Colonia Centro, San Salvador, Hidalgo</li>
                    </ul>
                </div>
            </div>

            <Typography paragraph>
                Hello, my name is Yagel and I'm a proactive person who is allways learning
                new ways to solve problems and new technologies at the development world.
            </Typography>

            <Typography paragraph>
                I have experience working within the programming world participating in
                projects related to mobile apps, augmented reality with unity 3d, and web
                apps. Currently I specialize in web development as a web developer.
            </Typography>

            <Typography paragraph>
                Check out this simple presentation I prepared if you are interested in hiring me or
                contacting me, I'll answer you as soon as posible.
            </Typography>
        </main>
    );
}