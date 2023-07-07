//! 컴포넌트
// React의 기본 단위
// 화면을 독립적인 부분으로 나눠서 재사용성을 높이고 관리를 용이하게 해줌
// class 컴포넌트 / function 컴포넌트

//! 컴포넌트 선언시 주의 사항
// 컴포넌트명의 첫글자는 '반드시' 대문자이어야 함
function TestComponent () {

  const itemList = ['첫번째', '두번째', '세번째', '네번째', '다섯번째'];
  const flag = 0;

  //! return 위치에 화면에 출력할 HTML 작성
  //! 컴포넌트 return 시 주의사항
  //! 반드시 하나의 요소만 반환

  // return에 작성하는 HTML 내부에서 JavaScript를 사용하고 싶으면
  // { } 내부에 작성함
  // 그 {} 내부에서 다시 HTML을 반환하고 싶으면 () 내부에 작성
  return (
    <div>
      {/* 화살표 함수 사용시 한줄 코드면 return 생략가능 ( {}도 같이 지워줘야됨 ) */}
      {itemList.map((item) => (<div>{item} 컴포넌트입니다.</div>))} 
      {flag ? (<div>TRUE</div>) : (<div>FALSE</div>)}
    </div>
  );
};

export default TestComponent;

//! export, export default
//! export : 한 페이지에서 여러개를 내보낼 때 사용
//! export default : 한 페이지에서 하나의 값을 기본값으로 내보낼 때 사용

export const testVariable = 10;
