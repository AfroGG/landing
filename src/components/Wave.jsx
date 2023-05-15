import w1 from '../assets/images/w1.png';
import w2 from '../assets/images/w2.png';
import w3 from '../assets/images/w3.png';
import w4 from '../assets/images/w4.png';

function Wave() {
  return (
      <div className="bg-dark pt-20">
        <img className="mx-auto animate-pulse" src={w1} />
        <img className="mx-auto animate-pulse -mt-10" src={w2} />
        <img className="mx-auto animate-pulse -mt-20" src={w3} />
        <img className="mx-auto animate-pulse -mt-32" src={w4} />
      </div>
  )
}

export default Wave;
