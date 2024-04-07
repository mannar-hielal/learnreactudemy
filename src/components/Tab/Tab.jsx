export default function Tab({ children, buttons }) {
  return (
    <>
      <menu>{buttons}</menu>
     {/* This is the tab contents */}
      {children}
    </>
  );
}
