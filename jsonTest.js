"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const think_game_1 = require("think-game");
class GameErrorCode {
}
GameErrorCode.ERROR_UNIMPLEMENTED = [1001, think_game_1._("ERROR_UNIMPLEMENTED")];
exports.GameErrorCode = GameErrorCode;
//# sourceMappingURL=GameErrorCode.js.map
console.info(GameErrorCode.ERROR_UNIMPLEMENTED)
class TT{
    constructor()
    {
        this.id = 9
        this.er = 2
        this.guideList = '' //null会出现，undefine都不会出现
        this.guideList2 = undefined
    }
}
let t = new TT()
let jsonStr = JSON.stringify(t)
console.info(jsonStr)
let objData = JSON.parse(jsonStr)
console.info(objData)