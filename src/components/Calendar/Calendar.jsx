
import PropTypes from "prop-types";

export const Calendar = ({ date }) => {
  
  const formatDate = (date) => {
    const options = { day: "numeric", month: "numeric", yÑear: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="diary-date-calendar">
      {/* Mostrar la fecha formateada */}
      <span>{formatDate(date)}</span>
    </div>
  );
};


Calendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired, 
};


