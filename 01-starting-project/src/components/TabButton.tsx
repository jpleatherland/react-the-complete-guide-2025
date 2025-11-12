export default function TabButton(props: any) {
  const { children, clickHandler } = props;

  return (
    <li>
      <button onClick={clickHandler}>{children}</button>
    </li>
  );
}
