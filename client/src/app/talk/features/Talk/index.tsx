import { Card } from "./components/card";
import style from "./index.module.scss";
import { GoCommentDiscussion } from "react-icons/go";

const mockData = [
  { title: "Denoに追加されたKVについて話そう", date: "2023年8月3日（木）7:00pm" },
  { title: "Denoに追加されたKVについて話そう2", date: "2023年8月3日（木）8:00pm" },
  { title: "Denoに追加されたKVについて話そう3", date: "2023年8月3日（木）9:00pm" },
];

export function Talk() {
  return (
    <div>
      <h2 style={{ fontSize: 22 }}>予定されているトーク</h2>
      <div className={style.cardWrapper}>
        {mockData.map((item, index) => (
          <Card key={index.toString()} title={item.title} date={item.date} />
        ))}
      </div>
    </div>
  );
}
