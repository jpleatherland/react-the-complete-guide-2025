export default function TabButton(props: any) {
  const { children, isSelected, ...rest } = props;

  return (
    <li>
      <button className={isSelected ? 'active' : ''} {...rest}>{children}</button>
    </li>
  );
}
