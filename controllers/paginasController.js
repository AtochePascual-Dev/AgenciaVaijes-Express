const paginaNosotros = (req, res) => { // req lo que enviamos : res lo que express nos responde
  res.render('../views/nosotros.pug', {
    pagina: 'Nosotros'
  })
}

export {
  paginaNosotros,
}