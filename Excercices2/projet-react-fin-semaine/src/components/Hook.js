import Movie from './Movie';
import HookItem from './HookItem';
import './Hook.css';

function Hook(props) {
  let i = 0;// Forced to put this line otherwise it won't work
  return (
    <Movie className="hook">
      {/* for (let i of props) { */}
        <HookItem
          title={props.items[i].title}
          rating={props.items[i].rating}
          date={props.items[i].date}
        />
      {/* } */}
      <HookItem
          title={props.items[i+1].title}
          rating={props.items[i+1].rating}
          date={props.items[i+1].date}
        />
    </Movie>
  );
}

export default Hook;