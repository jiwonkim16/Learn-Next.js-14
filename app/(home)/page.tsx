export const metadata = {
  title: "Home",
};

function Page() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default Page;

// 기존 React-Router-Dom 을 사용해서 라우팅을 했을 땐
//  / ----> <Home />
// /about-us ----> <AboutUs />
// /movies:id  -----> <Movie />
// 이런 식이엇으나 Next.js에서는 url을 직접 적어줄 필요가 없이
// 파일 시스템을 통해서 url을 표현할 것이다.
// app 폴더 안에 있는 page, layout 파일을 root segment라고 부른다.
// 왜냐면 이것이 유저가 제일 먼저 root("/")에서 보게 될 페이지이기 때문이다.
// 만약 내가 about-us라는 페이지를 만들고 싶다면
// app 폴더 안에 about-us 라는 이름으로 폴더를 하나 만들어주면 된다.
// about-us라는 폴더를 생성함으로서 나는 Next.js에게 이 폴더명이 잠재적으로 하나의 페이지가 될 수 있다고 알려주는 것이다.
// 그래서 /about-us 로 이동하면 404 에러가 발생하는데 이유는 렌더링할 UI가 없기 때문이다.
// 이를 위해 새로 만든 폴더 안에 page.tsx 파일을 만들고 내용을 작성해주고 나면 정상적으로 동작한다.

// 그렇다면 이번엔 /about-us/company/sales 라는 경로의 페이지를 만들고 싶다면 어떻게 하면 될까?
// 이를 위해 app -> about-us -> company 라는 폴더를 만들고 그 안에 다시 sales라는 폴더를 만든다음
// sales 폴더 안에 page.tsx 파일을 만들어주면 된다!
// 이때 만약 /about-us/company 까지만 접근한다고 한다면 404에러가 발생할 것이다.
// 이유는 page 파일이 없기 때문이다. 즉, 위 예시에서 company는 단순히 경로의 일부분일 뿐이라는 것이다.
// 즉, page 가 없는 경로는 페이지가 아니라 경로의 일부분이다!!

// 그렇다면 app 폴더에 page, layout 외에 다른 파일을 넣어도 될까?
// 정답은 '그럴 수 있다' 이다.
// 왜냐면 page 라는 파일을 만들지 않는 이상 실제 경로에 포함되지도 렌더링되지도 않기 때문이다. 그렇기 때문에 권장하지는 않는다.
// 즉, page 라는 파일을 갖고 있지 않으면 url이 될 수 없다. 단순히 컴포넌트에 불과해진다. 그래서 url을 정의하는 app 폴더 안에
// 컴포넌트 관련 폴더를 만드는 것은 권장하진 않지만 가능은 하다!

// --------------------------------------------------

// not-found.tsx
// app 폴더의 root 경로에 위 이름의 파일을 만들어주면
// 페이지를 찾을 수 없을 경우 위 파일의 UI가 렌더링 된다.
// not-found 또한 page, layout 과 같이 특별한 파일명이다.
//
