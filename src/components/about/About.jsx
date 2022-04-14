import './about.css'
import Ptg from '../../img/Koala.jpg'

export const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Ptg} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About me</h1>
                <p className="a-sub">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, beatae.</p>
                <p className="a-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus repellat fuga explicabo hic repellendus sunt in quasi iste aliquam? Minima, quos ea.</p>
                <div className="a-award">
                    <img src={Ptg} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Lorem ipsum dolor sit</h4>
                        <p className="a-award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dolores!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
