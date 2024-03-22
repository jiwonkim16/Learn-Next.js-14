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
// client component와 server component에 대해 알아야 한다.

// 그 전에 먼저, CSR 과 SSR의 차이, 즉 next.js가 application을 render 하는 방식을 이해해야 한다.
// 여기서 렌더링이란 next.js가 내 react component를 가져와서 브라우저가 이해할 수 있는 html로 변환하는 것을 말한다.

// 먼저 CSR 방식에 대해 알아보면
// 만약 Create-react-app을 사용해서 react 만으로 어플리케이션을 생성하면 그건 client side application이 된다.
// 리액트는 사용자 브라우저인 client 단에서 모든 렌더링 작업을 수행해야 한다.
// 즉, 클라이언트가 사용자 브라우저에 UI를 구축해야 하는 것이다. 이후 클라이언트는 자바스크립트를 로드하고 그 후에야 자바스크립트가 UI를 빌드한다.
// 이 방식의 단점으로는 페이지의 실제 소스코드를 보면 비어있는 것을 알 수 있다.
// 즉, 유저가 이 페이지에 도착한 시점에는 비어있는 상태이다가 브라우저의 자바스크립트 엔진에 의해 모든 자바스크립트 파일을 다운로드하고 실행한 후에야 화면이 보여진다.
// 그래서 브라우저가 모든 자바스크립트 파일을 다운로드하고 실행하기 전까지 사용자는 비어있는 화면을 보게 된다.
// 만약 내가 통신상태가 좋지 않은 곳에서 페이지에 접속한다고 하면 그만큼 비어있는 흰 화면을 보는 시간이 길어질 것이다.
// 두번째로는 SEO 검색 엔진 최적화 부분에서 단점이 있다. 예를 들어 구글 검색엔진은 페이지의 HTML을 보는데 CSR 방식으로 만들어진 페이지는
// HTML이 비어있기 때문에 검색엔진에 걸리기 쉽지 않다.

// 이번엔 next.js로 웹사이트를 빌드한다면 자동적으로 sever side rendering이 된다.
// 페이지의 소스코드를 보면 페이지의 내용들(div, nav 등)이 모두 실제로 브라우저 코드에 있는 것을 볼 수 있다.
// 이건 브라우저가 자바스크립트를 로드할 때까지 기다릴 필요가 없다는 것을 의미한다.
// 왜냐하면 이미 화면에 표시할 HTML을 갖고 있기 때문이다.
// 즉, 자바스크립트가 활성화되어 있지 않아도 사용자가 HTML을 볼 수 있게 되는 것이다.
// 반드시 기억해야 할 것은 next.js 어플리케이션의 모든 page 안의 모든 component들은 next.js가 그것들을 우선 server에서 render 한다는 것이다.
// 예를들어 사용자가 /about-us에 접속한면 사용자에게 어떠한 HTML을 주기 전에, next.js는 server 즉, 백엔드에서 어플리케이션을 render 한다.
// next.js는 모든 컴포넌트를 render해서 그 HTML을 가지고 그걸 브라우저 request에 대한 response로 줄 것이다.
// 그래서 사용자가 페이지에 접속해도 비어있는 HTML을 보지 않고 next.js가 백엔드에서 생성한 HTML을 보게 될 것이다.
// 즉, 자바스크립트가 없어도 HTML로 구성되어 있는 페이지를 보고 있을 수 있다는 것이다.
// 적어도 최초 어플리케이션의 UI 빌드에서는 자바스크립트에 의존하지 않는 것이다.
// 하나 기억해야 할 것은 이것이 client component이건 server component이건 간에 모든 컴포넌트에서 발생한다는 것이다.
// use client가 작성되어 있더라도 server side rendering 이 일어난다.

//