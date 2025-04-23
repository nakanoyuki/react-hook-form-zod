import { AppTitle } from "@/app/components/AppTitle";
import { render, screen } from "@testing-library/react";


describe("AppTitle", () => {
  it("renders the title correctly", () => {
    render(<AppTitle />);
    const heading = screen.getByRole("heading", {
      name: /react-hook-form×zod/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("has the correct styles", () => {
    render(<AppTitle />);
    const heading = screen.getByRole("heading", {
      name: /react-hook-form×zod/i,
    });
    expect(heading).toHaveClass("text-3xl", "font-bold", "underline");
  });
});
