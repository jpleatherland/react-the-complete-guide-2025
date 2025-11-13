export default function TabButton(props: any) {
  const { children, clickHandler, isSelected } = props;

  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={clickHandler}>{children}</button>
    </li>
  );
}
