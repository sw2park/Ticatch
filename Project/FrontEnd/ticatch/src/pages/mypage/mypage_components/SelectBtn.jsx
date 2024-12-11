export default function SelectBtn({
  handleClick,
  isSelected,
  children,
  elementidx,
}) {
  return (
    <button
      onClick={() => {
        handleClick(elementidx);
      }}
      isSelected={isSelected}
      className={`confirm-menu-select-button ${isSelected ? 'active' : undefined}`}
    >
      {children}
    </button>
  );
}
