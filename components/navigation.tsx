"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About-us</Link>
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

// 네비게이션 바에서 각 페이지로 이동하려면 어떻게 해야할까?
// a 태그를 써도 되지만 Next.js 프레임워크의 네비게이션 기능을 이용하기 위해
// Link라는 컴포넌트를 사용할 것이다. Link는 next/link에서 import 해온다.
// 그리고 Link는 반드시 href 속성을 가진다.

// 만약 네비게이션 요소에 내가 현재 위치하고 있는 페이지면 이모지를 추가하고 싶다면 어떻게 해야할까? (about-us 페이지에 있다면 about-us 텍스트 옆에 이모지 추가)
// Next.js는 url에 관한 정보를 알려주는 Hook이 있다.
// 그 Hook은 usePathname 이라는 hook이다.
// usePathnam은 유저가 현재 머물고 있는 url을 알려준다.
// 그런데 usePathname 의 값을 콘솔에 찍으려고 하니 에러가 발생했는데 에러 내용인 즉,
// usePathname은 오직 client Component에서만 동작하며, 이를 위해 use client 라는 문구를 파일 상단에 추가해야 한다고 한다.
// 에러 코드에서 알려준 것처럼 use client 문구를 추가하니 정상적으로 동작한다. 이에 각 리스트에 해당하는 url에 내가 위치하고 있다면 이모지를 추가하게끔 코드를 작성했다.

// 그런데 client component 가 무엇이고 왜 use client 를 추가하니 정상적으로 동작하는지에 대해 알기 위해서는
// client component와 server component의 차이를 알아야 한다.
