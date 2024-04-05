
import PropTypes from "prop-types";
import styles from "./calendar.module.css";
import calendar from "../../assets/img/calendar 1.png";

export const Calendar = () => {
  const currentDate = new Date(); 

  const formatDate = (date) => {
    // Define el formato deseado
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return date.toLocaleDateString("es-ES", options).split("/").join("."); 
  };

  return (
    <div className={styles.calendar}>
      <span className={styles.calendar__date}>{formatDate(currentDate)}</span>
      <img
        src={calendar}
        alt="Calendar Icon"
        className={styles.calendar__icon}
      />
    </div>
  );
};

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

