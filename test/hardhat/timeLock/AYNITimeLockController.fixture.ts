import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { AYNITimelockController } from "../../../types";
import { helperConfigFixture } from "../shared/HelperConfig.fixture";

export async function ayniTimelockControllerFixture(): Promise<{
    ayniTimelock: AYNITimelockController,
}> {

  const { ayniTimelock} = await loadFixture(helperConfigFixture);

  return { ayniTimelock };
}
