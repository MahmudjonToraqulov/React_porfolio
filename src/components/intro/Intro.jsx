import './intro.css'
import Me from '../../img/man1.png'

export const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello my name is </h2>
                    <h1 className='i-name'>Makhmoodjan Torakulov</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className='i-title-item'>Web development</div>
                            <div className='i-title-item'>Frontend developer</div>
                            <div className='i-title-item'>Responsive design</div>
                            <div className='i-title-item'>React </div>
                            <div className='i-title-item'>Javascript  </div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae pariatur, ad modi nesciunt tempore reiciendis cum corporis facere nemo asperiores! Illum?
                    </p>
                </div>
            </div>
            <div className="i-right">
                <img src={Me} alt="" className="i-img" style={{ zIndex: '1111' }} />
                <div className="i-bg"></div>
            </div>
        </div>
    )
}
