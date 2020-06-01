import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import './skills-styles.css'

//----------------------------- Icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import WorkIcon from '@material-ui/icons/Work';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CodeIcon from '@material-ui/icons/Code';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';

export default function Skills() {
    return (
        <main className='content'>
            <Toolbar />

            <div className='presentation'>
                <div className='titles'>
                    <h1>Skills</h1>
                    <h2>Yagel Salazar Reyes</h2>
                    <div className='social'>
                        <a href='https://linkedin.com/in/yagel-salazar-reyes-bb58a7197' target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize='large'></LinkedInIcon></a>
                        <a href='https://github.com/YagelSalazar' target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize='large'></GitHubIcon></a>
                        <a href='https://twitter.com/YagelSalazar' target="_blank" rel="noopener noreferrer"><TwitterIcon fontSize='large'></TwitterIcon></a>
                    </div>
                </div>
            </div>

            <div className='achievements'>
                <h2>Professional experience <WorkIcon></WorkIcon></h2>
                <ul>
                    <li>
                        <h3>Actosoft. Actopan, Hidalgo</h3>
                        July - 2019
                    </li>
                    <li>
                        <h3>Brounie. Santiago de Querétaro, Querétaro</h3>
                        January - 2020
                    </li>
                    <li>
                        <h3>ACC MEX. Santiago de Querétaro, Querétaro</h3>
                        January - 2020
                    </li>
                </ul>
            </div>

            <div className='achievements'>
                <h2>Achievements <AssignmentTurnedInIcon></AssignmentTurnedInIcon></h2>
                <ul>
                    <li>Development of a Mobile Application for CicloPet "Ecoguardianes".</li>
                    <li>Development of a Web System for the administration of the purchasing
                        process for the Instituto Tecnológico Superior del Occidente del Estado de Hidalgo (ITSOEH).</li>
                    <li>Development of Mobile Application "BuntiApp" by ActoSoft.</li>
                    <li>Development of Mobile Application "Plano Firme" (client) by Brounie.</li>
                    <li>Development of Web Application "Plano Firme" (admin) by Brounie.</li>
                    <li>Development of Web Application "web project control system" by ACC MEX.</li>
                </ul>
            </div>

            <div className='skillsData'>
                <div className='languajes'>
                    <h2>Programming languages <CodeIcon></CodeIcon></h2>
                    <div className='technology'>
                        <h3>JavaScript</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>TypeScript</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>C#</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>C</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                            <RadioButtonUncheckedIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>C++</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>Java</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>Fortran</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                            <RadioButtonUncheckedIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>Python</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>PHP</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>Kotlin</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                </div>
                <div className='software'>
                    <h2>Software <DeveloperBoardIcon></DeveloperBoardIcon></h2>
                    <div className='technology'>
                        <h3>ReactJS</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>Express</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>Codeigniter</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>MongoDB</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>Firebase</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>Git</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>Handlebars</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>Unity 3d</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                            <RadioButtonUncheckedIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                    <div className='technology'>
                        <h3>Android Studio</h3>
                        <div className='grade'>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <FiberManualRecordIcon/>
                            <RadioButtonUncheckedIcon/>
                            <RadioButtonUncheckedIcon/>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}