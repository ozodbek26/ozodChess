    import { moveValidator } from "../moveValidator";
    import { Check } from "./Check";

    function copyMove(board, from, to) {
        return board.map((cell) => {
            if (cell.id === from.id) {
                return { ...cell, piece: null, shapecolor: null, kto: null, img: null };
            }

            if (cell.id === to.id) {
                return {
                    ...cell,
                    piece: from.piece,
                    shapecolor: from.shapecolor,
                    kto: from.kto,
                    img: from.img,
                };
            }

            return cell;
        });
    }

    export function getBoardAfterMove(board, from, to) {
        return copyMove(board, from, to);
    }

    function hasLegalMove(board, color) {
        return board.some((from) => {
            if (!from.piece || from.shapecolor !== color) return false;

            return board.some((to) => {
                if (
                    to.id === from.id ||
                    to.shapecolor === color ||
                    to.kto === "KingWhite" ||
                    to.kto === "KingBlack"
                ) {
                    return false;
                }

                const moveResult = moveValidator(from, to, board, () => {});
                if (!moveResult) return false;

                const boardAfterMove = copyMove(board, from, to);
                return !Check(boardAfterMove, color);
            });
        });
    }

    export function isCheckmate(board, color) {
        return Check(board, color) && !hasLegalMove(board, color);
    }

    export function ChrckMate(board, color) {
        return isCheckmate(board, color);
    }
