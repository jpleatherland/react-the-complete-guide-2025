export default function TabButton(props: any) {
  const { children } = props;

  function handleClick() {
    console.log('Clicked');
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
