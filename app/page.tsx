import Link from "next/link"

const Home = () => {
  return (
    <main>
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
    </main>
  )
}

export default Home
