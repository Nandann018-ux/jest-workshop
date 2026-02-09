const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("check subtotal data type",()=>{
  expect(() => calculateFinalAmount("100", "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("check for invalid coupon",()=>{ 
  expect(() => calculateFinalAmount(100, "INVALID")).toThrow(
    "Invalid Coupon",);
});

test("check uppercase coupon",()=>{
  expect(calculateFinalAmount(100,"save10")).toBe(90);
});

test("check for flat50 coupon",()=>{
  expect(calculateFinalAmount(100,"FLAT50")).toBe(50);
});


