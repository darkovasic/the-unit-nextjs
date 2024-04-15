import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ColorForm from "@/app/_components/ColorForm";

// Mock the createColor function
jest.mock("@/app/util/actions", () => ({
  createColor: jest
    .fn()
    .mockResolvedValue({ message: "Color created successfully" }),
}));

// Mock the useToast hook
const mockToast = jest.fn();
jest.mock("@/hooks/useToast", () => ({
  useToast: () => ({ toast: mockToast }),
}));

describe("ColorForm component", () => {
  it("Should submit form with color name and hex value", async () => {
    const { getByLabelText, getByText } = render(<ColorForm />);

    // Fill in color name
    fireEvent.change(getByLabelText("Name:"), {
      target: { value: "Test Color" },
    });

    // Fill in hex color value
    fireEvent.change(getByLabelText("Hex:"), { target: { value: "#abcdef" } });

    // Submit the form
    fireEvent.click(getByText("Submit Color"));

    await waitFor(() =>
      expect(mockToast).toHaveBeenCalledWith({
        description: "Color created successfully",
      })
    );
  });
});
