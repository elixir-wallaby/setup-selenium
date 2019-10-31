import * as core from "@actions/core";
import * as exec from "@actions/exec";
import * as path from "path";

async function run() {
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
    await exec.exec(path.join(__dirname, "setup-selenium.sh"), [
      version,
      arch
    ]);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
