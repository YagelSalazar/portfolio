import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import './projects-styles.css'

//----------------------------- Icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

//----------------------------- Project Images
import TaskManager from '../../res/task-manager.png'
import PriedraPapelTijera from '../../res/piedra-papel-tijera.png'
import Buntiapp from '../../res/buntiapp.png'
import LoL from '../../res/lolKioru.png'
import MERN from '../../res/mernTasks.png'
import DD from '../../res/ddManufacture.png'
import BrounieAndroid from '../../res/pruebaBrounieAndroid.png'
import AccScreens from '../../res/acc-screens.png'
import Resume from '../../res/resume.png'

export default function Projects() {
    return (
        <main className='content'>
            <Toolbar />

            <div className='presentation'>
                <div className='titles'>
                    <h1>Public Projects</h1>
                    <h2>Yagel Salazar Reyes</h2>
                    <div className='social'>
                        <a href='https://linkedin.com/in/yagel-salazar-reyes-bb58a7197' target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize='large'></LinkedInIcon></a>
                        <a href='https://github.com/YagelSalazar' target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize='large'></GitHubIcon></a>
                        <a href='https://twitter.com/YagelSalazar' target="_blank" rel="noopener noreferrer"><TwitterIcon fontSize='large'></TwitterIcon></a>
                    </div>
                </div>
            </div>

            <div className='projects-content'>
                <a href='https://github.com/YagelSalazar/portfolio' target="_blank" rel="noopener noreferrer">
                    <div className='card'>
                        <h3>Web Resume (Portfolio)</h3>
                        <img src={Resume} alt='GitHub tasks project' />
                        <p>A ReactJS presentation made to share with everyone.</p>
                    </div>
                </a>
                <a href='https://github.com/YagelSalazar/tasks-manager/tree/master/tasks-manager' target="_blank" rel="noopener noreferrer">
                    <div className='card'>
                        <h3>Task Manager</h3>
                        <img src={TaskManager} alt='GitHub tasks project' />
                        <p>An agenda developed with React and Firebase.</p>
                    </div>
                </a>
                <a href='https://github.com/YagelSalazar/PiedraPapelTijera' target="_blank" rel="noopener noreferrer">
                    <div className='card'>
                        <h3>Piedra Papel Tijera</h3>
                        <img src={PriedraPapelTijera} alt='GitHub game project' />
                        <p>A simple game created with CSS, HTML and JS.</p>
                    </div>
                </a>
                <a href='https://github.com/YagelSalazar/pantallas' target="_blank" rel="noopener noreferrer">
                    <div className='card'>
                        <h3>ACC MEX - Displays</h3>
                        <img src={AccScreens} alt='GitHub tasks project' />
                        <p>A web aplication to control projects into acc mex.</p>
                    </div>
                </a>
                <a href='https://github.com/ActoSoft/buntiAppMobile' target="_blank" rel="noopener noreferrer">
                    <div className='card'>
                        <h3>BuntiApp</h3>
                        <img src={Buntiapp} alt='GitHub tasks project' />
                        <p>A rides app related to the public transportation.</p>
                    </div>
                </a>
                <a href='https://github.com/YagelSalazar/LigueOfLegends-Prueba-KIORU' target="_blank" rel="noopener noreferrer">
                    <div className='card'>
                        <h3>LOL - Catalogue</h3>
                        <img src={LoL} alt='GitHub tasks project' />
                        <p>A simple example of a catalogue using the LOL api.</p>
                    </div>
                </a>
                <a href='https://github.com/YagelSalazar/DDManufacture' target="_blank" rel="noopener noreferrer">
                    <div className='card'>
                        <h3>DD+ Homepage</h3>
                        <img src={DD} alt='GitHub tasks project' />
                        <p>A websitie developed for DD+ Manufacture S.A. DE C.V.</p>
                    </div>
                </a>
                <a href='https://github.com/YagelSalazar/PuebaBrounieAndroid' target="_blank" rel="noopener noreferrer">
                    <div className='card'>
                        <h3>UsersBrounieApp</h3>
                        <img src={BrounieAndroid} alt='GitHub tasks project' />
                        <p>A crud app mobile built using ListViews.</p>
                    </div>
                </a>
                <a href='https://github.com/YagelSalazar/MERN-Tasks' target="_blank" rel="noopener noreferrer">
                    <div className='card'>
                        <h3>MERN Tasks</h3>
                        <img src={MERN} alt='GitHub tasks project' />
                        <p>An simple web aplication made with the stack MERN.</p>
                    </div>
                </a>
            </div>


        </main>
    );
}