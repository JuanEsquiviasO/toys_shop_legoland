const $form = $('#suscribeForm')
const $formGroup = $form.find('.form-group')
const $formControl = $formGroup.find('.form-control')

$form.submit(function (ev) {
  ev.preventDefault()

  const error = Math.random() > 0.5
  $formGroup.removeClass().addClass('form-group')
  $formControl.removeClass().addClass('form-control')
  $formGroup.addClass( error ? 'has-danger' : 'has-success')
  $formControl.addClass( error ? 'form-control-danger' : 'form-control-success')
  $formGroup.find('form-control-feedback').remove()

  var el;
  if (error) {
    el = $('<div>', { html: 'An error has occurred' })
  }else {
    el = $('<div>', { html: 'We will send all the news' })
  }
  el.addClass('form-control-feedback')
  $formGroup.append(el)
})
