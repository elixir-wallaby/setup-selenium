"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const exec = __importStar(require("@actions/exec"));
const path = __importStar(require("path"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(`##setup selenium`);
            const version = core.getInput("selenium-version", { required: true });
            const plat = process.platform;
            let arch = "linux";
            switch (plat) {
                case "win32":
                    arch = plat;
                    break;
                case "darwin":
                    arch = "mac64";
                    break;
                default:
                case "linux":
                    arch = "linux64";
            }
            yield exec.exec(path.join(__dirname, "setup-selenium.sh"), [
                version,
                arch
            ]);
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
