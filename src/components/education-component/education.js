import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import './education-styles.css'

//----------------------------- Icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import SchoolIcon from '@material-ui/icons/School';
import AssignmentIcon from '@material-ui/icons/Assignment';

export default function Education() {
    return (
        <main className='content'>
            <Toolbar />

            <div className='presentation'>
                <div className='titles'>
                    <h1>Education</h1>
                    <h2>Yagel Salazar Reyes</h2>
                    <div className='social'>
                        <a href='https://linkedin.com/in/yagel-salazar-reyes-bb58a7197' target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize='large'></LinkedInIcon></a>
                        <a href='https://github.com/YagelSalazar' target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize='large'></GitHubIcon></a>
                        <a href='https://twitter.com/YagelSalazar' target="_blank" rel="noopener noreferrer"><TwitterIcon fontSize='large'></TwitterIcon></a>
                    </div>
                </div>
            </div>

            <div className='achievements'>
                <h2>Education <SchoolIcon></SchoolIcon></h2>
                <ul>
                    <li>
                        <h3>INSTITUTO TECNOLÓGICO SUPERIOR DEL OCCIDENTE DEL ESTADO DE HIDALGO, MIXQUIAHUALA DE JUÁREZ, HIDALGO</h3>
                        Ing. en Tecnologías de la Información y Comunicaciones
                    </li>
                    <li>
                        <h3>CENTRO DE BACHILLERATO TECNOLÓGICO INDUSTRIAL Y DE SERVICIOS NO.83 “PEDRO MARÍA ANAYA”, ACTOPAN, HIDAGO</h3>
                        Programación
                    </li>
                    <li>
                        <h3>ACADEMLO. SANTIAGO DE QUERÉTARO, QUERÉTARO</h3>
                        Desarrollo Web Full-Stack y Ciencias de la computación
                    </li>
                </ul>
            </div>

            <div className='achievements'>
                <h2>CERTIFICATES AND DIPLOMAS <AssignmentIcon></AssignmentIcon></h2>
                <ul>
                    <li>Member of the 2013-2016 generation of the career "Técnico en Programación" - CBTis 83.</li>
                    <li>Accreditation of skills in Microsoft technologies (EIA980615PXA-0013) (2014).</li>
                    <li>Participation in the course “Diseña tu propia página web en 1 día desde 0” by SoftMotion (2018).</li>
                    <li>3rd Place in the Latin American Innovation Rally (2017).</li>
                    <li>3rd Place in the Latin American Innovation Rally (2019).</li>
                    <li>Certification CISCO CCNA1 (2018).</li>
                    <li>Certification in the English language provided by planetenglish (personal english for all) (2018).</li>
                    <li>Participation in the course “programming course with python.” by IIMAP (2020).</li>
                </ul>
            </div>

        </main>
    );
}