import PouchDB from 'pouchdb';

const DOC_ID = 'main-carteira';

const db = new PouchDB('localdb');

let carteira;

export default {
  init(cb) {
    db.get(DOC_ID, (err, doc) => {
      if (err) {
        db.put({
          "_id": DOC_ID,
          saldo: 0,
          lancamentos: [],
        }, (err, createdDoc) => {
          if (!err) {
            carteira = createdDoc;
            cb(true);
            console.log(carteira);
          } else {
            cb(false);
          }
        });
      } else {
        carteira = doc;
        console.log(carteira);
        cb(true);
      }
    });
  },
  _update() {
    db.put(carteira, (err, result) => {
      if (err) {
        console.error(err);
      }
    });
  },
  getLancamentos() {
    console.log(carteira);
    console.log(carteira.lancamentos);
    return carteira.lancamentos;
  },
  getSaldo() {
    return carteira.saldo;
  },
  setSaldo(saldo) {
    carteira.saldo = saldo;
    this._update();
  },
  addLancamento(lancamento) {
    carteira.lancamentos.push(lancamento);
    carteira.saldo += lancamento.valor;
    this._update();
  }
};
