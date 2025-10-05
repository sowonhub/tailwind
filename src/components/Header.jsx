export default function Header() {
  return (
    <header className="flex justify-between items-center p-[10px_20px] bg-black">
      <h2>OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-[20px] list-none">
        <li className="font-normal text-sm">로그인</li>
        <li className="font-normal text-sm">회원가입</li>
        <li className="font-normal text-sm">내클래스</li>
      </ul>
    </header>
  );
}
