import React from 'react'
import hp from '../../assets/hp.svg'
import ages from '../../assets/ages.svg'
import './styles.scss'

export default function Trajectory() {
    return(
        <div>
            <div className="trajectory">
                <img src={ages} height={50} width={50} />
                <div className="place"><a className="link" target="_blank" href="http://www.ages.pucrs.br/">AGES</a> I,II and III</div>
            </div>
            <div className="trajectory">
                <img src={hp} height={50} width={50} />
                <div className="place">Software Innovation laboratory - 2018/19</div>
            </div>
            {/* <div className="line"/> */}
            <div className="trajectory">
                <img src={hp} height={50} width={50} />
                <div className="place">R&D Intern - 2020</div>
            </div>
        </div>
    )
}