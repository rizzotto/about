import ProgressBar from '../../components/ProgressBar/index'
import portuguese from '../../assets/portuguese.svg'
import english from '../../assets/english.svg'
import german from '../../assets/german.svg'
import italian from '../../assets/italian.svg'

export default function Languages() {
    return (
        <>
        <div className="language">
            <img src={portuguese} height={50} width={50}/>
            <ProgressBar percent={100} symbol="🇧🇷" color="#6DA544 " />
        </div>
        <div className="language">
            <img src={english} height={50} width={50}/>
            <ProgressBar percent={100} symbol="🇺🇸" color="#0052B4" />
        </div>
        <div className="language">
            <img src={german} height={50} width={50}/>
            <ProgressBar percent={50} symbol="🇩🇪" color="#000" />
        </div>
        <div className="language">
            <img src={italian} height={50} width={50}/>
            <ProgressBar percent={25} symbol="🇮🇹" color="#D80027" />
        </div>
        </>
    )
}