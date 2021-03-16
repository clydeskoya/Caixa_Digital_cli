export default [
  {
    type: 'reminder',
    details: { when: '2021-03-08', datetimeNotification: '2021-03-12T20:21:46.742Z' },  //when--- data da reserva ( embora seja irrelevante pois esta notificação só vai ser enviada do server no dia da reserva)
  },
  {
    type: 'newCorresp',
    details: { when: '2021-03-08', from: 'Notino', datetimeNotification: '2021-03-08T20:21:46.742Z' },  // quando é que o operador depositou a encomenda para o cliente levantar
  },
  {
    type: 'correspSent',
    details: { when: '2021-03-04', to: 'Finanças', datetimeNotification: '2021-03-08T20:21:46.742Z' }, // esse quando é relativamente à data do depósito da correspondencia
  },
 /*  {
    type: 'correspSent',
    details: { when: '2021-03-04', to: 'Finanças', datetimeNotification: '2021-03-08T20:21:46.742Z' }, // esse quando é relativamente à data do depósito da correspondencia
  }, */
];
