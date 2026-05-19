export function horsesBlack(whereFrom, moveTo, board, setBoard) {
  if (
    whereFrom.piece !== "horses_black1" &&
    whereFrom.piece !== "horses_black2" &&
    whereFrom.piece !== "horses_white1" &&
    whereFrom.piece !== "horses_white2"
  ) {
    return true;
  }
  console.log("ход коня ");

  const col = whereFrom.col;
  const row = whereFrom.row;

  const f1 = row + 2;
  const f2 = col - 1;
  const hod1 = f1 + "-" + f2;

  const f3 = row + 2;
  const f4 = col + 1;
  const hod2 = f3 + "-" + f4;

  const f5 = row + 1;
  const f6 = col + 2;
  const hod3 = f5 + "-" + f6;

  const f7 = row - 1;
  const f8 = col + 2;
  const hod4 = f7 + "-" + f8;

  const f9 = row - 2;
  const f10 = col - 1;
  const hod5 = f9 + "-" + f10;

  const f11 = row - 2;
  const f12 = col + 1;
  const hod6 = f11 + "-" + f12;

  const f13 = row - 1;
  const f14 = col - 2;
  const hod7 = f13 + "-" + f14;

  const f15 = row + 1;
  const f16 = col - 2;
  const hod8 = f15 + "-" + f16;

  if (
    moveTo.id === hod1 ||
    moveTo.id === hod2 ||
    moveTo.id === hod3 ||
    moveTo.id === hod4 ||
    moveTo.id === hod5 ||
    moveTo.id === hod6 ||
    moveTo.id === hod7 ||
    moveTo.id === hod8
  ) {
    return true;
  }

  return false;
}
