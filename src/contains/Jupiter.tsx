import React, { useCallback, useEffect, useState } from 'react';
import { DEFAULT_EXPLORER, FormProps } from '../types/index';
import { useUnifiedWalletContext, useWallet } from '@jup-ag/wallet-adapter';

const JupiterTerminal = (props: {
  rpcUrl: string;
  formProps: FormProps;
  simulateWalletPassthrough: boolean;
  strictTokenList: boolean;
  defaultExplorer: DEFAULT_EXPLORER;
  useUserSlippage: boolean;
}) => {
  const { rpcUrl, formProps, simulateWalletPassthrough, strictTokenList, defaultExplorer, useUserSlippage } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  const passthroughWalletContextState = useWallet();
  const { setShowModal } = useUnifiedWalletContext();

  const launchTerminal = useCallback(async () => {
    window.Jupiter.init({
      displayMode: 'integrated',
      integratedTargetId: 'integrated-terminal',
      endpoint: rpcUrl,
      formProps,
      enableWalletPassthrough: simulateWalletPassthrough,
      passthroughWalletContextState: simulateWalletPassthrough ? passthroughWalletContextState : undefined,
      onRequestConnectWallet: () => setShowModal(true),
      strictTokenList,
      defaultExplorer,
      useUserSlippage
    });
  }, [
    defaultExplorer,
    formProps,
    passthroughWalletContextState,
    rpcUrl,
    setShowModal,
    simulateWalletPassthrough,
    strictTokenList,
    useUserSlippage,
  ]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined = undefined;
    
    if (!isLoaded || !window.Jupiter.init) {
      intervalId = setInterval(() => {
        setIsLoaded(Boolean(window.Jupiter.init));
      }, 500);
    }

    if (intervalId) {
      return () => clearInterval(intervalId);
    }
  }, [isLoaded]);

  useEffect(() => {
    setTimeout(() => {
      if (isLoaded && Boolean(window.Jupiter.init)) {
        launchTerminal();
      }
    }, 200);
  }, [isLoaded, simulateWalletPassthrough, props, launchTerminal]);

  // To make sure passthrough wallet are synced
  useEffect(() => {
    if (!window.Jupiter.syncProps) return;
    window.Jupiter.syncProps({ passthroughWalletContextState });
  }, [passthroughWalletContextState, props]);

  return (
    <div className="h-[400px] w-full rounded-2xl text-white flex flex-col items-center p-1 lg:p-2 mb-1 overflow-hidden mt-9">
      <div className="flex flex-col lg:flex-row h-full w-full overflow-auto">
        <div className="w-full h-full rounded-xl overflow-hidden flex justify-center">
          {/* Loading state */}
          {!isLoaded ? (
            <div className="h-full animate-pulse w-[384px] bg-white/10 mt-4 lg:mt-0 lg:ml-4 flex items-center justify-center rounded-xl">
              <p className="">Loading...</p>
            </div>
          ) : null}

          <div
            id="integrated-terminal"
            className={`flex h-full w-[384px] overflow-auto justify-center bg-[#282830] rounded-xl ${
              !isLoaded ? 'hidden' : ''
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default JupiterTerminal;
