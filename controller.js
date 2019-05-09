let controller = {};

controller.list = (req, res, next) => {
    req.getConnection((err, conn) => {
    if (err) {
        res.send(`Errore ${err}`)  //callback
    }
    conn.query('SELECT * FROM customer', (err, rows) => {
        if (err) {
            res.send(`Errore ${err} in database`);
        }
 
        if (rows.length === 0) {
            res.send('Empty database');
        }

        res.send({
            data: rows
         });
        });
    });
  };

  module.exports = controller;
 
 