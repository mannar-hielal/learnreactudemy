export default function Tab({ children, buttons, buttonsContainer = "menu" }) {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {/* This is the tab contents */}
      {children}
    </>
  );
}
