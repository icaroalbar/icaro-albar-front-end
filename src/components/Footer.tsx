import { ReactElement } from "react";

export function Footer(): ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-body-primary text-text py-5 text-center">
      <p>&copy; Icaro Albar {currentYear} - Todos os direitos reservados</p>
    </footer>
  );
}
