import { Bioryhythm } from "./Bioryhythm";

it("caluclates the physical biorhythm", () => {
  const biorhythms = Bioryhythm("1999-12-31", "2022-12-31");
  expect(biorhythms.physical).toBeCloseTo(0.9977);
});

it("caluclates the emotional biorhythm", () => {
  const biorhythms = Bioryhythm("1999-12-31", "2022-12-31");
  expect(biorhythms.emotional).toBeCloseTo(0.2225);
});

it("caluclates the intellectual biorhythm", () => {
  const biorhythms = Bioryhythm("1999-12-31", "2022-12-31");
  expect(biorhythms.intellectual).toBeCloseTo(-0.4582);
});
