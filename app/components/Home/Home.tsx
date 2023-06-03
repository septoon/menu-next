import Link from "next/link";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1 className="welcoming">
          Добро пожаловать в ресторан <span className="restaurant-name">"Нелли"</span>
        </h1>
        <blockquote>
        <p className="cursive">"Полный желудок равен хорошему настроению, а пустой — унынию и ссорам."

- Джоан Роулинг</p>
        </blockquote>
        <div className="grid-items">
          <p className="grid-item">
            <Link href="/menu" className="link">Меню</Link>
          </p>
          <p className="grid-item">
            <Link href="/booking" className="link">Забронировать столик</Link>
          </p>
        </div>
      </div>
    </div>
  );};

export default Home