"use client";

import { Card } from "./components/card";
import { styled } from "./index.css";
import { GoCommentDiscussion } from "react-icons/go";

const mockData = [
  { title: "title1", date: "2023年8月3日（木）7:00pm" },
  { title: "title2", date: "2023年8月3日（木）8:00pm" },
  { title: "title3", date: "2023年8月3日（木）9:00pm" },
];

export function Talk() {
  return (
    <div>
      <div className={styled.titleWrapper}>
        <h2 style={{ fontSize: 22 }}>予定されているトーク</h2>
        <button>トーク追加</button>
      </div>
      <div className={styled.cardWrapper}>
        {mockData.map((item, index) => (
          <Card key={index.toString()} title={item.title} date={item.date} />
        ))}
      </div>
    </div>
  );
}
