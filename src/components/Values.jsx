import React from 'react'
import Image from '../images/values.png'
import SectionHeaders from './SectionHeaders'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'
const Values = () => {
  return (
   <section className='values'>
    <div className="container values_container">
        <div className="values_left">
        <div className="values_image">
            <img src={Image} alt="Values Image" />
        </div>
        </div>
        <div className="values_right">

<SectionHeaders icon={<GiCutDiamond/>} title="values"/>
    
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cum et quisquam autem nisi provident maiores labore fugiat quibusdam? Quam autem molestiae repellendus corporis nemo nesciunt commodi itaque, sed sint.</p>
     <div className='values_wrapper'>
        {
            values.map(({id,icon,title,desc})=>{
                return <Card key={id} className="Values_values">
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <small>{desc}</small>
                </Card>

            })
        }
        </div>  
      </div>
    </div>
     </section>
  )
}

export default Values
