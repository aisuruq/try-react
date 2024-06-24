import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  A11y } from 'swiper/modules';
import photo1 from '../images/photo1.jpeg';
import photo2 from '../images/photo2.jpeg';
import photo3 from '../images/photo3.jpeg';
import photo4 from '../images/photo4.jpeg';
import photo5 from '../images/photo5.jpeg';

import 'swiper/css';
import 'swiper/css/navigation';
export function MusicBlock(){

    const musicBlockRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visibleMusicBlock');
                } else {
                    entry.target.classList.remove('visibleMusicBlock');
                }
            });
        });

        if (musicBlockRef.current) {
            observer.observe(musicBlockRef.current);
        }

        return () => {
            if (musicBlockRef.current) {
                observer.unobserve(musicBlockRef.current);
            }
        };
    }, []);
    

    return ( 
      
        <section id="MusicBlock" ref={musicBlockRef} className="hiddenMusicBlock">
            <div className="musicBlock">
                <h2>Почему так важно слушать классическую музыку?</h2>
                <div className="swiperContainer">
                    <Swiper
                
                        modules={[Navigation,A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                    <SwiperSlide className='blockMusicBlock'>
                            <h4>Развитие интеллекта и концентрации</h4>
                            <img src={photo1} alt='photo1'/>
                            <p>Исследования показывают, что классическая музыка может улучшать когнитивные функции, внимание и память. Слушание сложных музыкальных произведений стимулирует мозг и способствует развитию аналитических способностей.</p>
                    </SwiperSlide>
                    <SwiperSlide className='blockMusicBlock'>
                            <h4>Снижение уровня стресса и улучшение настроения</h4>
                            <img src={photo2} alt='photo2'/>
                            <p>Классическая музыка оказывает успокаивающее воздействие на нервную систему. Она помогает снижать уровень стресса и тревожности, улучшает настроение и способствует релаксации.</p>
                    </SwiperSlide>
                    <SwiperSlide className='blockMusicBlock'>
                            <h4>Эстетическое удовольствие и эмоциональное обогащение</h4>
                            <img src={photo3} alt='photo3'/>
                            <p>Классическая музыка обладает глубокой эмоциональной и художественной ценностью. Она может вызывать широкий спектр эмоций, от радости до печали, и обогащать внутренний мир слушателя.</p>
                    </SwiperSlide>
                    <SwiperSlide className='blockMusicBlock'>
                            <h4>Улучшение сна и релаксации</h4>
                            <img src={photo4} alt='photo4'/>
                            <p>Многие классические произведения обладают успокаивающим эффектом, что делает их идеальными для прослушивания перед сном. Они помогают расслабиться и улучшить качество сна.</p>
                    </SwiperSlide>
                    <SwiperSlide className='blockMusicBlock'>
                            <h4>Расширение культурного кругозора</h4>
                            <img src={photo5} alt='photo5'/>
                            <p>Классическая музыка является важной частью мирового культурного наследия. Знакомство с произведениями великих композиторов помогает лучше понимать историю и культуру различных эпох и народов, развивает эстетический вкус.</p>
                    </SwiperSlide>
                    
                    </Swiper>
                    
                </div>
            </div>
       </section>
    )
}