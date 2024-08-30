"use client";

import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
  web3FromSource,
} from "@polkadot/extension-dapp";
import { useState } from "react";

export default function Home() {
  const [accounts, setAccounts] = useState<any[]>([]);

  const connect = async () => {
    // this call fires up the authorization popup
    const extensions = await web3Enable("MandalaHub");
    const extension = await web3FromSource("talisman");

    // if (extensions.length === 0) {
    //   console.log("====================================");
    //   console.log("NO WALLET");
    //   console.log("====================================");
    //   // no extension installed, or the user did not accept the authorization
    //   // in this case we should inform the use and give a link to the extension
    //   return;
    // }

    console.log("====================================");
    console.log("DATA 0 ---> ", JSON.stringify(extension));
    // console.log("DATA 1 ---> ", JSON.stringify(extensions));
    // console.log("DATA 1 ---> ", JSON.stringify(extensions[1]));
    console.log("====================================");

    // we are now informed that the user has at least one extension and that we
    // will be able to show and use accounts
    const allAccounts = await web3Accounts();

    setAccounts(allAccounts);

    console.log("====================================");
    console.log("DATA ---->>>> ", allAccounts);
    console.log("====================================");
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <button
        className="bg-blue-500 p-4"
        onClick={async () => {
          connect();
        }}
      >
        POLKADOTJS WALLET
      </button>

      <p className="text-white">{JSON.stringify(accounts)}</p>
    </main>
  );
}
