import Link from "next/link"

const Header = () => {
  return (
    <div>
       <Link href="/">Главная</Link>
       <Link href="/menu">Меню</Link>
       <Link href="/gallery">Галлерея</Link>
       <Link href="/booking">Забронировать</Link>
    </div>
  )
}

export default Header
