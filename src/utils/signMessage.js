/* eslint-disable no-undef */
/* eslint-disable consistent-return */

export const signMessage = async (message) => {
  try {
    if (typeof window.ethereum === 'undefined') {
      throw new Error('No crypto wallet found!');
    }

    await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const signature = await signer.signMessage(message);

    return signature;
  } catch (error) {
    window.alert('The signing was rejected');
  }
};
