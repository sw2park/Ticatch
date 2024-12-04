function TabList({ children, onClick }) {
  return (
    <li>
      <button className="mypage-menu-subtitle" onClick={onClick}>{children}</button>
    </li>
  );
}

export default TabList;