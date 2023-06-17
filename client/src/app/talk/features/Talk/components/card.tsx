import style from "./card.module.scss";

type Props = {
  title: string;
  date: string;
};

export function Card(props: Props) {
  return (
    <div className={style.cardItem}>
      <article>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
      </article>
    </div>
  );
}
