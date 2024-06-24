import React, { useState } from 'react';
import pause from '../images/iconPause.png';
import play from '../images/iconPlayAboutUs.png';
import pianoImg from '../images/piano.jpg';
import ReactPlayer from 'react-player';
import piano from '../video/PianoAudio.mp4';


export function VideoBlock() {
    const [showVideo, setShowVideo] = useState(false);

    const handleButtonClick = () => {
        setShowVideo(!showVideo);
    };

    return (
        <section id="VideoBlock">
            <div className="backVideoBlock"></div>
            <div className="aboutUs">
                <h2>Amelie</h2>
                <p>
                    Это видео на YouTube под названием  <span>"4 Beautiful Soundtracks | Relaxing Piano [10min]"</span> представляет собой сборник из четырех фортепианных саундтреков, созданных для расслабления. Видео демонстрирует успокаивающие и мелодичные фортепианные композиции, идеально подходящие для отдыха, учебы или просто наслаждения мирным моментом. Каждый саундтрек тщательно выбран, чтобы обеспечить приятное аудио-впечатление, улучшая умственную ясность и эмоциональное спокойствие. Видео идеально подходит для фоновой музыки во время работы или отдыха, способствуя релаксации и умиротворению. Наслаждайтесь десятью минутами красивой, расслабляющей фортепианной музыки с этой продуманной подборкой.
                </p>
                <div className="videoAboutUs">
                    <div className="video">
                        {showVideo ? (
                            <ReactPlayer 
                                width="100%"
                                height="100%"
                                className="ReactPlayer"
                                url={piano}
                                playing
                                controls={true}
                            />
                        ) : (
                            <img src={pianoImg} alt="pianoImg" className="pianoImg" />
                        )}
                        <button onClick={handleButtonClick} className="playButton">
                            {showVideo ? <img src={pause} className='imgButtons pause'/> : <img src={play} className='imgButtons'/>}
                            {showVideo ? 'Остановить видео' : `Посмотреть ролик`}
                          
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

