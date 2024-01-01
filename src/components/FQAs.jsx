import React from 'react'
import FQA from './FQA'
import SectionHeaders from './SectionHeaders'
import { FaQuestion } from 'react-icons/fa'
import {Fqas} from '../data'
const FQAs=()=> {
  return (
    <section className="faqs">
        <div className='container faqs_container'>
            <SectionHeaders icon={<FaQuestion/>} title="FAQs"></SectionHeaders>
            <div className="faqs_wrapper">
                {
                    Fqas.map(({id,question,ans})=>{
                        return <FQA key={id} question={question} ans={ans}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FQAs