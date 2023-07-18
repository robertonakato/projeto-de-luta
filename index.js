  let log = new Log(document.querySelector('.log'));
  let char = new Guerreiro(document.querySelector('#input').value);
  let monster = new Inimigo();

  const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
  );
  stage.Start();