import * as core from "@actions/core";
import * as exec from "@actions/exec";
import * as path from "path";

async function run() {
  try {
    await exec.exec(path.join(__dirname, "setup-selenium.sh"));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
