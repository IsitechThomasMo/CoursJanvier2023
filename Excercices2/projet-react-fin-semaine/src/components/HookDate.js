import './HookDate.css';

function HookDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="hook-date">
      <div className="hook-date__month">{month}</div>
      <div className="hook-date__year">{year}</div>
      <div className="hook-date__day">{day}</div>
    </div>
  );
}

export default HookDate;
