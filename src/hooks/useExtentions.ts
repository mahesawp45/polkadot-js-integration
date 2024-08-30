// import type { ApiPromise } from "@polkadot/api";
// import type { InjectedExtension } from "@polkadot/extension-inject/types";
// import { web3Accounts } from "@polkadot/extension-dapp";
// import { cryptoWaitReady } from "@polkadot/util-crypto";
// // import { LOCAL_STORAGE } from "src/config/localStorage";

// import { keyring } from "@polkadot/ui-keyring";
// import { isTestChain } from "@polkadot/util";
// import { getInjectedExtensions } from "./helper/wallet";
// import { useState } from "react";

// interface InjectedAccountExt {
//   address: string;
//   meta: {
//     name: string;
//     source: string;
//     whenCreated: number;
//   };
// }

// const loadAccounts = async (api: ApiPromise) => {
//   await cryptoWaitReady();
//   const [systemChain, injectedAccounts] = await Promise.all([
//     api.rpc.system.chain() as any,
//     web3Accounts().then((accounts): InjectedAccountExt[] =>
//       accounts.map(
//         ({ address, meta }, whenCreated): InjectedAccountExt => ({
//           address,
//           meta: {
//             ...meta,
//             name: `${meta.name} (
//               ${meta.source === "polkadot-js" ? "extension" : meta.source})`,
//             whenCreated,
//           },
//         })
//       )
//     ),
//   ]);

//   const isDevelopment = isTestChain(
//     systemChain ? systemChain.toString() : "<unknown>"
//   );

//   return {
//     isDevelopment,
//     injectedAccounts,
//   };
// };

// export function useExtensions(api: ApiPromise, store: any) {
//   const [extensions, setExtentions] = useState<InjectedExtension[]>([]);

//   (async () => {
//     try {
//       //   if (isMobileDevice) {
//       //     // MEMO: resolve the issue that do not sync accounts in nova wallet
//       //     await wait(400);
//       //   }
//       const injectedPromise = await getInjectedExtensions(true);
//       setExtentions(await injectedPromise);

//       // MEMO: tricky way to fix this : after approving extension first, web3Accounts is not retrieving extension address to add
//       //   const selectedAddress = localStorage.getItem(
//       //     LOCAL_STORAGE.SELECTED_ADDRESS
//       //   );
//       const selectedAddress =
//         "12F6tAQXjpkjH3SrxTeDM58c3rmQoJsNeiiq8ERVM6xKJDtG1";
//       if (!selectedAddress) {
//         await loadAccounts(api);
//       }
//       const { isDevelopment, injectedAccounts } = await loadAccounts(api);

//       keyring.loadAll(
//         {
//           genesisHash: api.genesisHash,
//           isDevelopment,
//           ss58Format: 5,
//         },
//         injectedAccounts
//       );
//     } catch (err) {
//       console.error(err);
//     }
//   })();

//   return {
//     extensions,
//   };
// }
