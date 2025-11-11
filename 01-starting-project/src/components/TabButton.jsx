export default function TabButton(props) {
  const { children } = props;
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}
