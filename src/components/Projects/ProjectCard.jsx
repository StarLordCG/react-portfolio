import React from 'react'
import { useState } from 'react';

import { ProjectModal } from '../Modals/ProjectModal/ProjectModal';

import { getImageUrl } from '../../utils';

import styles from './ProjectCard.module.css';

export const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source, tools, images}}) => {
    const [isModalOpened, setisModalOpened] = useState(false);
    console.log('isModalOpened', isModalOpened);

    return (
        <div>
            <ProjectModal 
                className={styles.projectModal} 
                isOpened={isModalOpened} 
                onClose={ () => setisModalOpened(false) }
                details={{title, description, skills, tools, images}}
            />
            <div 
                className={styles.container}
                onClick={ () => setisModalOpened(!isModalOpened) }
            >
                <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <ul className={styles.skills}>
                    {
                        skills.map( (skill, id) => {
                            return <li className={styles.skill} key={id}>{skill}</li>
                        } )
                    }
                </ul>
                <div className={styles.links}>
                    <a className={styles.link}>See details</a>
                </div>
            </div>
        </div>
  )
}
