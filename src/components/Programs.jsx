import { FaCrown } from 'react-icons/fa';
import Card from '../UI/Card';
import { programs } from '../data';
import SectionHeaders from './SectionHeaders';
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'
const Programs = () => {
  return (
    <section className='programs'>
      <div className="container programs-container">
        <div className="program_head">
          <SectionHeaders icon={<FaCrown />} title="Programs" />
          <div className="program-wrapper">
            {
              programs.map(({ id, icon, title, info, path }) => (
                <Card className="programs-program" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className='btn sm'>Learn more<AiFillCaretRight/></Link>
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
