import HookDate from './HookDate';
import Movie from './Movie';
import './HookItem.css';

function HookItem(props) {
  return (
    <Movie className='hook-item'>
      <HookDate date={props.date} />
      <div className='hook-item__description'>
        <h2>{props.title}</h2>
        <div className='hook-item__rating'>{props.rating}/10</div>
      </div>
    </Movie>
  );
}

export default HookItem;