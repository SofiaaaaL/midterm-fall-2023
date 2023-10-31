import Link from "next/link";

const Header = () => (
    <header>
        <h1>Paws & Punchlines: Canine Comedy Central</h1>
        <nav>
            <Link href="/joke/dog-a">Captain Underbite</Link>
            <Link href="/joke/dog-b">Hotdog</Link>
            <Link href="/joke/dog-c">Chewbacca</Link>
            <Link href="/joke/dog-d">Fluffernutter</Link>
        </nav>
    </header>
);

export default Header;

