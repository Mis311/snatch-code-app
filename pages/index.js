import { Fragment } from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <Fragment>
        <ul className="row">
          <li>
            <Link href="/login">My First Post</Link>
          </li>
          <li>
            <Link href="/mypage">My First Post</Link>
          </li>
          <li>
            <Link href="#">My First Post</Link>
          </li>
          <li>
            <Link href="#">My First Post</Link>
          </li>
          <li>
            <Link href="/raffle">My Raffle</Link>
          </li>
        </ul>
      </Fragment>
    </div>
  );
}
