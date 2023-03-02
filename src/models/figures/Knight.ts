import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
import blackLogo from "../../assets/knight-black.png"
import whiteLogo from "../../assets/knight-white.png"

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KNIGHT;
    }

    canMove(target: Cell) : boolean {
        if(!super.canMove(target))
            return false
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
    }
}