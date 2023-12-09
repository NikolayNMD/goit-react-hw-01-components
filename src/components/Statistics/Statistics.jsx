import css from './Statistics.module.css';
import { getRandomHexColor } from 'utils/get-random-color';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title?.length > 0 && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
