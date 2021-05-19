export const getIsReservaEnvio = (dataArg) => dataArg.orderType === 'send' && dataArg.isDeposited === false;

export const getIsReservaRecebimentoPrePago = (dataArg) =>
  dataArg.orderType === 'receive' && dataArg.isDeposited === false && dataArg.state === 'paid';

export const getIsReservaRecebimentoNaoPago = (dataArg) =>
  dataArg.orderType === 'receive' && dataArg.isDeposited === false && dataArg.state === 'unpaid';

export const getIsRecebimentosPorLevantar = (dataArg) =>
  dataArg.orderType === 'receive' &&
  dataArg.isDeposited === true &&
  dataArg.state === 'paid' &&
  dataArg.isWithdrawn === false;

export const getIsCorrespondenciasEmTransito = (dataArg) =>
  dataArg.orderType === 'send' && dataArg.isDeposited === true && dataArg.isWithdrawn === true;

export const getIsCorrespondenciasEmEspera = (dataArg) =>
  dataArg.orderType === 'send' && dataArg.isDeposited === true && dataArg.isWithdrawn === false;

export const getIsCorrespondenciasEntreguesAClientesComApp = (dataArg) =>
  dataArg.orderType === 'send' &&
  dataArg.isDeposited === true &&
  dataArg.isWithdrawn === true &&
  !!dataArg.matching_receive_order === true;

export const getIsCorrespondenciasLevantadas = (dataArg) =>
  dataArg.orderType === 'receive' &&
  dataArg.isDeposited === true &&
  dataArg.isWithdrawn === true &&
  dataArg.state === 'paid';
